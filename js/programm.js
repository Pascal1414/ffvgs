var items = [];

var xhr = new XMLHttpRequest();
xhr.open('GET', '/src/programm.json', true);

// when the request is complete, parse the JSON data and use it
xhr.onload = function () {
    if (xhr.status === 200) {
        // parse the JSON data and log it to the console
        var jsonData = JSON.parse(xhr.responseText);
        console.log(jsonData);
        items = jsonData;

        displayItems(jsonData);

    }
};

xhr.send();
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("role");

    dropdown.addEventListener("change", function () {
        console.log(this.value);
        switch (this.value) {
            case "jugendgruppe":
                let jugendgruppe = items.filter(item => item.forJugendGroup);
                displayItems(jugendgruppe);
                break;
            case "junioren":
                let junioren = items.filter(item => item.forJunior);
                displayItems(junioren);
                break;
            case "alle":
                let alle = items.filter(item => item.forAll);
                displayItems(alle);
                break;
            default:
                displayItems(items);
                break;
        }
    });
});

function displayItems(items) {
    const programmTable = document.getElementById("programm-table");
    programmTable.innerHTML = "";
    items.forEach(element => {
        let programmItem = document.createElement("div");
        programmItem.classList.add("programm-item");

        let title = document.createElement("p");
        title.classList.add("programm-title");
        title.innerHTML = element.name;
        programmItem.appendChild(title);

        let date = document.createElement("p");
        date.classList.add("programm-date");
        date.innerHTML = element.date;
        programmItem.appendChild(date);


        programmTable.appendChild(programmItem);

    });

}