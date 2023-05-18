const Welcome = document.querySelectorAll(".Welcome, .Profile, .Work-Tittle, .Work-Presentation, .Wip");
// const Navbar = document.querySelector(".Navbar");
const ButtonTop = document.querySelector(".Button-Top");

const Observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            // Navbar.classList.remove("Navbar-Dark");
            ButtonTop.classList.remove("Button-Top-Show");
        }else{
            // Navbar.classList.add("Navbar-Dark");
            ButtonTop.classList.add("Button-Top-Show");
        }
    })
},{
    threshold: .7,
    rootMargin: '0px'
});

Welcome.forEach(elementoObservado => {
    Observer.observe(elementoObservado);
})