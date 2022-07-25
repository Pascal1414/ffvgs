/*window.addEventListener("load", function() {
    let images = document.getElementsByClassName("img");

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() { imageClick(images[i].id) });
    }
}, false);*/

var all;
var imageClone;
var imagelist;
var currentimage;

function imageClick(image) {
    currentimage = image;
    imageClone = image.cloneNode(true);
    imageClone.onclick = function() {
        return false;
    }
    all = document.getElementsByTagName("section");
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    var nav = document.getElementsByTagName("nav");
    for (i = 0; i < nav.length; i++) {

        nav[i].style.display = "none";
    }



    document.body.style.backgroundColor = "black";
    var main = document.getElementsByTagName("main");
    for (i = 0; i < main.length; i++) {
        main[i].style.paddingTop = 0;
    }

    imageClone.style.display = "block";


    var imageprev = document.getElementsByClassName("image-preview");
    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].appendChild(imageClone);
        imageprev[i].style.display = "flex";
    }

    scrollTo(document.body);


    imagelist = getImageParent(image).children;
}

function exit() {

    var main = document.getElementsByTagName("main");
    for (i = 0; i < main.length; i++) {
        main[i].style.paddingTop = "calc(var(--nav-height-tablet) + 20px)";
    }

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

    document.body.style.backgroundColor = "#f9f9f9";


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

    currentimage.parentElement.parentElement.scrollIntoView();
}

function next() {
    currentImageId = getCurrentItemIdprev(currentimage);
    if (imagelist.length > currentImageId + 1) {
        exit();
        updateToItemprev(imagelist[currentImageId + 1].firstElementChild);
    } else {
        exit();
        updateToItemprev(imagelist[0].firstElementChild);
    }
}

function previous() {
    currentImageId = getCurrentItemIdprev(currentimage);
    if (0 <= currentImageId - 1) {
        exit();
        updateToItemprev(imagelist[currentImageId - 1].firstElementChild);
    } else {
        exit();
        updateToItemprev(imagelist[imagelist.length - 1].firstElementChild);
    }
}

function getCurrentItemIdprev(image) {
    for (i = 0; i < imagelist.length; i++) {
        if (imagelist[i] == image.parentElement)
            return i;
    }

}

function updateToItemprev(updateimage) {
    imageClick(updateimage);
}

function getImageParent(image) {
    return image.parentElement.parentElement;
}