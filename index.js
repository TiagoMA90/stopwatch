const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Starts the Stopwatch from !isRunning to isRunning 
function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;

        // Change the content of the <h1> element when the start button is clicked
        document.querySelector(".text-center.mb-0 i").className = "fa-regular fa-hourglass-half fa-spin-pulse";
    }
}

// Stops the Stopwatch if the timer is isRunning to !isRunning
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;

        // Change the content of the <h1> element when the stop button is clicked
        document.querySelector(".text-center.mb-0 i").className = "fa-regular fa-hourglass-half fa-rotate-270";
    }
}

// Resets the stopwatch back to 00:00:00:00
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("hours").textContent = "00:00:00:00";

    // Change the content of the <h1> element when the stop button is clicked
    document.querySelector(".text-center.mb-0 i").className = "fa-regular fa-hourglass";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Update the display element
    document.getElementById("hours").textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
