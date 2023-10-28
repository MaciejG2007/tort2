document.addEventListener("DOMContentLoaded", function () {
    const markedArea = document.getElementById("markedArea");
    const displayObject = document.getElementById("displayObject");
    let hoverTimeout;

    markedArea.addEventListener("mouseenter", function () {
        hoverTimeout = setTimeout(function () {
            displayObject.style.display = "block";
        }, 1500); // 3000 milliseconds (3 seconds)
    });

    markedArea.addEventListener("mouseleave", function () {
        clearTimeout(hoverTimeout);
        displayObject.style.display = "none";
    });
});
