class DrawableObject {
    img;
    x = 0;
    y = 0;
    height = canvas.height;
    width = canvas.width;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
}