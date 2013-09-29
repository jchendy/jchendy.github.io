function initTimer() {
    var errorMessage = "Enter a valid time";
    var countdown = undefined;

    //format the remaining minutes and seconds, and display them
    function showTime(minutes, seconds) {
        var result = minutes + ":";
        if(seconds < 10) {
            result += "0";
        }
        result += seconds;
        $("#timer-result").text(result);
    }

    //beep for one second
    function beep() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var context = new AudioContext();

        var osc = context.createOscillator();
        osc.connect(context.destination);
        osc.noteOn(0);

        setTimeout(function () {
            osc.noteOff(0);
        }, 1000);

    }

    function startTimer() {
        if (countdown) {
            clearInterval(countdown);
        }
        var input = $("#time").val();
        var pieces = input.split(":");
                    
        var minutes = 0;
        var seconds = 0;                    

        //there's no :
        if(pieces.length == 2) {
            minutes = Number(pieces[0]);
            seconds = Number(pieces[1]);                        
        } else if (pieces.length == 1) {
            seconds = Number(pieces[0]);                        
        } else {
            $("#timer-result").text(errorMessage);
            return;
        }

        if(isNaN(minutes) || isNaN(seconds)) {
            $("#timer-result").text(errorMessage);
            return;
        }

        //allow 0:78 but not 1:78
        if(minutes > 0 && seconds > 59) {
            $("#timer-result").text(errorMessage);
            return;
        }

        showTime(minutes, seconds);

        //update the time every 1 second
        countdown = setInterval(function() {
            seconds--;

            //time's up, play a sound and update the result
            if(minutes == 0 && seconds == 0) {
                $("#timer-result").text("Time's up!");
                beep();
                clearInterval(countdown);
                return;
            }

            if(seconds < 0) {
                minutes--;
                seconds = 59;
            }

            showTime(minutes, seconds);

        }, 1000);

    }

    $("#timer-button").click(startTimer);
    
}