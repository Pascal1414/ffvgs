window.addEventListener("load", function() {
    let slides = document.getElementsByClassName("image-conntainer");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides.length > 0) {
        slides[0].style.display = "block";
    }

}, false);



function slideshowForwards() {
    var currentItemId = getCurrentSlideShowItemId();
    let itemIdToShow;
    if (currentItemId == document.getElementsByClassName("image-conntainer").length - 1) {
        itemIdToShow = 0;
    } else {
        itemIdToShow = currentItemId + 1;

    }
    updateToItem(itemIdToShow);

}

function slideshowBack() {
    var currentItemId = getCurrentSlideShowItemId();
    let itemIdToShow;
    if (currentItemId == 0) {
        itemIdToShow = document.getElementsByClassName("image-conntainer").length - 1;
    } else {
        itemIdToShow = currentItemId - 1;

    }
    updateToItem(itemIdToShow);
}

function updateToItem(itemId) {
    let slides = document.getElementsByClassName("image-conntainer");
    for (i = 0; i < slides.length; i++) {
        if (i == itemId) {
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
}


function getCurrentSlideShowItemId() {

    let slides = document.getElementsByClassName("image-conntainer");
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == "block") {
            return i;
        }
    }
}

function getCurrentSlideShowItem() {

    let slides = document.getElementsByClassName("image-conntainer");
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == "block") {
            return slides[i];
        }
    }
}