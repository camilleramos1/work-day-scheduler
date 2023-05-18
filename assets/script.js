  const timeBlock = $(".time-block")
 // variables defined
  var currentDay = moment().format("dddd MMMM Do YYYY, h:mm a");
  var saveBtn = $('#saveBtn');
  var currentHour = moment().hour();
  var today = moment();
  var hours = today.hours();
  var parent = $(this).parents(".row");

// ensures that DOM elements load before JS runs
$(document).ready(function() {

 // prints current day below header
  $("#currentDay").text(currentDay);

  // function to assign whether an hour is past, present, or future
  function hourTracker() {
    timeBlock.each(function () {
      var workHour = parseInt($(this).attr('id').match(/hour-(\d+)/)[1], 10);

      if (workHour < currentHour) {
        $(this).addClass("past");
      }
      else if (workHour == currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  };
  // runs hourTracker function
  hourTracker();
  // saves users input on click of save button
  $(".saveBtn").on("click", function() {
 
    var userText = $(this).siblings(".description").val();
    console.log(userText);
    
    var hourTask = $(this).parents(".row").attr("id");
    console.log(hourTask)
  
  // Put in local storage
  localStorage.setItem(hourTask, userText);
  
  })
  // ensures values are still displayed after refresh
  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})

