class PufferFish extends MovableObject {
    x = 730;
    width = 50;
    height = 35;
    currentImage = 0;

    constructor() {
        super();
        this.loadImage(GREEN_PUFFER_FISH_SWIM_IMAGES[0]);
        this.loadImages(GREEN_PUFFER_FISH_SWIM_IMAGES);
        this.y = Math.random() * 350 + 50; // y is between 50 and 400 
        this.speed = Math.random() * 0.5 + 0.2; // speed is between 0.2 and 0.7
        this.moveLeftInterval();
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % GREEN_PUFFER_FISH_SWIM_IMAGES.length; // i = 19 modulu 18 = 0, Rest 1 => i = 1;
            let path = GREEN_PUFFER_FISH_SWIM_IMAGES[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 150);
    }
}
