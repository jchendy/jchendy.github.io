initCalculator = function() {

    var calculatorErrorText = "Enter numbers in all fields";

    $("#result").text(calculatorErrorText);

    function isValidCalculator(n1, n2) {
        //Number("") == 0, we don't want that
        if($("#number1").val() == "" || $("#number2").val() == "") {
            return false;
        }                    
        if(isNaN(n1) || isNaN(n2)) {
            return false;
        }
        return true;
    }

    function updateCalculator() {
        var number1 = Number($("#number1").val());
        var number2 = Number($("#number2").val());

        if(isValidCalculator(number1, number2)) {
            var operation = $('input:radio[name=operation]:checked').val();
            var result;
            if(operation == "add") {
                result = number1 + number2;
            } else if (operation == "subtract") {
                result = number1 - number2;
            } else if (operation == "multiply") {
                result = number1 * number2;
            } else if (operation == "divide") {
                result = number1 / number2;
            }
            $("#calculator-result").text(result);   

        } else {
            $("#calculator-result").text(calculatorErrorText);                        
        }
    }

    $("input").keyup(updateCalculator);
    $("input:radio[name=operation]").click(updateCalculator);
    updateCalculator();
}