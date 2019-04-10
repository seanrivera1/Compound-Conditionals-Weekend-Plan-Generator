
function whatToDo(dayOfWeek, weather) {
    //Create a compound conditional statement below. 
    

    //These three lines will have to be used in the conditional statement. Feel free to re-arrange.
    $("#result").html("I'll go for a bike ride.");
    $("#result").html("I'll go binge watch Netflix.");
    $("#result").html("I'll go to the park.");

} 

$("button").click(function(){
    var dayOfWeek = $("#dayOfWeek").val();
    var weather = $("#weather").val();
    whatToDo(dayOfWeek, weather);
    if(dayOfWeek === "staturday" && weather === "sunny"){
        $("#result").html("I'll go for a bike ride.");
    }
    if(dayOfWeek === "staturday" && weather === "cloudy"){
        $("#result").html("I'll binge watch Netflix.");
    }
    if(dayOfWeek === "sunday" && weather === "sunny"){
        $("#result").html("I'll go to the park.");
    }
    if(dayOfWeek === "sunday" && weather === "cloudy"){
        $("#result").html("I'll binge watch Netflix.");
    }
});