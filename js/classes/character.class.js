class Character extends MovableObject {
    x = 50;
    y = 50;
    width = 200;
    height = 100;

    constructor() {
        super();
        let image = new Image();
        image.src = '../img/1.Sharkie/1.IDLE/1.png';
        setTimeout(()=> {
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }, 2000)
    }
}