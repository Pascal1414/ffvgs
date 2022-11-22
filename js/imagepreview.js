let imageList = [];

let currentImage;

function imageClick(image) {
    currentImage = image;
    hideContent();
    document.body.appendChild(createNavigation());

    displayImage(image);

    imageList = getOtherImages(image);
}

function getOtherImages(image) {;
    let returnList = [];
    const subcontainers = Array.from(image.parentElement.parentElement.children);

    subcontainers.forEach(subcontainer => {
        Array.from(subcontainer.children).forEach(child => {
            returnList.push(child);
        });
    });
    return returnList;
}

function hideContent() {
    const main = document.getElementById("main");
    main.style.display = "none";

    const footer = document.getElementById("footer");
    footer.style.display = "none";

    const header = document.getElementById("header");
    header.style.display = "none";
}

function showContent() {
    const main = document.getElementById("main");
    main.style.display = "block";

    const footer = document.getElementById("footer");
    footer.style.display = "grid";

    const header = document.getElementById("header");
    header.style.display = "block";
}

function createNavigation() {
    const container = document.createElement("div");
    container.id = "image-prev-container"

    const buttonExit = document.createElement("button");
    buttonExit.classList.add("button-exit");
    buttonExit.classList.add("btn");
    buttonExit.innerHTML = "✖";
    buttonExit.addEventListener("click", exit);
    container.appendChild(buttonExit);

    const buttonNext = document.createElement("button");
    buttonNext.classList.add("button-next");
    buttonNext.classList.add("btn");
    buttonNext.innerHTML = "❯";
    buttonNext.addEventListener("click", next);
    container.appendChild(buttonNext);

    const buttonPrevious = document.createElement("button");
    buttonPrevious.classList.add("button-previous");
    buttonPrevious.classList.add("btn");
    buttonPrevious.addEventListener("click", previous);
    buttonPrevious.innerHTML = "❮";
    container.appendChild(buttonPrevious);

    return container;
}

function displayImage(image) {
    clearImages();
    const newImage = image.cloneNode(true);
    newImage.classList.add("preview-image");
    newImage.removeAttribute("onclick");
    const container = document.getElementById("image-prev-container");
    container.appendChild(newImage);
}

function clearImages() {
    const children = Array.from(document.getElementById("image-prev-container").children);
    children.forEach(child => {
        if (child.nodeName == "IMG")
            child.remove();
    });
}

function hideNavigation() {
    document.getElementById("image-prev-container").remove();
}

function exit() {
    showContent();
    hideNavigation();
}

function next() {
    const index = imageList.indexOf(currentImage);

    if (index + 1 < imageList.length) {
        displayImage(imageList[index + 1]);
        currentImage = imageList[index + 1];
    } else {
        displayImage(imageList[0]);
        currentImage = imageList[0];
    }
}

function previous() {
    const index = imageList.indexOf(currentImage);
    if (index - 1 >= 0) {
        displayImage(imageList[index - 1]);
        currentImage = imageList[index - 1];
    } else {
        displayImage(imageList[imageList.length - 1]);
        currentImage = imageList[imageList.length - 1];
    }
}