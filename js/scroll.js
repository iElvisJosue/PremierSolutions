const ButtonTop = document.querySelector(".Button-Top");
const Welcome = document.querySelectorAll(".Welcome");
const AboutUsMain = document.querySelectorAll(".AboutUs-Main");
const ServicesMain = document.querySelectorAll(".Services-Test, .Services-List");
const TeamMain = document.querySelectorAll(".Team-Test, .Team-Member");
const MailMain = document.querySelectorAll(".Mail-Main");
const ClientsMain = document.querySelectorAll(".Clients-Main");
const Slogan = document.querySelectorAll(".Slogan");
const ObserverElements = document.querySelectorAll(".AboutUs-Main, .Services-Main, .Team-Main, .Mail-Main, .Clients-Main, .Slogan");

const ObserverWelcome = new IntersectionObserver((EntradasWelcome) => {
    EntradasWelcome.forEach(EntradaWelcome => {
        if(EntradaWelcome.isIntersecting){
            ButtonTop.classList.remove("Button-Top-Show");
        }else{
            ButtonTop.classList.add("Button-Top-Show");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});
const ObserverAboutUsMain = new IntersectionObserver((EntradasAboutUsMain) => {
    EntradasAboutUsMain.forEach(EntradaAboutUsMain => {
        if(EntradaAboutUsMain.isIntersecting){
            ObserverElements[0].classList.add("Active");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});
const ObserverServicesMain = new IntersectionObserver((EntradasServicesMain) => {
    EntradasServicesMain.forEach(EntradaServicesMain => {
        if(EntradaServicesMain.isIntersecting){
            ObserverElements[1].classList.add("Active");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});
const ObserverTeamMain = new IntersectionObserver((EntradasTeamMain) => {
    EntradasTeamMain.forEach(EntradaTeamMain => {
        if(EntradaTeamMain.isIntersecting){
            ObserverElements[2].classList.add("Active");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});
const ObserverMailMain = new IntersectionObserver((EntradasMailMain) => {
    EntradasMailMain.forEach(EntradaMailMain => {
        if(EntradaMailMain.isIntersecting){
            ObserverElements[3].classList.add("Active");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});
const ObserverClientsMain = new IntersectionObserver((EntradasClientsMain) => {
    EntradasClientsMain.forEach(EntradaClientsMain => {
        if(EntradaClientsMain.isIntersecting){
            ObserverElements[4].classList.add("Active");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});
const ObserverSlogan = new IntersectionObserver((EntradasSlogan) => {
    EntradasSlogan.forEach(EntradaSlogan => {
        if(EntradaSlogan.isIntersecting){
            ObserverElements[5].classList.add("Active");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});
Welcome.forEach(WelcomeObservado => {
    ObserverWelcome.observe(WelcomeObservado);
})
AboutUsMain.forEach(AboutUsMainObservado => {
    ObserverAboutUsMain.observe(AboutUsMainObservado);
})
ServicesMain.forEach(ServicesMainObservado => {
    ObserverServicesMain.observe(ServicesMainObservado);
})
TeamMain.forEach(TeamMainObservado => {
    ObserverTeamMain.observe(TeamMainObservado);
})
MailMain.forEach(MailMainObservado => {
    ObserverMailMain.observe(MailMainObservado);
})
ClientsMain.forEach(ClientsMainObservado => {
    ObserverClientsMain.observe(ClientsMainObservado);
})
Slogan.forEach(SloganObservado => {
    ObserverSlogan.observe(SloganObservado);
})