/*window.addEventListener("load", function() {
    let images = document.getElementsByClassName("img");

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() { imageClick(images[i].id) });
    }
}, false);*/


function imageClick(image) {
    var all = document.getElementsByTagName("section");
    for (i = 0; i < all.length; i++) {

        all[i].style.pointerEvents = "none";
        all[i].style.opacity = 0.4;

    }
    var nav = document.getElementsByTagName("nav");
    for (i = 0; i < nav.length; i++) {

        nav[i].style.display = "none";
    }

    console.log(image.top);
    image.style.display = "block";
    image.style.position = "absolute";
    image.style.top = 0;
    image.style.left = "10%";
    image.style.width = "80%";

    var imageprev = document.getElementsByClassName("image-preview");
    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].appendChild(image);
    }

}