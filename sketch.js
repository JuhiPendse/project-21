var  wall , thickness ;
var bullet ,speed , weight ;

function setup() {
  createCanvas(800,400);


 bullet = createSprite(50, 200, 50, 50);

 wall = createSprite(1200,200 ,thickness, height/2)

  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background("black");  

 bullet.velocityX = speed ;

 thickness=random(22,83)

  if(wall.x - bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX =0;
    var deformation=0.5 * weight * speed* speed/22509
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0)
    }
  if(deformation<180 && deformation>100){
    bullet.shapeColor=color(230,230,0)  
  }
  if(deformation>100){
    bullet.shapeColor =color(white)
  }

   if(damage<10){

    wall.shapeColor(80,80,80)
   }

  }
  wall.shapeColor =color(80,80,80)

  drawSprites();
}