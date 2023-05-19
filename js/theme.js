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
    VarCSS.style.setProperty('--Orange', '#F45050');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[1].addEventListener("click", () => {
    VarCSS.style.setProperty('--Orange', '#19A7CE');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[2].addEventListener("click", () => {
    VarCSS.style.setProperty('--Orange', '#806F21');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[3].addEventListener("click", () => {
    VarCSS.style.setProperty('--Orange', '#654E92');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[4].addEventListener("click", () => {
    VarCSS.style.setProperty('--Orange', '#C25797');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[5].addEventListener("click", () => {
    VarCSS.style.setProperty('--Orange', '#EB6440');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[6].addEventListener("click", () => {
    VarCSS.style.setProperty('--Orange', '#008000');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})
Theme[7].addEventListener("click", () => {
    VarCSS.style.setProperty('--Orange', '#222222');
    MenuDisplay.classList.remove("ShowDisplay");
    Bodi.classList.remove("Stop-Scrolling");
})