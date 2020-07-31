
// JS Script for 1980's Pastel Word Day Scheduler

// The $(document).ready(function () below ensures that the script doesn't execute before the full html/css is loaded.

$(document).ready(function () {

    // The moment js api is being loaded via a <script> at the bottom of index.html
    // Below: var to extract the exact date, hour from the moment API.
    
    var exactDate = moment().format("dddd" + " | " + "YYYY-MM-D" + " | " + "HH:mm:ss");
    console.log(exactDate); // For Testing Purpose

    // I'm using jquery (instead of GetElementById in plain JS) to access the <h5> (line 30) in index.html
    // I then inject a string extracted from the var above.
    
    $("#realTime").text(exactDate);

    // Based on the real time of day, I create a var to store the exact hour of the day the application is being used.
    // With that information in hand, I GOTO the realTimeAdjustment function where said information will be used.

    var timeOfTheDay = moment().format("H");
    console.log(timeOfTheDay); // For Testing Purpose
    realTimeAdjustment();

    // After I've gained the value of timeOfTheDay to determine the exact hour of the day during which the application is being used, I use a set of 3 colors (provided before hand) to differentiate the 'description-section' depending if said 'description-section' is taking place in the past, present or future.
    // Please note that the value of those 3 colors is the only thing I've kept from the original assets provided by the class, everything else is original.

    function realTimeAdjustment() {
        $(".descriptionSection").each(function() {
            var descriptionSectionColor = parseInt($(this).attr("value"));

            // Comparison Conditional Statements to apply the correct color based on the exact hour of the day.
            if (descriptionSectionColor < timeOfTheDay) {
                $(this).addClass("past");
            }
            else if (descriptionSectionColor == timeOfTheDay) {
                $(this).addClass("present");
            }
            else if (descriptionSectionColor > timeOfTheDay) {
                $(this).addClass("future");
            }
        })
    }
    
        // Schedule / Save ("+") Button, Jquery Click Event Listener:
       $(".scheduleButton").on("click", function () {

        // We're using the local storage of the browser (which does not expire) to store the user input.
        
        // The user value is extracted and stored within one line of code (multiplied by as many fields as there are in the html document).

        // The user input value attribute is returned via the jquery val() method:
        // ($("#rsvp07").val()) -> extracts the value of #rsvp07
        // The user input value in then stored via the setItem() method:
        // localStorage.setItem("07") -> stores the value of #rsvp#07 into "07"

        // Looking at the HTML of the related line, you can see how:
        // 1) The text area (user input field) represents #rsvp07 and that's where the val() method applies.
        // 2) The value extracted is then stored, within the same line, via the setMethod() at the 07 address.

        //<div class="eight columns descriptionSection" value="07">     -> setItem() method
        // <textarea id="rsvp07" class="scheduledEvent"></textarea>     -> val() method
        // </div>
       
        localStorage.setItem("07", ($("#rsvp07").val()))
        localStorage.setItem("08", ($("#rsvp08").val()))
        localStorage.setItem("09", ($("#rsvp09").val()))
        localStorage.setItem("10", ($("#rsvp10").val()))
        localStorage.setItem("11", ($("#rsvp11").val()))
        localStorage.setItem("12", ($("#rsvp12").val()))
        localStorage.setItem("13", ($("#rsvp13").val()))
        localStorage.setItem("14", ($("#rsvp14").val()))
        localStorage.setItem("15", ($("#rsvp15").val()))
        localStorage.setItem("16", ($("#rsvp16").val()))
        localStorage.setItem("17", ($("#rsvp17").val()))
    })

        // Here below, we retrieve from memory the value previously stored (setItem()) in 07 and, then, we append that value to the text area "rsvp07" which is the text area region in the html above. Thay way, the information persists event if the browser page is refreshed of if the browser cache is cleared.
        
        $("#rsvp07").append(localStorage.getItem("07"));
        $("#rsvp08").append(localStorage.getItem("08"));        
        $("#rsvp09").append(localStorage.getItem("09"));
        $("#rsvp10").append(localStorage.getItem("10"));
        $("#rsvp11").append(localStorage.getItem("11"));
        $("#rsvp12").append(localStorage.getItem("12"));
        $("#rsvp13").append(localStorage.getItem("13"));
        $("#rsvp14").append(localStorage.getItem("14"));
        $("#rsvp15").append(localStorage.getItem("15"));
        $("#rsvp16").append(localStorage.getItem("16"));
        $("#rsvp17").append(localStorage.getItem("17"));
})

        // Thank you for reading, please feel free to pull from master and have fun with it. :)