class PufferFish extends MovableObject {
    x = 730;
    width = 50;
    height = 35;
    currentImage = 0;
    swimTrue = true;

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
            this.checksIfSwimBeginsFromStart();
            this.swim();
        }, 200);
    }

    checksIfSwimBeginsFromStart() {
        this.swimTrue = this.checksIfAnimationBeginsFromStart(this.swimTrue);
    }

    correctVariablesFromPufferFish() {
        this.swimTrue = true;
        this.currentImage = 0;
        return false;
    }

    swim() {
        this.startAnimation(GREEN_PUFFER_FISH_SWIM_IMAGES);
    }
}
