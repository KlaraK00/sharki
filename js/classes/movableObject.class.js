class MovableObject {
    img;
    x = 50;
    y = 50;
    width = 200;
    height = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    // loadImages(path) {

    // }

    moveLeft() {
        setInterval( () => {
            this.x -= 0.9;
        }, 20);
    }

    moveRight() {
        this.x += 0.9;
    }
}