class Character extends MovableObject {
    x = 25;
    y = 50;
    width = 200;
    height = 100;
    speed = 0.9;

    constructor() {
        super();
        this.loadImage(SHARKIE_IDLE_IMAGES[0]);
    }
}