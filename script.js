$(document).ready(function () {
    // Adds current date
    $('#currentDay').text(moment().format('dddd, MMMM Do'));

    // Action when button is clicked
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // Saves item into local storage
        localStorage.setItem(time, value);
    });

    function hourUpdater() {
        // Sets variable of time
        var currentHour = moment().hours();

        // loop over time blocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

            // If loop to check if the current time is already past the day planner
            // If the current hour is greater than the block hour we assign the class past
            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                // If the current hour is the same as the block hour we assign the class present
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                //We assign the class future to the hours that have not reached 
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }
    // Calls the function
    hourUpdater();

    // Updates the currrent time at an interval
    var interval = setInterval(hourUpdater, 15000);

    // Get items from the local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
});
