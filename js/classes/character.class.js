class Character extends MovableObject {
    x = 50;
    y = 50;
    width = 200;
    height = 100;

    constructor() {
        super();
        this.loadImage(SHARKIE_IDLE_IMAGES[0]);
    }
}