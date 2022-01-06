var todaysDate = moment().format("dddd, MMM Do YYYY");
var time = moment();
var saveBtn = $(".saveBtn");

// on planner open day is displayed
// make variable linked to a header
// update text content of header with hours from moment function
// make variable holding current hour
// compare hour to current hour to change color to green or red depending on value
// set attr of each container to past, present, future
// save button links to listener
// listener stores contents of textarea to local storage
// each container checks local storage on load for content

saveBtn.on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
})