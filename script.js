var countDownDate = new Date("Apr 5 , 2023 15:35:25").getTime();

var time = setInterval(function(){

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    document.querySelector(".inside-num1").innerHTML = days;
    document.querySelector(".inside-num2").innerHTML = hours;
    document.querySelector(".inside-num3").innerHTML = minutes;
    document.querySelector(".inside-num4").innerHTML = seconds;

    if(distance < 0 ) {
        clearInterval(time);
        document.querySelector(".inside-num1").innerHTML = "00";
        document.querySelector(".inside-num2").innerHTML = "00";
        document.querySelector(".inside-num3").innerHTML = "00";
        document.querySelector(".inside-num4").innerHTML = "00";
    }

}, 1000);