/*window.addEventListener("load", function() {
    let images = document.getElementsByClassName("img");

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() { imageClick(images[i].id) });
    }
}, false);*/

var all;
var currentimage;

function imageClick(image) {
    currentimage = image;
    all = document.getElementsByTagName("section");
    for (i = 0; i < all.length; i++) {

        /* all[i].style.pointerEvents = "none";
        all[i].style.opacity = 0.4;
*/
        all[i].style.display = "none";

    }
    var nav = document.getElementsByTagName("nav");
    for (i = 0; i < nav.length; i++) {

        nav[i].style.display = "none";
    }

    image.style.display = "block";
    /*image.style.position = "absolute";
    image.style.top = 0;
    image.style.left = "10%";
    image.style.width = "80%";*/

    var imageprev = document.getElementsByClassName("image-preview");
    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].appendChild(image);
        imageprev[i].style.display = "flex";
    }

}

function exit() {
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "block";
    }
    var imageprev = document.getElementsByClassName("image-preview");
    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].removeChild(currentimage);
        imageprev[i].style.display = "none";
    }
}