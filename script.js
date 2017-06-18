var buttons = document.querySelectorAll("#calc span");
var operators = ['÷','x','-','+'];
var decOn = false;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        var input = document.querySelector('.screen');
        var inputValue = input.innerHTML;
        var buttonValue = this.innerHTML;
        var lastCharacter = inputValue[inputValue.length-1];

        if (buttonValue === 'C') {
            input.innerHTML = "";
        }
        
        else if (buttonValue === "CE") {
            input.innerHTML = inputValue.replace(lastCharacter, "");
        }
        
        else if (buttonValue === "=") {
            var toCalculate = inputValue;
            toCalculate = toCalculate.replace(/x/g,'*').replace(/÷/g,'/');

            if (toCalculate) {
                input.innerHTML = eval(toCalculate);
            }
        }
        
        else if (operators.indexOf(buttonValue) > -1) {

            if (inputValue !== "" && operators.indexOf(lastCharacter) === -1) {
                input.innerHTML += buttonValue;
            } else if (inputValue === "" && btnValue === "-") {
                input.innerHTML += buttonValue;
            }

            if (operators.indexOf(lastCharacter) > -1 && inputValue.length > 1) {
                input.innerHTML = inputValue.replace(/.$/, buttonValue)
            }
        }
        
        else {
            input.innerHTML += buttonValue;
        }

        
    }
}