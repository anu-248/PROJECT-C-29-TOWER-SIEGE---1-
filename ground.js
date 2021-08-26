class Ground{

    constructor(x,y,width,height){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
      fill("brown");
      rect (pos.x,pos.y,this. width,this.height)
    }
    
}       
