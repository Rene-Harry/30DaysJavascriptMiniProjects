const startStop = document.getElementById('btnStart');
const reset = document.getElementById('btnReset');


let seconds = 0;
let minutes = 0;
let hours = 0;


let secondsHolder = 0;
let minutesHolder = 0;
let hoursHolder = 0;


let interval = null;
let timerstatus = "stopped";


function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        secondsHolder = "0" + seconds.toString();
    } else {
        secondsHolder = seconds;
    }

    if (minutes < 10) {
        minutesHolder = "0" + minutes.toString();
    } else {
        minutesHolder = minutes;
    }

    if (hours < 10) {
        hoursHolder = "0" + hours.toString();
    } else {
        hoursHolder = hours;
    }

    



    let display = document.getElementById('timer');
    display.innerText = `${hoursHolder}:${minutesHolder}:${secondsHolder}`;
}


startStop.addEventListener('click', function () {
    if (timerstatus === "stopped") {
        interval = window.setInterval(stopWatch, 1000);
        startStop.innerText = "Stop";
        startStop.style.backgroundColor = "red";    
        timerstatus = "started";
    } else {
        window.clearInterval(interval);
        startStop.innerText = "Continue";
        startStop.style.backgroundColor = "green";
        timerstatus = "stopped";
    }
});

reset.addEventListener('click', function () {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    startStop.innerText = "Start";
    startStop.style.backgroundColor = "green";
    timerstatus = "stopped";
    let display = document.getElementById('timer');
    display.innerText = "00:00:00";
}
);