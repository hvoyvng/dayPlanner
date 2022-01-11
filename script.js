// Button action when clicked
$(".btn").on("click", function () {
    var id = $(this).attr("id").split("-")[0];
    var plan = $("#" + id + "-txt").val();
    console.log(id, plan);
    localStorage.setItem(id, plan);
});

// Adds current day
var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);

// Adds current time
var currentHour = moment().hours();

// Console logs the date and time 
console.log(currentDate, currentHour);

// Saves to local storage
for (let i = 8; i < 19; i++) {
    var chose = localStorage.getItem(i);
    $("#" + i + "-time").val(chose);
    if (i < currentHour) {
        $("#" + i + "-time").addClass("past");
    } else if (i === currentHour) {
        $("#" + i + "-time").addClass("present");
    } else {
        $("#" + i + "-time").addClass("future");
    }
}
