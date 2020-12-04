class Stone{
    constructor(x, y){
        var options = {isStatic: false, restitution: 0, friction: 1, density: 1};
        this.body = Bodies.rectangle(x, y, 85, 64, options);
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    };

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 75, 54);
    };
};