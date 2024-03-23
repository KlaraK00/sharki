class World {
    // ctx;
    // level;
    unmovableBackgrounds = [
        new Water(),
        new Light()
    ]
    movableBackgrounds = [
        new Fondo1(),
        new Fondo2(),
        new Floor()
    ]
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish()
    ];

    constructor(ctx) {
        this.draw();
        // this.ctx = ctx;
        // this.setWorld();
    }

    // setWorld() {
    //     debugger;
    //     character.world = this;
    // }

    /**
     * Draws the game.
     */
    draw() {
        this.clearWholeCanvas();
        this.addAllObjectsToMap();    
        this.repeatsTillInfinity();
    }

    /**
     * Clears the whole game-field.
     */
    clearWholeCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /**
     * Adds all objects to the game-field.
     */
    addAllObjectsToMap() {
        this.addObjectsToMap(this.unmovableBackgrounds);
        this.addObjectsToMap(this.movableBackgrounds);
        this.addToMap(this.character);  
        this.addObjectsToMap(this.enemies);  
    }

    /**
     * Adds multiple objects to the game-field.
     * 
     * @param {Array} objects - Passes objects which are added to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    /**
     * Adds an object to the map by drawing it on the canvas.
     * 
     * @param {object} object - Uses an object as parameter.
     */
    addToMap(object) {
        ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }

    /**
     * Repeats the draw-function continously until stopped, using requestAnimaitonFrame for optimal performance.
     */
    repeatsTillInfinity() {
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }
}