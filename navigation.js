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

    }
}

function cathegoryClick(clickID) {

    if (clickID == "home") {
        document.querySelectorAll(".home").forEach(element => {
            element.style.display = "block";
        });

        document.querySelectorAll(".programm").forEach(element => {
            element.style.display = "none";
        });

        document.querySelectorAll(".organe").forEach(element => {
            element.style.display = "none";
        });

        document.querySelectorAll(".jugend").forEach(element => {
            element.style.display = "none";
        });
        var url = location.href;
        window.location.href = "#" + "home";

    } else if (clickID == "programm") {

        document.querySelectorAll(".home").forEach(element => {
            element.style.display = "none";
        });

        document.querySelectorAll(".programm").forEach(element => {
            element.style.display = "block";
        });

        document.querySelectorAll(".organe").forEach(element => {
            element.style.display = "none";
        });

        document.querySelectorAll(".jugend").forEach(element => {
            element.style.display = "none";
        });
        var url = location.href;
        window.location.href = "#" + "programm";

    } else if (clickID == "organe") {
        document.querySelectorAll(".home").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".programm").forEach(element => {
            element.style.display = "none";
        });

        document.querySelectorAll(".organe").forEach(element => {
            element.style.display = "block";
        });

        document.querySelectorAll(".jugend").forEach(element => {
            element.style.display = "none";
        });
        var url = location.href;
        window.location.href = "#" + "organe";

    } else if (clickID == "jugend") {
        document.querySelectorAll(".home").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".programm").forEach(element => {
            element.style.display = "none";
        });

        document.querySelectorAll(".organe").forEach(element => {
            element.style.display = "none";
        });

        document.querySelectorAll(".jugend").forEach(element => {
            element.style.display = "block";
        });
        var url = location.href;
        window.location.href = "#" + "jugend";
    }
}