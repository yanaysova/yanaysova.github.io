let iframeLinks = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12937740656!2d-104.9951923067126!3d39.76451867096988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sil!4v1672090671791!5m2!1sen!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442132.137618745!2d-90.45686184093957!3d30.03234404321184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sil!4v1672502658140!5m2!1sen!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87006.97558096124!2d8.247212997259428!3d47.040858985816804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffa2a79547379%3A0xaef02ad1409952af!2sLucerne%2C%20Switzerland!5e0!3m2!1sen!2sil!4v1672488665840!5m2!1sen!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40149.437463048904!2d-73.2967407821729!3d44.49310002875067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca7a55b69b55e5%3A0xc35fe519720e498e!2sBurlington%2C%20VT%2C%20USA!5e0!3m2!1sen!2sil!4v1672503739497!5m2!1sen!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9794.609960692176!2d-10.289425552923092!3d52.14064258927219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484ffbc7249c4991%3A0xa00c7a99731cc00!2sDingle%2C%20Co.%20Kerry%2C%20Ireland!5e0!3m2!1sen!2sil!4v1672573995026!5m2!1sen!2sil"];

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSelected = 0;

nextButton.addEventListener('click', function () {

    currentSelected++;

    document.getElementById("iframe-links").src = iframeLinks[currentSelected];

    checkButtons();

});

prevButton.addEventListener('click', function () {

    currentSelected--;

    document.getElementById("iframe-links").src = iframeLinks[currentSelected];

    checkButtons();
});


function checkButtons (){
        
    if (iframeLinks.length === currentSelected + 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

    if(currentSelected === 0){
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
}