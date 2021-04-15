var mouse1,mouse2,mouse3,cat1,cat2,cat3,cat,mouse,garden;
function preload() {
    //load the images here

 mouse1=loadAnimation("mouse1.png")
 mouse2=loadAnimation("mouse2.png","mouse3.png")
 mouse3=loadAnimation("mouse4.png")
 cat1=loadAnimation("cat1.png")
 cat2=loadAnimation("cat2.png","cat3.png")
cat3=loadAnimation("cat4.png")
garden=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    mouse=createSprite(150,650)
  mouse.addAnimation("mouse_with_cheese",mouse1)
  mouse.scale=0.1
  cat=createSprite(700,650)
 cat.addAnimation("cat",cat1)
  cat.scale=0.1
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0;
      mouse.addAnimation("mouseglass",mouse3)
      mouse.changeAnimation("mouseglass")
      cat.addAnimation("catstop",cat3)
      cat.changeAnimation("catstop")
      cat.x=300
  }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode===LEFT_ARROW){
 mouse.addAnimation("mouseTeasing",mouse2)
 mouse.changeAnimation("mouseTeasing")
 mouse.frameDelay=25
 cat.addAnimation("catmoving",cat2)
cat.changeAnimation("catmoving")
cat.velocityX=-5
}
}
