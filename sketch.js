var canvas;
var music;
var box;
var wall1 , wall2 , wall3 , wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edges = createEdgeSprites();
    //create 4 different surfaces
  
    wall1 = createSprite(95,580,190,20)
    wall1.shapeColor = ("yellow")
    wall2 = createSprite(295,580,190,20)
    wall2.shapeColor = ("orange")
    wall3 = createSprite(495,580,190,20)
    wall3.shapeColor = ("purple")
    wall4 = createSprite(695,580,190,20)
    wall4.shapeColor = ("green")


    //create box sprite and give velocity

    box = createSprite(random(20,750),100,20,20)
    box.shapeColor = ("white")
    box.velocityX = 3;
    box.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    box.bounceOff(edges);
    
     drawSprites();

    //add condition to check if box touching surface and make it box

    if(wall1.isTouching(box)){
        box.shapeColor = ("yellow")
        box.bounceOff(wall1)
        music.play();
    }
    if(wall3.isTouching(box)){
        box.shapeColor = ("purple")
        box.bounceOff(wall3);
        music.play();
    }
    if(wall4.isTouching(box)){
        box.shapeColor = ("green")
        box.bounceOff(wall4)
        music.play();
    }
    
    if(wall2.isTouching(box)){
        box.shapeColor = ("orange");
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop()
    }
}
