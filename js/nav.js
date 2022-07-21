function navButtonClick() {
    var navItems = document.getElementsByClassName("nav-item");
    var i;

    for (i = 0; i < navItems.length; i++) {
        if (navItems[i].style.display === "block") {
            navItems[i].style.display = "none";
        } else {
            navItems[i].style.display = "block";
        }
    };
}

function hideNavItems() {
    var navItems = document.getElementsByClassName("nav-item");
    var i;

    for (i = 0; i < navItems.length; i++) {
        navItems[i].style.display = "none";
    };
}