class Ground{
    constructor(x, y, width, height, red, green, blue){
        var options = {isStatic: true};
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.red = red;
        this.green = green;
        this.blue = blue;
    };

    display(){
        var pos = this.body.position;
        push();;
        rectMode(CENTER);
        fill(this.red, this.green, this.blue);
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    };
};