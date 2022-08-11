function navButtonClick() {
    var navItems = document.getElementsByClassName("nav-item");

    for (var i = 0; i < navItems.length; i++) {
        if (navItems[i].style.display === "block") {
            navItems[i].style.display = "none";
        } else {
            navItems[i].style.display = "block";
            console.log("test");
        }
    };
    /* var navlist = document.getElementsByTagName("nav");
     for (var i = 0; i < navlist.length; i++) {

         navlist[i].removeChild(document.getElementsByClassName("nav-top"));
     }*/
}

function hideNavItems() {
    var navItems = document.getElementsByClassName("nav-item");
    var i;

    for (i = 0; i < navItems.length; i++) {
        navItems[i].style.display = "none";
    };
}