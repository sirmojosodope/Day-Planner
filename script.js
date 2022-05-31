// let today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// let yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

// let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
// document.write(utc);

// display current day on page
$(document).ready(function () {
  // listen for save button clicks
  $(".saveBtn").on("click", function () {
    // get nearby values
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
  });

  function hourUpdater() {
    // get current number of hours
    let currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  // loadsaved data from localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));

  //  current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
