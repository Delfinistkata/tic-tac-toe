//Pop up message when you click on New game //

function openPopup() {
    document.getElementById("pop-up").style.display = "block";
}

window.onload = function () {
    openPopup();
}

function closePopup() {
    document.getElementById("pop-up").style.display = "none";
}