class PufferFish extends MovableObject {
    x = 730;
    width = 50;
    height = 25;
    speed = 0.9;
    intervalSpeed = 20;

    constructor() {
        super();
        this.loadImage(GREEN_PUFFER_FISH_SWIM_IMAGES[0]);
        this.y = Math.random() * 400 + 50;
        this.moveLeftInterval();
    }
}
