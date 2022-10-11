console.log("Hello world")

function askForCoords(){
    navigator.geolocation.getCurrentPosition(position);
    console.log(position);
}