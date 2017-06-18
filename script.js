var buttons = document.querySelectorAll("#calc span");
var operators = ['÷','x','-','+'];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        var input = document.querySelector('.screen');
        var inputValue = input.innerHTML;
        var buttonValue = this.innerHTML;

        if (buttonValue === 'C') {
            input.innerHTML = "";
        } else if (buttonValue === "=") {
            var toCalculate = inputValue;
            toCalculate = toCalculate.replace(/x/g,'*').replace(/÷/g,'/');

            if (toCalculate) {
                input.innerHTML = eval(toCalculate);
            }
        } else if (operators.indexOf(buttonValue) > -1) {
            var lastCharacter = inputValue[inputValue.length-1];

            if (inputValue !== "" && operators.indexOf(lastCharacter) === -1) {
                input.innerHTML += buttonValue;
            } else if (inputValue === "" && btnValue === "-") {
                input.innerHTML += buttonValue;
            }

            if (operators.indexOf(lastCharacter) > -1 && inputValue.length > 1) {
                input.innerHTML = inputValue.replace(/.$/, buttonValue)
            }
        } else {
            input.innerHTML += buttonValue;
        }

        
    }
}