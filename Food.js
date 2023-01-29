class Food {
    constructor(size) {
        this.pos = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
    }
    renderFood() {
        $(".rw-" + this.pos[0] + " .cl-" + this.pos[1]).css("background-color", "black")
    }
    newPos() {
        let nPos;
        let cond = true;
        while (cond) {
            nPos = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];

            for (let i = 0; i < a.pos.length; i++) {
                if ((nPos[0] == a.pos[i][0]) && (nPos[1] == a.pos[i][1])) {
                    cond = true;
                    break;
                }
                else {
                    cond = false;
                }
            }
        }
        this.pos = nPos;
    }
}
