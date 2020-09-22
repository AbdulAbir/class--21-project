var bullet,bullet1,bullet2,bullet3,bullet4,wall,wall1;
var thickness,speed,weight;

function preload()
{
  bullet1 = loadImage("Untitled.png");
  bullet2 = loadImage("Untitled1.png");
  bullet3 = loadImage("Untitled2.png");
  bullet4 = loadImage("Untitled3.png");
  wall1 = loadImage("wall1.png");
}

function setup() {
  createCanvas(1600,400);
 
  thickness = random(22,83);
  speed = random(223,321);
   weight = random(30,52);

   bullet = createSprite(100,200, 300, 100);
   bullet.scale = 0.15;
   bullet.addImage("care",bullet4);
   wall = createSprite(1200,200, thickness,height/2);
  
   bullet.shapeColor = "white";
   wall.shapeColor = (80,80,80);
   //wall.addImage("care",wall1);
   bullet.velocityX = speed;
  
}

function draw() {
  background("black"); 
   if(wall.x-bullet.x<(bullet.width+wall.width)/6)
   {
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180)
   {
      bullet.addImage("care",bullet2);
      bullet.shapeColor = "green";
      bullet.scale = 0.35;
   }
   
    if(deformation<180 && deformation>100)
    {
      bullet.addImage("care",bullet3);
      bullet.scale = 0.35;
       bullet.shapeColor = "red";
    }

    if(deformation<100)
    {
      bullet.addImage("care",bullet1);
      bullet.shapeColor = "yellow";
      bullet.scale = 0.35;
    }
   }
  if(hasCollided(bullet,wall))
  {
     bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    
  if(damage>10)
    {
      wall.shapeColor = ("red");
    }
  }
  if(damage<10)
  {
    wall.shapeColor = ("green");
  }  
  
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdges = lbullet.x + lbullet.width/5;
  wallLeftEdge = lwall.x;
  if (bulletRightEdges>=wallLeftEdge)
  {
    return true;
  }
  return false;
}