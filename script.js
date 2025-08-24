function toggleMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-links");
  const iconDash = document.querySelector(".hamburger-icon-dash");
  hamburgerMenu.classList.toggle("open");
  iconDash.classList.toggle("open");
}

// Wait for the HTML document to be completely loaded and parsed before running the function.
// This ensures all HTML elements exist in the DOM and can be safely accessed by JavaScript,
// but doesn't wait for images, stylesheets, or other resources to finish loading.
document.addEventListener("DOMContentLoaded", function () {
  // Get elements AFTER DOM is loaded
  // Allows for manipulation of elements like clicking the button, showing/hiding messages etc.
  const submitBtn = document.getElementById("book-submitBtn");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  // Call function to load and display book recommendations when the page first loads
  loadRecommendations();

  // Makes sure the submit button element actually exists before trying to add event listener
  if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      // Prevent the browser's default form submission behavior (stops page refresh/redirect)
      // This allows us to handle the form submission with custom JavaScript instead
      e.preventDefault();

      // Hides any previously displayed messages
      // This ensures users see fresh feedback and old messages don't interfere
      if (successMessage) successMessage.style.display = "none";
      if (errorMessage) errorMessage.style.display = "none";

      // Get form data - retrieve values from each input field and remove extra whitespace
      const author = document.getElementById("author").value.trim();
      const bookTitle = document.getElementById("bookTitle").value.trim();
      const genre = document.getElementById("genre").value.trim();
      const message = document.getElementById("message").value.trim();

      // Create a single object to organize all form data together
      // This makes the data easier to pass around, validate, and send to APIs
      const bookData = {
        author: author,
        bookTitle: bookTitle,
        genre: genre,
        message: message,
        timestamp: new Date().toISOString(),
      };

      // Validation - check if required fields are filled before proceeding
      if (!bookData.author || !bookData.bookTitle || !bookData.genre) {
        showError("Please fill in all required fields.");
        return;
      }

      // Main form submission handling with error protection
      try {
        // Attempt to save the book recommendation data to localStorage
        saveBookRecommendation(bookData);
        showSuccess("📚 Thank you for your book recommendation!");

        // Clear all form fields after successful submission to reset form for next use
        document.getElementById("author").value = "";
        document.getElementById("bookTitle").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("message").value = "";
         
        loadRecommendations();
      } catch (error) {
        console.error("Error submitting recommendation:", error);
        showError("Something went wrong. Please try again.");
      }
    });
  }

  // Function to display success messages to users
  function showSuccess(message) {
    if (successMessage) {
      successMessage.textContent = message;
      successMessage.style.display = "block";
      successMessage.style.visibility = "visible";
      successMessage.style.opacity = "1";

      // Automatically hide the success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }
  }

  // Function to display error messages to users
  function showError(message) {
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
      errorMessage.style.visibility = "visible";
      errorMessage.style.opacity = "1";

      // Auto-hide after 5 seconds
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 5000);
    }
  }
});

// Function to save book recommendation data to browser's localStorage
function saveBookRecommendation(bookData) {
  // Retrieve existingRecommendations recommendations from localStorage or start with empty array if none exist
  const existingRecommendations = JSON.parse(
    localStorage.getItem("savedBookRecommendations") || "[]"
  );
  existingRecommendations.unshift(bookData); // Add new recommendation to BEGINNING of array to keep the most recent first
  const limited = existingRecommendations.slice(0, 5); // Keep only the 5 most recent recommendations to limit storage size
  localStorage.setItem("savedBookRecommendations", JSON.stringify(limited));  // Save updated array back to localStorage as a JSON string
}
// Function to load and display saved recommendations
function loadRecommendations() {
  // Retrieve savedBookRecommendations from localStorage or start with empty array if none exist
  const recommendations = JSON.parse(
    localStorage.getItem("savedBookRecommendations") || "[]"
  );
  // Exit if no recommendations exist there is nothing to display
  if (recommendations.length === 0) {
    return;
  }

  // Display each recommendation in the console (for demonstration purposes)
  recommendations.forEach((rec) => {
    console.log(`I recommend "${rec.bookTitle}" by ${rec.author} a [${rec.genre}] book`);
  });
}
