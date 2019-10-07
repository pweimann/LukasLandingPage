function toggleExpandableNavigation() {
    let expandableNavigation = document.getElementById("expandableNavigation");
    let display = expandableNavigation.style.display;
    if (display === "none") {
        expandableNavigation.style.display = "block";
    } else {
        expandableNavigation.style.display = "none";
    }
}