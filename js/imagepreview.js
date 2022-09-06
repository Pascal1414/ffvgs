window.onresize = function() {
    var imageprev = document.getElementsByClassName("image-preview");

    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].style.height = window.innerHeight - 40 + "px";

    }

}

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
    all = document.getElementsByTagName("main");
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    var nav = document.getElementsByTagName("nav");
    for (i = 0; i < nav.length; i++) {
        nav[i].style.display = "none";
    }
    var footer = document.getElementsByTagName("footer");
    for (i = 0; i < nav.length; i++) {
        footer[i].style.display = "none";
    }



    document.body.style.backgroundColor = "black";


    imageClone.style.display = "block";


    var imageprev = document.getElementsByClassName("image-preview");

    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].appendChild(imageClone);
        imageprev[i].style.display = "flex";
        imageprev[i].style.height = window.innerHeight - 40 + "px";
    }


    imagelist = getImageParent(image).children;
}

function querryPaddingTop(x) {
    var main = document.getElementsByTagName("main");
    for (i = 0; i < main.length; i++) {
        if (x.matches) {
            main[i].style.paddingTop = 0;
        } else {
            main[i].style.paddingTop = "calc(var(--nav-height-tablet) + 20px)";
        }
    }
}

function exit() {

    var main = document.getElementsByTagName("main");
    for (i = 0; i < main.length; i++) {
        var x = window.matchMedia("(max-width: 820px)")
        querryPaddingTop(x);
        x.addListener(querryPaddingTop);
    }

    for (i = 0; i < all.length; i++) {
        all[i].style.display = "block";
    }

    var nav = document.getElementsByTagName("nav");
    for (i = 0; i < nav.length; i++) {
        nav[i].style.display = "flex";
    }

    var footer = document.getElementsByTagName("footer");
    for (i = 0; i < nav.length; i++) {
        footer[i].style.display = "grid";
    }

    var imageprev = document.getElementsByClassName("image-preview");
    for (i = 0; i < imageprev.length; i++) {
        imageprev[i].removeChild(imageClone);
        imageprev[i].style.display = "none";

    }

    document.body.style.backgroundColor = "#24282f";



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