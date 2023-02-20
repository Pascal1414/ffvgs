var xhr = new XMLHttpRequest();
xhr.open('GET', '/src/programm.json', true);

// when the request is complete, parse the JSON data and use it
xhr.onload = function () {
    if (xhr.status === 200) {
        // parse the JSON data and log it to the console
        var jsonData = JSON.parse(xhr.responseText);
        console.log(jsonData);

        jsonData.forEach(element => {
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


            document.getElementById("programm-table").appendChild(programmItem);

        });

    }
};

xhr.send();