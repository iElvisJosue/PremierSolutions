const MailForm = document.getElementById('MailForm');
const BtnSubmit = document.getElementById('BtnSubmit');
const AlertSuccess = document.querySelector(".Alert-Success");
const AlertError = document.querySelector(".Alert-Error");

MailForm.addEventListener('submit', function(event) {event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_it46bfn';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            AlertSuccess.classList.add("Active");
            setTimeout(() => {
                AlertSuccess.classList.remove("Active");
                MailForm.reset();
            },5000)
        }, (err) => {
            AlertError.classList.add("Active");
            setTimeout(() => {
                AlertError.classList.remove("Active");
            },5000)
    });
});