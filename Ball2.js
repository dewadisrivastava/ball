class Ball2{
    constructor(x,y,r){
        var options={
        isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        this.trajectory=[]
        World.add(world,this.body)
        
    }
    display(){
    var position=[this.body.position.x,this.body.position.y];
    this.trajectory.push(position)
var pos=this.body.position
    var angle=this.body.angle; 
        push();
       translate (pos.x,pos.y);
       rotate(angle);
       fill("white");
       

       for(var i=0;i<this.trajectory.length;i++){
        ellipse(this.trajectory[i][0],this.trajectory[i][1],this.r,this.r)
       }
       pop()
    
    }
         
    }
