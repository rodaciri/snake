//If you want to use jQuery, you have to use everything with jQuery.
var cont = $("#cont");

let size= 8
cont.html(deployGrid(size));
cont.css("width",size+"rem");


function deployGrid(size) {
    var grid = "";
    for (let index = 0; index < size; index++) {
        grid += "<div class='row rw-"+index+"'>"+renderCol(size)+"</div>";        
    }
    return grid;
}
function renderCol(size) {
    var cols = "";
    for (let index = 0; index < size; index++) {
        cols += "<div class='col cl-"+index+"'></div>";        
    }
    return cols;
}
