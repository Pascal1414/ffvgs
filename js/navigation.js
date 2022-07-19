function onLoad() {

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
}

function cathegoryClick(clickID) {

    var contentobjects = document.getElementsByClassName("content-item");
    for (var obj of contentobjects) {
        if (obj.classList.contains(clickID)) {
            if (obj instanceof HTMLElement) {
                obj.style.display = "block";
            }
            var url = location.href;
            window.location.href = "#" + clickID;
        } else {
            if (obj instanceof HTMLElement) {
                obj.style.display = "none";
            }
        }
    }

    hideNavItems();
}