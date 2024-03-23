class MovableObject extends drawableObject {
    // loadImages(path) {

    // }

    moveLeft() {
        this.x -= this.speed;
    }

    moveLeftInterval() {
        setInterval( () => {
            this.moveLeft();
        }, this.intervalSpeed);
    }

    moveRight() {
        this.x += this.speed;
    }
}