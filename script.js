imgNumber = 0;
function animacaoLogo() {
    imgNumber++;

    const animation = document.getElementById('logo');

    animation.src = "./img/paunchy"+ imgNumber +".png";

    if (imgNumber >= 11) {
        imgNumber = -1;
    }

    setTimeout(animacaoLogo, 80);
}