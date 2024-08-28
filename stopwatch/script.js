var milliSeconds = 0;
var minutes = 0;
var seconds = 0;
var check = true; 
var stop;
var lapTime = [];
var time;

$(document).ready(function() {
    $(".start").unbind("click").bind("click",start).css('cursor','pointer');
    $(".reset").unbind("click").bind("click",resetTime).css('cursor','pointer');
    $(".lap").unbind("click").bind("click",lap).css('cursor','pointer');
    setTime();
});

function start(){

    if(check == true){
        $('.start').html('stop');
        check = false;
        timer();
    }
    else{
        $('.start').html('start');
        check = true;
        window.clearInterval(stop);
    }
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

    $('.face h2').html(minutes + ' : ' + seconds + ' : ' + milliSeconds);
}

function timer(){

    stop = setInterval(function() {
        milliSeconds++;
        setTime();

        if (milliSeconds == 100){
            milliSeconds = 0;
            seconds++;
            setTime();
        }

        if (seconds == 60){
            seconds = 0;
            minutes++;
            setTime();
        }

    },10);
}

function resetTime() {

    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    window.clearInterval(stop);
    $('.start').html('start');
    check = true;
    $("#displayLap").empty()
    setTime();

}

function lap() {

    time = minutes + ' : ' + seconds + ' : ' + milliSeconds;
    $("#displayLap").append(time + "<br>");
    setTime();
}