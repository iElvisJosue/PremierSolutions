const Body = document.body;
const ShowNavbar = document.querySelector(".Option-Show-Navbar");
const Menu = document.querySelector(".Menu");
const CloseMenu = document.querySelector(".Menu-Close");

ShowNavbar.addEventListener("click", () => {
    Menu.classList.add("Menu-Show");
    Body.classList.add("Stop-Scrolling");
})
CloseMenu.addEventListener("click", () => {
    Menu.classList.remove("Menu-Show");
    Body.classList.remove("Stop-Scrolling");
})
function ExitMenu(){
    Menu.classList.remove("Menu-Show");
    Body.classList.remove("Stop-Scrolling");
}