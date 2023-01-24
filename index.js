//If you want to use jQuery, you have to use everything with jQuery.
var cont = $("#cont");

let size = 20;
cont.html(deployGrid(size));
cont.css("width", size + "rem");

let a = new Snake(size);
a.renderSnake();


setInterval(() => {
    a.updatePos();
    a.renderSnake();
}, 250);


function deployGrid(size) {
    var grid = "";
    for (let index = 0; index < size; index++) {
        grid += "<div class='row rw-" + index + "'>" + renderCol(size) + "</div>";
    }
    return grid;
}
function renderCol(size) {
    var cols = "";
    for (let index = 0; index < size; index++) {
        cols += "<div class='col cl-" + index + "'></div>";
    }
    return cols;
}
function test() { //this function is to run the game frame by frame
    a.updatePos();
    a.renderSnake();
}

$(document).on("keydown", (event) => {
        a.updateDir(event.key);
    })

//This version has renderization of the snake and movement it doesnt have length and bug functions or methods
//Also is missing a collition detection.


