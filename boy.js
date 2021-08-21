class Boy{
    constructor(){
       var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(600,400,100,90,options);
        this.r=300
        this.h=250
        this.image=loadImage("images/Walking Frame/walking_4.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.h);
      
    }
}