var todaysDate = moment().format("dddd, MMM Do YYYY");
var saveBtn = $(".saveBtn");
var currentTime = moment();
// on planner open day is displayed
// make variable linked to a header
// update text content of header with hours from moment function
// make variable holding current hour
// compare hour to current hour to change color to green or red depending on value
// set attr of each container to past, present, future
// save button links to listener
// listener stores contents of textarea to local storage
// each container checks local storage on load for content

// Inputs text into the currentDay ID to show the current time when the page is accessed
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// Goes to local storage to get each of the values for each of the hours
$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr13 .description").val(localStorage.getItem("hr13"));
$("#hr14 .description").val(localStorage.getItem("hr14"));
$("#hr15 .description").val(localStorage.getItem("hr15"));
$("#hr16 .description").val(localStorage.getItem("hr16"));
$("#hr17 .description").val(localStorage.getItem("hr17"));

saveBtn.on("click", function () {
    // This to target the save button, which is located in the div with the attribute "id"
    // Used Parent to target the parent of button
    var time = $(this).parent().attr("id");
    // Used siblings here because .description is a sibling to the save button
    // used val to return the text put in description
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
})

// Function to detect what time it is for the user to compare to the page
function whatTime() {
    // To get the current time to compare to the time blocks
    var currentTime = moment().hour();
    // Loop over all the .time-block classes in order to add past/present/future classes
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hr")[1]);
        // Add and remove classes depending on the expression
        if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        // since < and === are defined, then the rest would be the future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
// Run the function
whatTime();