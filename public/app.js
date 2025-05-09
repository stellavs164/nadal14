const images = ['1.2.jpg', '2.2.jpg', '3.2.jpg'];
const targetImage = document.querySelector('.profile-photo img');
let i = 1;


targetImage.addEventListener('click', () => {


    targetImage.style.opacity = '0';


    setTimeout(() => {


        if (i === images.length) {
            i = 0;
        }


        targetImage.src = 'images/' + images[i];
        i++;


        targetImage.style.opacity = '1';


    }, 200);


});