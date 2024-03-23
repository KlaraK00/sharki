class PufferFish extends MovableObject {
    x = 730;
    width = 50;
    height = 25;

    constructor() {
        super();
        this.loadImage(GREEN_PUFFER_FISH_SWIM_IMAGES[0]);
        this.y = Math.random() * 400 + 50; // y is between 50 and 450 
        this.speed = Math.random() * 1 + 1 // speed is between 1 and 2
        this.moveLeftInterval();
    }
}
