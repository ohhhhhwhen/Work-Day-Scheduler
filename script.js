var time = moment().format('H');
console.log(time);

var theInfo = document.getElementById("info1");

$(document).ready(function() {
  var lock = $(".locked");

  var hour9 = $(".hour9");
  var numHour9 = hour9.attr("data-value");
  var inputLine1 = $("#info1");
  var hour10 = $(".hour10");
  var numHour10 = hour10.attr("data-value");
  var inputLine2 = $("#info2");
  var hour11 = $(".hour11");
  var numHour11 = hour11.attr("data-value");
  var inputLine3 = $("#info3");
  var hour12 = $(".hour12");
  var numHour12 = hour12.attr("data-value");
  var inputLine4 = $("#info4");
  var hour1 = $(".hour1");
  var numHour1 = hour1.attr("data-value");
  var inputLine5 = $("#info5");
  var hour2 = $(".hour2");
  var numHour2 = hour2.attr("data-value");
  var inputLine6 = $("#info6");
  var hour3 = $(".hour3");
  var numHour3 = hour3.attr("data-value");
  var inputLine7 = $("#info7");
  var hour4 = $(".hour4");
  var numHour4 = hour4.attr("data-value");
  var inputLine8 = $("#info8");
  var hour5 = $(".hour5");
  var numHour5 = hour5.attr("data-value");
  var inputLine9 = $("#info9");

  console.log(numHour9);

  if (parseInt(numHour9) < parseInt(time)) {
    console.log("change color to grey");
    $("info1").addClass("past-time");
  } else if (parseInt(numHour9) === parseInt(time))  {
    console.log("change color to red");
    inputLine1.toggleClass("current-time");
  }

  lock.on("click", function() {
    lockedIn();
  });
});

var inputKey = "inputTask";

function lockedIn() {
  alert("Schedule Updated");
  
  // var hourTask = theInfo.innerHTML;
  // localStorage.setItem(inputKey, hourTask);
  // console.log(localStorage.getItem(inputKey));
}
