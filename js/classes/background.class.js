class Background extends MovableObject {
    x = 0;
    y = 0;
    height = canvas.height;
    width = canvas.width;
    speed;

    constructor() {
        super();
        this.loadImage(BACKGROUND_WATER_DARK[0]);
    }
}