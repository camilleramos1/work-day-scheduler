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
  hourTracker();

  $(".saveBtn").on("click", function() {
 
    var userText = $(this).siblings(".time-block").val();
    console.log(userText);
    
    var hourTask = $(this).parents(".row").attr("id");
    console.log(hourTask)
  
  // Put in local storage
  localStorage.setItem(hourTask, userText);
  
  })

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


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
