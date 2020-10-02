//detecting button click

var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var whichBtn = this.innerHTML;

        playAudio(whichBtn);
        buttonAnimation(whichBtn);

    });
}

//detecting keypress
document.addEventListener("keypress", function (event) {

    playAudio(event.key);
    buttonAnimation(event.key);
})

//playing sound function
function playAudio(whichBtn) {
    switch (whichBtn) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":

            var snare = new Audio("sounds/snare.mp3");
            snare.play();


            break;

        case "k":

            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;


        default:
            console.log(whichBtn);
            break;



    }
}

//animation when button click

function buttonAnimation(whichBtn) {

    document.querySelector("." + whichBtn).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + whichBtn).classList.remove("pressed");
    }, 100);


}