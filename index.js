//If you want to use jQuery, you have to use everything with jQuery.
var cont = $("#cont");

let size = 10;
cont.html(deployGrid(size));
cont.css("width", size + "rem");

let a = new Snake(size);
a.renderSnake();

let b = new Food(size);
b.renderFood();

setInterval(() => {
    a.updatePos();
    a.renderSnake();
    if ((a.pos[0][0] == b.pos[0]) && (a.pos[0][1] == b.pos[1])) {
        a.lengthen();
        b.newPos();
        b.renderFood();
    }
    if (a.pos.length == (size * size)) {
        alert("You won")
    }
}, 500);


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
    if ((a.pos[0][0] == b.pos[0]) && (a.pos[0][1] == b.pos[1])) {
        a.lengthen();
        b.newPos();
        b.renderFood();
    }
}

$(document).on("keydown", (event) => {
    a.updateDir(event.key);
})

//This version has renderization of the snake and movement it doesnt have length and bug functions or methods
//Also is missing a collition detection.


