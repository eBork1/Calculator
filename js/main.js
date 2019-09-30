document.body.onload = layout;
var numString = "0"
var inputString = "";
var keys = ['C', '', '', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '', '.', '='];


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
    outputCol.innerHTML = numString + inputString;
    outputBox.appendChild(outputCol);
    mainDiv.appendChild(outputBox);

    //rows for buttons
    var row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-center');

    //loop again to make each column
    for (var j = 0; j < 20; j++) {
        var col = document.createElement('div');
        col.setAttribute('class', 'col-3 border text-center');
        col.id = j;
        col.innerHTML = `${keys[j]}`;
        col.addEventListener('click', calcInput);
        console.log(col);
        console.log("id = " + j);

        row.appendChild(col);
    }
    container.appendChild(row);
    mainDiv.appendChild(container);
}
/* END LAYOUT() */

function calcInput() {
    console.log("click worked");
    
    
}
