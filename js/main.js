document.body.onload = layout;

// create layout for calculator
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
    outputCol.setAttribute('class', 'col-12 border text-right');
    outputBox.appendChild(outputCol);
    mainDiv.appendChild(outputBox);
    

    //rows for buttons
    for (var i = 0; i < 5; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'row justify-content-center');

        //loop again to make each column
        for (var j = 0; j < 4; j++) {
            var col = document.createElement('div');
            col.setAttribute('class', 'col-3 border text-center');
            col.id = i + "col" + j;
            col.addEventListener('click', buttonAction);
            console.log(col);

            row.appendChild(col);
        }
        container.appendChild(row);
    }
    mainDiv.appendChild(container);
}

function buttonAction() {

}
