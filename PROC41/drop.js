class drop { 
    constructor(x,y) {
      
       var options={
         restitution:1,
         friction:0.1,
         density:1.2
         } 
         this.body=Bodies.circle(x, y,5, options) 
         this.radius=5
        World.add(world, this.body); 
        }
         display() { 
           var pos=this.body.position;
        fill("blue")
           ellipse(pos.x, pos.y, 10, 20);
          }
         }