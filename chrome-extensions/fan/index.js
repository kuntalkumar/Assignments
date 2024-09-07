let image = document.getElementById("img");

function myFunction(speed) {
    if (speed === 0) {
        image.style.animation = "none"; // Stops the fan
    } else {
        image.style.animation = `fananim ${speed}s linear infinite`; // Adjusts the speed
    }
}
