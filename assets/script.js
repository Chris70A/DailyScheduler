// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {  // will only run when the page is ready
    $('.btn').on('click', function() {  // listener for click events on the save button/ local storage.

        var task = $(this).siblings('.description').val(); //stores the task into a var
        var time = $(this).parent().attr('id'); // stores the ID of the parent in a var EX:hour-9
        var $hide =$('.show');
        localStorage.setItem(time, task); // stores the task and time in local storage

        $('.alert').addClass('show'); // adds the a class .show to show the alert.

        setTimeout(function() {  //this function has a timer to remove the class.
            $(".alert").removeClass('show');
        }, 1000);     
    });












        $('.row').each(function () {  // the past, present, or future class
            var hours = dayjs().hour(); // 
            var hourOfDay = parseInt($(this).attr('id').split('-') [1]);// Use split() in jquery.

            if(hourOfDay < hours) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (hourOfDay === hours){
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            } else {
                $(this).addClass('future');
                $(this).removeClass('present');
                $(this).removeClass('past');
            }
        });

    

   




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
  });