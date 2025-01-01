function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");// This will toggle the class open on the menu when the hamburger icon is clicked
    icon.classList.toggle("open"); // This will toggle the class open on the hamburger icon when it is clicked
}