var milliSeconds = 0;
var minutes = 25;
var seconds = 0;
var check = true; 
var stop;


$(document).ready(function() {
    $("#play").unbind("click").bind("click",timer).css('cursor','pointer');
    $("#pause").unbind("click").bind("click",pause).css('cursor','pointer');
    $("#restart").unbind("click").bind("click",resetTime).css('cursor','pointer');
    
    setTime();
});

function pause() {
    window.clearInterval(stop);
}

function setTime(){

    if(milliSeconds < 10){
        milliSeconds = parseInt(milliSeconds);
        milliSeconds = '0' + milliSeconds;
    }

    if(seconds < 10){
        seconds = parseInt(seconds);
        seconds = '0' + seconds;
    }

    if(minutes < 10){
        minutes = parseInt(minutes)
        minutes = '0' + minutes;    
    }

    $('.innerCircle h1').html(minutes + ' : ' + seconds);
}

function timer(){

    stop = setInterval(function() {
        milliSeconds++;
        if (milliSeconds == 100){
            if (seconds == 0){
                milliSeconds = 0;
                seconds = 59;
                minutes--;
                setTime();
            }
            else{
                milliSeconds = 0;
                seconds--;
                setTime();
            }
        }

    },10);
}

function resetTime() {

    milliSeconds = 0;
    seconds = 0;
    minutes = 25;
    window.clearInterval(stop);
    setTime();

}