class Character extends MovableObject {
    x = 40;
    y = 50;
    width = 250;
    height = 200;
    speed = 0.9;

    constructor() {
        super();
        this.loadImage(SHARKIE_IDLE_IMAGES[0]);
    }
}