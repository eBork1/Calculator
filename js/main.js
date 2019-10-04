document.body.onload = layout;

var keys = ['C', '', '', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];
var opStore = "";
var numStore1 = "";
var numStore2 = "";
var expectingOperator = false;
var inputtingNumber2 = false; // Get whether or not the next number input should be number 1 or number 2

/* create layout for calculator */
function layout() {

    //title
    var title = document.createElement('h2');
    title.innerHTML = "Calculator";
    title.className = "h2 text-center";
    mainDiv.appendChild(title);

    // main container for the calculator 
    var container = document.createElement('div');
    container.setAttribute('class', 'container justify-content-center');

    // output box
    var outputBox = document.createElement('div');
    outputBox.setAttribute('class', 'row justify-content-center');
    var outputCol = document.createElement('div');
    outputCol.setAttribute('class', 'col-12 border text-right display-4 pb-0');
    outputCol.id = "outputField";
    outputCol.innerHTML = "0";
    outputBox.appendChild(outputCol);
    mainDiv.appendChild(outputBox);

    //rows
    var row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-center');

    //loop again to make each column
    for (var j = 0; j < 20; j++) {
        var col = document.createElement('div');
        col.setAttribute('class', 'col-3 border text-center');
        col.id = j;
        col.innerHTML = `${keys[j]}`;
        col.addEventListener('click', handleInput);
        //console.log(col);

        row.appendChild(col);
    }

    container.appendChild(row);
    mainDiv.appendChild(container);
}

// Handle a new key being clicked
function handleInput() {
    var keyClicked = keys[this.id];
    console.log("Clicked Key: " + keyClicked);

    // get the output into an array
    // var tmp = result.split(opStore) // opStore != ""
    // if tmp.length > 2
    // do equation, replace result with new value
    // if tmp.length < 2 
    // allow the addition of this button click to the result
    // if keyClicked == ".", "=" 

    switch (keyClicked) {
        case '+':
        case '-':
        case '*':
        case '/':
            // Got an operator: if first operator, store the operator and start reading the next number. Else, calc result
            if (inputtingNumber2) {
                calcResult();
                opStore = keyClicked;
                inputtingNumber2 = true;
            }
            
            // Got an operator: store the operator and start reading the next number
            opStore = keyClicked;
            inputtingNumber2 = true;
            updateText();
            break;

        case '=':
            // Got the '=': Calculate the result
            calcResult();
            break;

        case '.':
            // Got a decimal point: If it is the first one, add it to whichever number is being input
            if (!inputtingNumber2) {
                if (!numStore1.includes('.')) {
                    numStore1 += keyClicked;
                    updateText();
                }
                else {
                    console.log("Attempted to add another decimal to number " + numStore1);
                }
            }
            else {
                if (!numStore2.includes('.')) {
                    numStore2 += keyClicked;
                    updateText();
                }
                else {
                    console.log("Attempted to add another decimal to number " + numStore2);
                }
            }
            break;

        case 'C':
            // Got the clear command: Clear all state and start inputting the first number
            opStore = "";
            numStore1 = "";
            numStore2 = "";
            result = "";
            inputtingNumber2 = false;
            updateText();
            break;

        default:
            // Got a number: Add it to whichever number is being input
                

            if (!inputtingNumber2) {
                numStore1 += keyClicked;
                updateText();
            }
            else {
                numStore2 += keyClicked;
                updateText();
            }
            break;
    }

    console.log("Current Operation: " + numStore1 + " " + opStore + " " + numStore2);
}

/* Calculate the result */
function calcResult() {

    num1AsFloat = parseFloat(numStore1);
    num2AsFloat = parseFloat(numStore2);

    // Evaluate the expression based off the operation
    switch (opStore) {
        case '+':
            numStore1 = num1AsFloat + num2AsFloat;
            break;
        case '-':
            numStore1 = num1AsFloat - num2AsFloat;
            break;
        case '*':
            numStore1 = num1AsFloat * num2AsFloat;
            break;
        case '/':
            numStore1 = num1AsFloat / num2AsFloat;
            break;
    }

    numStore2 = "";
    opStore = "";
    inputtingNumber2 = false;
    expectingOperator = true;
    console.log("Result: " + numStore1);
    updateText();
}

// Update the text based off the state of the input
function updateText() {
    if (numStore1) {
        if (opStore) {
            if (numStore2) {
                showText(numStore1 + " " + opStore + " " + numStore2);
            }
            else {
                // First number & Operator: Display num1 and operator
                showText(numStore1 + " " + opStore + " ");
            }
        }
        else {
            // Only first number: Display num1
            showText(numStore1);
        }
    }
    else {
        // Nothing input: Display nothing
        showText("0");
    }
}

// Show the specified text
function showText(textToShow) {
    document.getElementById("outputField").innerHTML = textToShow;
}