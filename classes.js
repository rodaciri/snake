//Clases
class Snake {
    constructor(size) {
        let xpos = Math.floor(size / 2);
        this.pos = [[xpos, size - 4], [xpos, size - 3], [xpos, size - 2]];
        this.tailPos = this.pos[this.pos.length - 1]
        this.dir = "ArrowLeft";
    }
    renderSnake() {
        for (let index = 0; index < this.pos.length; index++) {
            $(".rw-" + this.pos[index][0] + " .cl-" + this.pos[index][1]).css("background-color", "blue");
        }

    };
    updatePos() {
        $(".rw-" + this.tailPos[0] + " .cl-" + this.tailPos[1]).css("background-color", "");
        this.pos.pop();

        switch (this.dir) {
            case "ArrowLeft":
                this.pos.unshift([this.pos[0][0], this.pos[0][1] - 1]);
                break;
            case "ArrowRight":
                this.pos.unshift([this.pos[0][0], this.pos[0][1] + 1]);
                break;
            case "ArrowUp":
                this.pos.unshift([this.pos[0][0] - 1, this.pos[0][1]]);
                break;
            case "ArrowDown":
                this.pos.unshift([this.pos[0][0] + 1, this.pos[0][1]]);
                break;
            default:
                break;
        }
        this.tailPos = this.pos[this.pos.length - 1];
    }
    updateDir(nDir) {
        let cond = (nDir == "ArrowLeft")&&(this.dir!="ArrowRight") || (nDir == "ArrowRight")&&(this.dir!="ArrowLeft") || (nDir == "ArrowUp")&&(this.dir!="ArrowDown") || (nDir == "ArrowDown")&&(this.dir!="ArrowUp")
        console.log(cond);
        if (cond) {
            this.dir = nDir;
        }
    }
}