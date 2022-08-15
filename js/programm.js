function clickAll(clickID) {
    showAll();
    resetButtons();
    if (window.getZIndex(document.getElementById(clickID)) == 2) {

        deavtivateButton(document.getElementById(clickID));

    } else {
        hideAll();

        var allList = document.getElementsByClassName("all");
        for (var i = 0; i < allList.length; i++) {
            allList[i].style.maxHeight = "none";
        }
        activateButton(document.getElementById(clickID));

    }
}

function clickJunioren(clickID) {

    showAll();
    resetButtons();
    if (window.getZIndex(document.getElementById(clickID)) == 2) {

        deavtivateButton(document.getElementById(clickID));

    } else {
        hideAll();

        var allList = document.getElementsByClassName("j");
        for (var i = 0; i < allList.length; i++) {
            allList[i].style.maxHeight = "none";
        }
        activateButton(document.getElementById(clickID));

    }
}

function clickJugendGruppe(clickID) {

    showAll();
    resetButtons();

    if (window.getZIndex(document.getElementById(clickID)) == 2) {

        deavtivateButton(document.getElementById(clickID));

    } else {
        hideAll();

        var allList = document.getElementsByClassName("jg");
        for (var i = 0; i < allList.length; i++) {
            allList[i].style.maxHeight = "none";
        }
        activateButton(document.getElementById(clickID));

    }
}

function hideAll() {
    var all = document.getElementsByClassName("table-item");
    for (var i = 0; i < all.length; i++) {
        all[i].style.maxHeight = 0;
    }
}

function showAll() {
    var all = document.getElementsByClassName("table-item");
    for (var i = 0; i < all.length; i++) {
        all[i].style.maxHeight = "none";
    }
}

function activateButton(button) {
    button.style.zIndex = 2;
    button.style.backgroundColor = "#66fcf1"
    button.style.color = "black"

}

function deavtivateButton(button) {
    button.style.zIndex = 1;
    button.style.backgroundColor = "transparent"
    button.style.color = "black"
    button.style.color = "#66fcf1"

}

function resetButtons() {
    var all = document.getElementsByClassName("sort-button");
    for (var i = 0; i < all.length; i++) {
        deavtivateButton(all[i]);
    }
}


window.getZIndex = function(e) {
    var z = window.document.defaultView.getComputedStyle(e).getPropertyValue('z-index');
    if (isNaN(z)) return window.getZIndex(e.parentNode);
    return z;
};