const Services3Height = document.querySelector('.Services-3-Details').clientHeight;
const Services = document.querySelectorAll(".Services-1, .Services-2, .Services-3");
const ButtonDetails = document.querySelectorAll(".Button-Details");
var Change = 0;
var Change2 = 0;
var Change3 = 0;

ButtonDetails[0].addEventListener("click", () => {
    if (Change == 0){
        Services[0].classList.add("active");
        ButtonDetails[0].classList.add("active");
        ButtonDetails[0].innerHTML = "HIDE DETAILS";
        Change = 1;
    }else{
        Services[0].classList.remove("active");
        ButtonDetails[0].classList.remove("active");
        ButtonDetails[0].innerHTML = "SEE DETAILS";
        Change = 0;
    }
})
ButtonDetails[1].addEventListener("click", () => {
    if (Change2 == 0){
        Services[1].classList.add("active");
        ButtonDetails[1].classList.add("active");
        ButtonDetails[1].innerHTML = "HIDE DETAILS";
        Change2 = 1;
    }else{
        Services[1].classList.remove("active");
        ButtonDetails[1].classList.remove("active");
        ButtonDetails[1].innerHTML = "SEE DETAILS";
        Change2 = 0;
    }
})
ButtonDetails[2].addEventListener("click", () => {
    if (Change3 == 0){
        Services[2].classList.add("active");
        ButtonDetails[2].classList.add("active");
        ButtonDetails[2].innerHTML = "HIDE DETAILS";
        Services[2].style.height = Services3Height+"px";
        Change3 = 1;
    }else{
        Services[2].classList.remove("active");
        ButtonDetails[2].classList.remove("active");
        ButtonDetails[2].innerHTML = "SEE DETAILS";
        Services[2].style.height = "250px";
        Change3 = 0;
    }
})
