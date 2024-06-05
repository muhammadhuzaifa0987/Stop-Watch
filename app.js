var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var interval;

var msec = 0
var sec = 0
var min = 0


function start() {
    msec++
    msecHeading.innerHTML = msec

    if (msec === 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0


    } else if (sec > 59) {
        min++
        minHeading.innerHTML = min
        sec = 0
    } else if (min > 59) {
        //hr condition
    }
}



function startWatch() {
    interval = setInterval(start, 10)
}
var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var interval;

var msec = 0
var sec = 0
var min = 0


function start() {
    msec++
    msecHeading.innerHTML = msec

    if (msec === 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0


    } else if (sec > 59) {
        min++
        minHeading.innerHTML = min
        sec = 0
    } else if (min > 59) {
        //hr condition
    }
   

    }




function startWatch(ele) {
    interval = setInterval(start, 10)
 
}

function resetWatch() {
    clearInterval(interval)
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    min = 0
    sec = 0
    msec = 0
}


function disableButton() {
    document.getElementById("start-Btn").disabled = true;
  }

var stopBtn=document.getElementById("stopBtn")

function stopWatch(ele){
    clearInterval(interval)
}