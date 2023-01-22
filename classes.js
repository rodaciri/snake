//Clases
class Snake {
    constructor(size) {
        let xpos = Math.floor(size / 2);
        this.pos = [[xpos, size - 4], [xpos, size - 3], [xpos, size - 2]];
    }
    renderSnake () {
        for (let index = 0; index < this.pos.length; index++) {
            $(".rw-" + this.pos[index][0] + " .cl-" + this.pos[index][1]).css("background-color", "blue");
        }
    };
    lengthen () {
    };
}