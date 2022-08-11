setAllVisible();


function clickProgramm(type, clickId) {

    deactivateButtons(document.getElementsByClassName("sort-button"));

    var tablerows = document.getElementsByTagName("tr");
    for (i = 0; i < tablerows.length; i++) {
        if (!tablerows[i].classList.contains(type)) {
            tablerows[i].style.display = "none";
        } else {
            tablerows[i].style.display = "block";
        }
    }
    activateButton(document.getElementById(clickId));
    activated = document.getElementById(clickId);

}

function setAllVisible() {
    document.querySelectorAll("tr").forEach(element => {
        element.style.display = "block";
    });
}

function deactivateButtons(list) {
    for (i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "black";
        list[i].style.color = "#66fcf1";

    }
}

function activateButton(button) {
    button.style.backgroundColor = "#66fcf1";
    button.style.color = "black";
}