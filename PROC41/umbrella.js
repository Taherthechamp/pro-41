class umbrella {
    constructor(x, y) {
      var options = {
        isStatic:true, 
        'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.r=100
      this.x=x
      this.y=y
      this.body = Matter.Bodies.circle(this.x, this.y, 100, options);
      this.image = loadImage("images/Walking Frame/walking_1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      image(this.image,0,0,300,300);
      pop();
    }
  }