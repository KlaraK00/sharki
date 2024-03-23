class MovableObject extends DrawableObject {
    speed;
    intervalSpeed = 33.33; // ca. 30 x pro Sekunde
    // loadImages(path) {

    // }

    /**
     * Moves an object to the left while subtracting the the amount of speed from the x-coordinate.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Moves an object continuously to the left based on its interval-speed.
     */
    moveLeftInterval() {
        setInterval( () => {
            this.moveLeft();
        }, this.intervalSpeed);
    }

    /**
     * Moves an object to the right while adding the amount of speed to the x-coordinate.
     */
    moveRight() {
        this.x += this.speed;
    }
}