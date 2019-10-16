function toggleExpandableNavigation() {
    let expandableNavigation = document.getElementById("expandableNavigation");
    let display = expandableNavigation.style.display;
    if (display === "none" || display === '') {
        //open navigation
        expandableNavigation.style.display = "block";
    } else {
        //close navigation
        expandableNavigation.style.display = "none";
    }
}