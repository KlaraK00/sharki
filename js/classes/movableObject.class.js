class MovableObject extends DrawableObject {
    speed;
    intervalSpeed = 1000 / 60; // 60 x per second
    imageCache = {};

    loadImages(array) {
        array.forEach(path => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    }

    startAnimation(array) {
        let i = this.currentImage % array.length; // i = 19 modulu 18 = 0, Rest 1 => i = 1;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    checksIfAnimationBeginsFromStart(animationVariable) {
        if(this.animationVariableIsFromCharacter(animationVariable)) {
            return this.correctVariablesFromCharacter();
        } else if(this.animationVariableIsFromPufferFish(animationVariable)) {
            return this.correctVariablesFromPufferFish();
        }
    }

    animationVariableIsFromCharacter(animationVariable) {
        return animationVariable && this instanceof Character;
    }

    animationVariableIsFromPufferFish(animationVariable) {
        return animationVariable && this instanceof PufferFish;
    }

    /**
     * Moves an object to the left while subtracting the the amount of speed from the x-coordinate.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Moves an object continuously to the left based on its interval-speed.
     */
    moveLeftInterval() {
        setInterval( () => {
            this.moveLeft();
        }, this.intervalSpeed);
    }

    /**
     * Moves an object to the right while adding the amount of speed to the x-coordinate.
     */
    moveRight() {
        this.x += this.speed;
    }
}