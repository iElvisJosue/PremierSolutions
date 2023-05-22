const MailForm = document.getElementById('MailForm');
const BtnSubmit = document.getElementById('BtnSubmit');
const BtnSendLoad = document.querySelector('.Button-Send-Load');
const IconSendLoad = document.querySelector('.Icon-Send-Load');
const AlertSuccess = document.querySelector(".Alert-Success");
const AlertError = document.querySelector(".Alert-Error");

MailForm.addEventListener('submit', function(event) {event.preventDefault();

    BtnSendLoad.innerHTML = "SENDING";
    IconSendLoad.innerHTML = "refresh";
    IconSendLoad.classList.add("Active");

    const serviceID = 'default_service';
    const templateID = 'template_it46bfn';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            AlertSuccess.classList.add("Active");
            IconSendLoad.innerHTML = "arrow_outward";
            IconSendLoad.classList.remove("Active");
            BtnSendLoad.innerHTML = "SEND EMAIL";
            MailForm.reset();
            setTimeout(() => {
                AlertSuccess.classList.remove("Active");
            },5000)
        }, (err) => {
            AlertError.classList.add("Active");
            IconSendLoad.innerHTML = "arrow_outward";
            IconSendLoad.classList.remove("Active");
            BtnSendLoad.innerHTML = "SEND EMAIL";
            MailForm.reset();
            setTimeout(() => {
                AlertError.classList.remove("Active");
            },5000)
    });
});