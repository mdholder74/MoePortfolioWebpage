function toggleMenu(){
    const hamburgerMenu = document.querySelector(".hamburger-links");
    const iconDash = document.querySelector(".hamburger-icon-dash");
    hamburgerMenu.classList.toggle("open");// This will toggle the class open on the menu when the hamburger icon is clicked
    iconDash.classList.toggle("open"); // This will toggle the class open on the hamburger icon when it is clicked
}