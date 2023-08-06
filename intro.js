document.addEventListener("DOMContentLoaded", function() {
    var introContainer = document.querySelector(".intro-container");
    var hiddenContainer = document.querySelector(".hidden-container");

    // Show the hidden-container after 2 seconds
    setTimeout(function() {
        introContainer.style.display = "none";
        hiddenContainer.style.display = "flex"; // Change from 'block' to 'flex'
    }, 2000);
});


