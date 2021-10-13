class ground {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true, 
        'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.width=width
      this.height=height
      this.x=x
      this.y=y
      this.body = Matter.Bodies.rectangle(this.x, this.y, width, height, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER)
      fill("brown")
      rect(0,0,this.width,this.height);
      pop();
    }
  }