const windSpeed = document.querySelector('.wind-speed');
const temperature = document.querySelector('.temperature');
speed = 2.5;
temp = 30;



windSpeed.innerHTML = speed;
temperature.innerHTML = temp;



const windChill = document.querySelector('.wind-chill');

if(temp <= 10 && speed > 4.8){

    chill = 35.74 + (0.6215 * temp) - ((35.75 * speed)**0.16) + ((0.4275 * temp * speed)**0.16);
    windChill.innerHTML = chill;

}else{
     na = "N/A";
     windChill.innerHTML = na;

}





