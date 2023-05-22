const Bodi = document.body;
const VarCSS = document.querySelector(':root');
const BtnTheme = document.querySelector(".Show-Colors");
const MenuDisplay = document.querySelector(".Menu-Display");
const CloseMenuTheme = document.querySelector(".Close-MenuTheme");
const Theme = document.querySelectorAll(".Theme-1, .Theme-2, .Theme-3, .Theme-4, .Theme-5, .Theme-6, .Theme-7, .Theme-8");

BtnTheme.addEventListener("click", () => {
    MenuDisplay.classList.add("ShowDisplay");
    Bodi.classList.add("Stop-Scrolling");;
})
CloseMenuTheme.addEventListener("click", () => {
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[0].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#667eea');
    VarCSS.style.setProperty('--SecundaryColor', '#764ba2');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[1].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#b062d2');
    VarCSS.style.setProperty('--SecundaryColor', '#ee609c');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[2].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#8baaaa');
    VarCSS.style.setProperty('--SecundaryColor', '#ae8b9c');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[3].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#f43b47');
    VarCSS.style.setProperty('--SecundaryColor', '#453a94');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[4].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#f83600');
    VarCSS.style.setProperty('--SecundaryColor', '#ec8c69');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[5].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#1f6a5a');
    VarCSS.style.setProperty('--SecundaryColor', '#30785e');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[6].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#4e36bd');
    VarCSS.style.setProperty('--SecundaryColor', '#2768d5');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[7].addEventListener("click", () => {
    VarCSS.style.setProperty('--MainColor', '#23263a');
    VarCSS.style.setProperty('--SecundaryColor', '#27555b');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})