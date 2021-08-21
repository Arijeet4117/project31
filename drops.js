class Drops{
    constructor(x,y){

        this.body=Bodies.circle(x,y,5);
        World.add(world,this.body)
    }

    display(){
        fill("blue") 
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,5,5)
        
     }

      updatey(){

        if(this.body.position.y>700){
            Body.setPosition(this.body,{x:random(0,1200),y:random(0,700)})
        }


      }

    
}