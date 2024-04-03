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

    correctVariablesFromCharacter() {
        this.idleTrue = true;
        this.longIdleTrue = true;
        this.currentImage = 0;
        return false;
    }

    longIdle() {
        this.startAnimation(SHARKIE_LONG_IDLE_IMAGES);
    }

    checksIfIdleBeginsFromStart() {
        this.idleTrue = this.checksIfAnimationBeginsFromStart(this.idleTrue);
    }

    idle() {
        this.startAnimation(SHARKIE_IDLE_IMAGES);
    }
}