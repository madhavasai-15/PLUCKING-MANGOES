class Mango{
    constructor(x, y){
        var options = {isStatic: true, restitution: 0, friction: 1,  density: 0.8};
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
        this.image = loadImage("mango.png");
        this.r = 25;
    };

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 60, 60);
    };
};