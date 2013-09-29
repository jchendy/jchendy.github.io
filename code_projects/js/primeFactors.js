function initPrimeFactors() {
       var primeFactorErrorText = "Enter a number from 1 to 100,000";
                
        function isPrime(n) {
            for(var i = 2; i < n; i++) {
                if(n % i == 0) {
                    return false;
                }
            }
            return true;
        }

        function primeFactors(n) {
            var result = [];
            for(var i = 2; i <= n / 2; i++) {
                if(isPrime(i) && (n % i == 0)) {
                    result.push(i);
                }
            }
            return result;
        }

        $("#prime-factor-result").text(primeFactorErrorText);
        
        function updatePrimeFactors() {
            var digits = Number($("#prime-factor-input").val());

            if(isNaN(digits) || digits < 1 || digits > 100000) {
                $("#prime-factor-result").text(primeFactorErrorText);
            } else {
                var factors = primeFactors(digits);

                if(factors.length == 0) {
                    $("#prime-factor-result").text("No prime factors");
                }
                else {
                    var result = "" + factors[0];
                    for (var i = 1; i < factors.length; i++) {
                        result = result + ", " + factors[i];
                    }

                    $("#prime-factor-result").text(result);    
                }       
            }
        }        

        $("#prime-factor-input").keyup(updatePrimeFactors);
        updatePrimeFactors();      
}