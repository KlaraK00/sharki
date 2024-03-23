class drawableObject {
    img;
    x = 50;
    y = 50;
    width = 200;
    height = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
}