// Chatbot functionality for Moe's portfolio
class PortfolioChatbot {
  constructor() {
    this.chatMessages = document.getElementById("chatMessages");
    this.chatInput = document.getElementById("chatInput");
    this.sendBtn = document.getElementById("sendBtn");
    this.typingIndicator = document.getElementById("typingIndicator");

    this.init();
  }

  init() {
    // Add event listeners
    this.sendBtn.addEventListener("click", () => this.sendMessage());
    this.chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.sendMessage();
      }
    });
  }

  sendMessage() {
    const message = this.chatInput.value.trim();
    if (!message) return;

    // Add user message to chat
    this.addMessage(message, "user");
    this.chatInput.value = "";

    // Show typing indicator
    this.showTypingIndicator();

    // Generate bot response after a delay
    setTimeout(() => {
      this.hideTypingIndicator();
      const response = this.generateResponse(message);
      this.addMessage(response, "bot");
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;

    const avatar = document.createElement("div");
    avatar.className = `message-avatar ${sender}`;
    avatar.textContent = sender === "bot" ? "AI" : "You";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = text;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    this.chatMessages.appendChild(messageDiv);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    this.typingIndicator.style.display = "flex";
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    this.typingIndicator.style.display = "none";
  }

  scrollToBottom() {
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  }

  generateResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Skills and technical questions
    if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("programming") ||
      lowerMessage.includes("language") ||
      lowerMessage.includes("tech")
    ) {
      return "Moe is skilled in C#, C++, JavaScript, Java, HTML, and CSS. She has strong frontend and backend experience using frameworks like Angular, React, Node.js, and Express.js. She's also proficient in SQL (MySQL), NoSQL (MongoDB), Git/GitHub, Postman, CI/CD pipelines, Microsoft Power BI, and Agile (Scrum).";
    }

    // Experience questions
    if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("job")
    ) {
      return "Moe has experience as a Software Developer Intern at PulteGroup, where she built an Angular + C# Web API learning dashboard and authored onboarding documentation. She also tutors software engineering students at Per Scholas, boosting project completion rates by 30%. Before transitioning into tech, she worked in HR and recruiting at Amazon Web Services, where she developed tools, optimized processes, and led teams.";
    }

    // Amazon-specific questions
    if (lowerMessage.includes("amazon")) {
      return "At Amazon, Moe served in multiple roles, from Human Resources Generalist to Recruiting Coordinator and Full-Cycle Recruiter at AWS. She streamlined onboarding for 400+ new hires, built digital newsletters for 10+ sites, hired 15+ candidates per month across 10+ states, and received multiple Amazon awards (Elevation '19, Leadership Principle '21, Employee Spotlight '22).";
    }

    // Projects questions
    if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("build") ||
      lowerMessage.includes("created")
    ) {
      return "Moe has built several projects: a Chrome Extension called 'Website Link Saver' for organizing saved links, an Amazon-inspired e-commerce clone with interactive cart functionality, and a personal portfolio website. She also contributed to enterprise-level applications at PulteGroup using Angular.";
    }

    // Education questions
    if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("school") ||
      lowerMessage.includes("degree") ||
      lowerMessage.includes("study")
    ) {
      return "Moe is pursuing a B.S. in Computer Science at the University of West Georgia (expected Dec 2026, GPA 3.56). She earned a Software Engineering Certification (MERN stack) from Per Scholas in 2025, an IT Fundamentals Certification from Atlanta Technical College in 2024, and an MBA in Human Resource Management from North Carolina A&T State University in 2017.";
    }

    // Location questions
    if (
      lowerMessage.includes("location") ||
      lowerMessage.includes("where") ||
      lowerMessage.includes("live") ||
      lowerMessage.includes("atlanta")
    ) {
      return "Moe is based in Atlanta, GA, and is open to remote, hybrid, or on-site roles.";
    }

    // Contact questions
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("reach")
    ) {
      return "You can contact Moe at mdholder74@gmail.com, connect on LinkedIn (linkedin.com/in/moeholder), or view her work on GitHub (github.com/mdholder74).";
    }

    // Resume questions
    if (lowerMessage.includes("resume") || lowerMessage.includes("cv")) {
      return "You can view Moe's full resume by clicking 'View Resume' in the portfolio hero section. It includes her professional summary, education, technical skills, projects, and detailed experience at PulteGroup, Per Scholas, Southwire, and Amazon.";
    }

    // Strengths/qualities questions
    if (
      lowerMessage.includes("strength") ||
      lowerMessage.includes("quality") ||
      lowerMessage.includes("good at")
    ) {
      return "Moe excels at problem-solving, cross-functional collaboration, and creating user-centric solutions. She has experience mentoring, writing documentation, and translating technical concepts for others, while bringing patience, humor, and leadership skills to her work.";
    }

    // Goals/looking for questions
    if (
      lowerMessage.includes("looking for") ||
      lowerMessage.includes("goal") ||
      lowerMessage.includes("want")
    ) {
      return "Moe is looking for opportunities in software engineering where she can leverage her full-stack development skills, collaborate with innovative teams, and build impactful applications. She's particularly interested in roles that combine technical challenges with mentoring and knowledge sharing.";
    }

    // Greeting responses
    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      return "Hello! I'm here to help you learn more about Moe Holder's professional background. Feel free to ask about her skills, experience, projects, or anything else you'd like to know!";
    }

    // Thank you responses
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're welcome! Is there anything else you'd like to know about Moe's background or experience?";
    }

    // Hobby/personal questions
    if (
      lowerMessage.includes("hobby") ||
      lowerMessage.includes("interest") ||
      lowerMessage.includes("fun")
    ) {
      return "Outside of work, Moe enjoys football (go Panthers), basketball (go Lakers!), traveling, combat sports, and learning through YouTube tutorials.";
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "That's an interesting question! Moe is a dynamic professional transitioning from HR into Software Engineering with hands-on experience in full-stack development, API integration, and database management.",
      "I'd love to help you learn more about Moe! She's skilled in both frontend and backend technologies, currently pursuing her CS degree, and looking for opportunities to make meaningful impact.",
      "Great question! Moe combines technical expertise with an MBA and years of leadership experience at Amazon. What specific aspect would you like to know more about?",
      "Thanks for asking! Moe is passionate about innovative technology solutions and collaborative problem-solving. Feel free to ask about her specific skills, projects, or experience!",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  }
}

// Initialize the chatbot when the page loads
document.addEventListener("DOMContentLoaded", function () {
  new PortfolioChatbot();
});

// Global sendMessage function for the onclick handler
function sendMessage() {
  // This will be handled by the PortfolioChatbot instance
  // The class handles the actual functionality
}
