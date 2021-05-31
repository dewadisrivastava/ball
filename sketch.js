const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground

var ball2=[];
var rod=[]

function setup(){
    createCanvas(700,400)
    engine=Engine.create()
    world=engine.world

    for(var k=0;k<=width-10;k=k+60){
        ball2.push(new Ball2(k,30,10))
    }

  for(var j=0;j<=width-10;j=j+60){
      ball2.push(new Ball2(j,50,10))
  }

  for(var i=0;i<=width-10;i=i+60){
    ball2.push(new Ball2(i,70,10))
}

for(var r=0;r<width-10;r=r+50){
    rod.push(new Rod(r,280,10,240))
}
for(var t=0;t<width-10;t=t+40){
    ball2.push(new Ball(t,-10,10))
}
ground=new Ground(00,410,700,5)
}




function draw(){
    background("grey")
    Engine.update(engine)
    for(var k=0;k<ball2.length;k++){
        ball2[k].display()
    }


  
   for(var j=0;j<ball2.length;j++){
       ball2[j].display()
       
   }

   for(var i=0;i<ball2.length;i++){
    ball2[i].display()
}

for(var r=0;r<rod.length;r++){
    rod[r].display()
}
for(var t=0;t<ball2.length;t++){
ball2[t].display()
}
ground.display()
}