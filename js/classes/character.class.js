class Character extends MovableObject {
    x = 40;
    y = 50;
    width = 250;
    height = 200;
    speed = 0.9;
    currentImage = 0;
    world;
    idleTrue = true;
    longIdleTrue = true;

    constructor() {
        super();
        // this.loadImage(SHARKIE_IDLE_IMAGES[0]);
        this.loadImages(SHARKIE_IDLE_IMAGES);
        this.loadImages(SHARKIE_LONG_IDLE_IMAGES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if(this.fiveSecondsPast()) {
                this.checksIfLongIdleBeginsFromStart();
                this.longIdle();
            } else {
                this.checksIfIdleBeginsFromStart();
                this.idle();
            }
        }, 200);
    }

    fiveSecondsPast() {
        return timePast >= 5000;
    }

    checksIfLongIdleBeginsFromStart() {
        this.longIdleTrue = this.checksIfAnimationBeginsFromStart(this.longIdleTrue);
    }

    checksIfAnimationBeginsFromStart(animationVariable) {
        if(animationVariable) {
            this.idleTrue = true;
            this.longIdleTrue = true;
            this.currentImage = 0;
            return false;
        }
    }

    longIdle() {
        this.startAnimation(SHARKIE_LONG_IDLE_IMAGES);
    }

    startAnimation(array) {
        let i = this.currentImage % array.length; // i = 19 modulu 18 = 0, Rest 1 => i = 1;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    checksIfIdleBeginsFromStart() {
        this.idleTrue = this.checksIfAnimationBeginsFromStart(this.idleTrue);
    }

    idle() {
        this.startAnimation(SHARKIE_IDLE_IMAGES);
    }
}