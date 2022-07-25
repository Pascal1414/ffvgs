/*window.addEventListener("load", function() {
    let images = document.getElementsByClassName("img");

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() { imageClick(images[i].id) });
    }
}, false);*/

var all;
var imageClone;
var backgroundColor;

function imageClick(image) {
    imageClone = image.cloneNode(true);;
    all = document.getElementsByTagName("section");
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    var nav = document.getElementsByTagName("nav");
    for (i = 0; i < nav.length; i++) {

        nav[i].style.display = "none";
    }



    backgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "black";

    image.style.display = "block";



    var imageprev = document.getElementsByClassName("image-preview");
    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].appendChild(imageClone);
        imageprev[i].style.display = "flex";
    }
    scrollTo(document.body);
}

function exit() {
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "block";
    }

    var nav = document.getElementsByTagName("nav");
    for (i = 0; i < nav.length; i++) {
        nav[i].style.display = "block";
    }


    var imageprev = document.getElementsByClassName("image-preview");
    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].removeChild(imageClone);
        imageprev[i].style.display = "none";
    }

    document.body.style.backgroundColor = backgroundColor;


    var hash = window.location.href.substring(window.location.href.indexOf("#") + 1);

    if (hash == "home") {
        cathegoryClick("home");
    } else if (hash == "programm") {
        cathegoryClick("programm");

    } else if (hash == "organe") {
        cathegoryClick("organe");

    } else if (hash == "jugend") {
        cathegoryClick("jugend");

    } else if (hash == "berichte") {
        cathegoryClick("berichte");

    } else if (hash == "galerie") {
        cathegoryClick("galerie");

    } else if (hash == "kontakt") {
        cathegoryClick("kontakt");

    } else if (hash == "boot") {
        cathegoryClick("boot");
    } else {
        cathegoryClick("home");
    }

    //imageClone.scrollIntoView();
}