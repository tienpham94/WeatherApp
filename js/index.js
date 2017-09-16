$(function() {

//Open weather API 
var API = "1b78660b96ae1da1e60eed6913b9f61a";


//DOM scripting with Jquery 
function getPlace(place) {
    $("#place").html("<h3>" + place + "</h3>");
}

function getTemp(temp, choice) {
    var displayTemp = (temp).toFixed(0);

    //switch C and F
    if (choice == 'F') {
        displayTemp = (32 + displayTemp * 1.8).toFixed(0);
    };
    $("#temp").html("<h1>" + displayTemp + "&deg;" + choice + "</h1>");
}

function getStatus(status) {
    $("#status").html("<h2>" + status + "</h2>");
}

function getImg(img) {
    $("#img").html("<img src='http://openweathermap.org/img/w/" + img + ".png'>");
}

//get JSON through http
function output(url) {
    $.getJSON(url, function(data) {
        getPlace(data.name);
        getTemp(data.main.temp, 'C');
        getStatus(data.weather[0].main);
        getImg(data.weather[0].icon);

        $('#switchC').click(function() {
            getTemp(data.main.temp, 'C');
        });
        $('#switchF').click(function() {
            getTemp(data.main.temp, 'F');
        });
    });
}

function getCoords() {
    $.getJSON("http://ip-api.com/json", function(location){
        var latitude = location.lat;
        var longitude = location.lon;
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon="+ 
            longitude +"&units=metric&APPID=" + API;
        output(url);
    });
}

});
