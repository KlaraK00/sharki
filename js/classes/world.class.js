class World {
    // ctx;
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish()
    ];
    // level;


    constructor(ctx) {
        // this.ctx = ctx;
        // this.setWorld();

        this.draw();
    }

    // setWorld() {
    //     debugger;
    //     character.world = this;
    // }

    draw() {
        this.clearWholeCanvas();
        ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
        // draw() will be repeated till infinity
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }

    clearWholeCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}