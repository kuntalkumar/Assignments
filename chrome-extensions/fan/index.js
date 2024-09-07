let image = document.getElementById("img");
let image1 = document.getElementById("img1");
let offbtn = document.getElementById("offbtn");
let onbtn = document.getElementById("onbtn");
let turboCool = document.getElementById("turboCool");

window.onload = function() {
    offbtn.style.display = "none";
};

function myFunction(speed) {
    if (speed === 0) {
        image.style.animationDuration = '1s';
        if( image1.style.animation == `fananim 0.2s linear infinite`){

            image1.style.animationDuration = '1s';
        }
        offbtn.style.display = "none";
        onbtn.style.display = "";

        setTimeout(() => {
            image.style.animationPlayState = 'paused';
            if( image1.style.animation == `fananim 0.2s linear infinite`){

                image1.style.animationPlayState = 'paused';
            }
        }, 2000);
    } else if (speed === 0.2) {
        image.style.animation = `fananim ${speed}s linear infinite`;
        image1.style.animation = `fananim ${speed}s linear infinite`;
        onbtn.style.display = "none";
        offbtn.style.display = "";
        turboCool.style.display = "none";
    } else {
        image.style.animation = `fananim ${speed}s linear infinite`;
        onbtn.style.display = "none";
        offbtn.style.display = "";

        if (turboCool.style.display === "none") {
            image1.style.animationDuration = '1s';
            image1.style.transition = 'animation-duration 3s ease';

            setTimeout(() => {
                image1.style.animationPlayState = 'paused';
            }, 2000);
            turboCool.style.display = "";
        }
    }
}
