var mrect, frect;

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  frect = createSprite(800, 200, 50, 50);
  frect.shapeColor="Blue"
  
  mrect = createSprite(200,200,65,30);
  mrect.shapeColor="Orange";
  
  mrect.velocityX=3;
  frect.velocityX=-3;
  

}

function draw() {
  background(255,255,255);  
  
  

  if(mrect.x-frect.x<(frect.width+mrect.width)/2&&frect.x-mrect.x<(frect.width+mrect.width)/2
  &&mrect.y-frect.y<(frect.height+mrect.height)/2&&frect.y-mrect.y<(frect.height+mrect.height)/2){
     mrect.velocityX=mrect.velocityX*(-1);
     frect.velocityX=frect.velocityX*(-1);
  }
 


  drawSprites();
}

