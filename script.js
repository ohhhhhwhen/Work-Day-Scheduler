var time = moment().format("H");
var theDate = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
var bodyDate = $(".date");
$(bodyDate).text(theDate);

$(document).ready(function() {
  var hour9 = $(".hour9");
  var numHour9 = hour9.attr("data-value");
  var inputBox1 = $("#info1a");
  var inputLine1 = $("#info1b");

  var hour10 = $(".hour10");
  var numHour10 = hour10.attr("data-value");
  var inputBox2 = $("#info2a");
  var inputLine2 = $("#info2b");

  var hour11 = $(".hour11");
  var numHour11 = hour11.attr("data-value");
  var inputBox3 = $("#info3a");
  var inputLine3 = $("#info3b");

  var hour12 = $(".hour12");
  var numHour12 = hour12.attr("data-value");
  var inputBox4 = $("#info4a");
  var inputLine4 = $("#info4b");

  var hour1 = $(".hour1");
  var numHour1 = hour1.attr("data-value");
  var inputBox5 = $("#info5a");
  var inputLine5 = $("#info5b");

  var hour2 = $(".hour2");
  var numHour2 = hour2.attr("data-value");
  var inputBox6 = $("#info6a");
  var inputLine6 = $("#info6b");

  var hour3 = $(".hour3");
  var numHour3 = hour3.attr("data-value");
  var inputBox7 = $("#info7a");
  var inputLine7 = $("#info7b");

  var hour4 = $(".hour4");
  var numHour4 = hour4.attr("data-value");
  var inputBox8 = $("#info8a");
  var inputLine8 = $("#info8b");

  var hour5 = $(".hour5");
  var numHour5 = hour5.attr("data-value");
  var inputBox9 = $("#info9a");
  var inputLine9 = $("#info9b");

  if (parseInt(numHour9) < parseInt(time)) {
    console.log("change color to grey");
    inputBox1.addClass("past-time");
    inputLine1.addClass("past-time");
  } else if (parseInt(numHour9) === parseInt(time)) {
    console.log("change color to red");
    inputBox1.addClass("current-time");
    inputLine1.addClass("current-time");
  }

  if (parseInt(numHour10) < parseInt(time)) {
    console.log("change color to grey");
    inputBox2.addClass("past-time");
    inputLine2.addClass("past-time");
  } else if (parseInt(numHour10) === parseInt(time)) {
    console.log("change color to red");
    inputBox2.addClass("current-time");
    inputLine2.addClass("current-time");
  }

  if (parseInt(numHour11) < parseInt(time)) {
    console.log("change color to grey");
    inputBox3.addClass("past-time");
    inputLine3.addClass("past-time");
  } else if (parseInt(numHour11) === parseInt(time)) {
    console.log("change color to red");
    inputBox3.addClass("current-time");
    inputLine3.addClass("current-time");
  }

  if (parseInt(numHour12) < parseInt(time)) {
    console.log("change color to grey");
    inputBox4.addClass("past-time");
    inputLine4.addClass("past-time");
  } else if (parseInt(numHour12) === parseInt(time)) {
    console.log("change color to red");
    inputBox4.addClass("current-time");
    inputLine4.addClass("current-time");
  }

  if (parseInt(numHour1) < parseInt(time)) {
    console.log("change color to grey");
    inputBox5.addClass("past-time");
    inputLine5.addClass("past-time");
  } else if (parseInt(numHour1) === parseInt(time)) {
    console.log("change color to red");
    inputBox5.addClass("current-time");
    inputLine5.addClass("current-time");
  }

  if (parseInt(numHour2) < parseInt(time)) {
    console.log("change color to grey");
    inputBox6.addClass("past-time");
    inputLine6.addClass("past-time");
  } else if (parseInt(numHour2) === parseInt(time)) {
    console.log("change color to red");
    inputBox6.addClass("current-time");
    inputLine6.addClass("current-time");
  }

  if (parseInt(numHour3) < parseInt(time)) {
    console.log("change color to grey");
    inputBox7.addClass("past-time");
    inputLine7.addClass("past-time");
  } else if (parseInt(numHour3) === parseInt(time)) {
    console.log("change color to red");
    inputBox7.addClass("current-time");
    inputLine7.addClass("current-time");
  }

  if (parseInt(numHour4) < parseInt(time)) {
    console.log("change color to grey");
    inputBox8.addClass("past-time");
    inputLine8.addClass("past-time");
  } else if (parseInt(numHour4) === parseInt(time)) {
    console.log("change color to red");
    inputBox8.addClass("current-time");
    inputLine8.addClass("current-time");
  }

  if (parseInt(numHour5) < parseInt(time)) {
    console.log("change color to grey");
    inputBox9.addClass("past-time");
    inputLine9.addClass("past-time");
  } else if (parseInt(numHour5) === parseInt(time)) {
    console.log("change color to red");
    inputBox9.addClass("current-time");
    inputLine9.addClass("current-time");
  }
});

var lock1 = $(".locked");
var lock2 = $(".locked2");
var lock3 = $(".locked3");
var lock4 = $(".locked4");
var lock5 = $(".locked5");
var lock6 = $(".locked6");
var lock7 = $(".locked7");
var lock8 = $(".locked8");
var lock9 = $(".locked9");

lock1.on("click", function() {
  var inputentry1 = document.querySelector("#info1b").value;
  console.log(inputentry1);
  var inputKey1 = "task1";
  localStorage.setItem(inputKey1, inputentry1);
});

lock2.on("click", function() {
  var inputentry2 = document.querySelector("#info2b").value;
  console.log(inputentry2);
  var inputKey1 = "task2";
  localStorage.setItem(inputKey2, inputentry2);
});

lock3.on("click", function() {
  var inputentry3 = document.querySelector("#info3b").value;
  console.log(inputentry3);
  var inputKey1 = "task3";
  localStorage.setItem(inputKey3, inputentry3);
});

lock4.on("click", function() {
  var inputentry4 = document.querySelector("#info4b").value;
  console.log(inputentry4);
  var inputKey4 = "task4";
  localStorage.setItem(inputKey4, inputentry4);
});

lock5.on("click", function() {
  var inputentry5 = document.querySelector("#info5b").value;
  var inputKey5 = "task5";
  localStorage.setItem(inputKey5, inputentry5);
});

lock6.on("click", function() {
  var inputentry6 = document.querySelector("#info6b").value;
  var inputKey6 = "task6";
  localStorage.setItem(inputKey6, inputentry6);
});

lock7.on("click", function() {
  var inputentry7 = document.querySelector("#info7b").value;
  var inputKey7 = "task7";
  localStorage.setItem(inputKey7, inputentry7);
});

lock8.on("click", function() {
  var inputentry8 = document.querySelector("#info8b").value;
  var inputKey8 = "task8";
  localStorage.setItem(inputKey8, inputentry8);
});

lock9.on("click", function() {
  var inputentry9 = document.querySelector("#info9b").value;
  console.log(inputentry9);
  localStorage.setItem(inputKey9, inputentry9);
});

document.querySelector("#info1b").value = localStorage.getItem("task1");
document.querySelector("#info2b").value = localStorage.getItem("task2");
document.querySelector("#info3b").value = localStorage.getItem("task3");
document.querySelector("#info4b").value = localStorage.getItem("task4");
document.querySelector("#info5b").value = localStorage.getItem("task5");
document.querySelector("#info6b").value = localStorage.getItem("task6");
document.querySelector("#info7b").value = localStorage.getItem("task7");
document.querySelector("#info8b").value = localStorage.getItem("task8");
document.querySelector("#info9b").value = localStorage.getItem("task9");