function showImage(image) {
    let overlay = document.getElementById("overlay");
    overlay.keypress = checkEscKeyClose;
    overlay.style.display = "block";

    let htmlImageElement = document.createElement("img");
    htmlImageElement.src = image.src;
    htmlImageElement.style.maxWidth = '100%';
    htmlImageElement.classList.add('center');
    overlay.appendChild(htmlImageElement);
}

function closeOverlay() {
    let overlay = document.getElementById('overlay');
    //remove last image
    overlay.removeChild(overlay.firstChild);
    overlay.style.display = 'none';
}

function checkEscKeyClose() {
    window.onkeyup = function (keyEvent) {
        console.log(keyEvent);
        if (keyEvent.key === 27) { // esc has been pressed -> close overlay
            closeOverlay();
        }
    }
}