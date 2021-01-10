var monster, mImg
var princess, hero,hero1, princessImg, heroImg,heroClimb,heroImg2, heroIdle1, heroIdle2
var fireball, fireballImg, iceball, iceballImg
var vladder1, vladder2, vladder3, vladder4, vladderIMG,ladderGroup;
var hladder1,hladder2,hladder3,hladder4,hladder5,hladder1_IMG,hladder2_IMG
var bgImg,BG
var score=0;
var life1,life2,life3,lifeImg,brokenLImg


function preload(){
    mImg = loadAnimation("m4.png","m5.png","m6.png","m7.png","m8.png","m9.png","m10.png","m11.png","m12.png")
    lifeImg = loadImage("hearts.png")
    iceballImg = loadImage("ice.png")
    brokenLImg = loadImage("broken heart.png")
    heroImg =  loadAnimation("hero_walking_1.png","hero_walking-idle_2.png","hero_walking_2.png")
    heroImg2 =  loadAnimation("hero_walking_3.png","hero_walking-idle_1.png","hero_waling_4.png")
    heroIdle1= loadImage("hero_walking-idle_2.png")

    heroClimb =  loadAnimation("climbing1.png","climbing2.png","climbing3.png")
    vladderIMG= loadImage("ladder.png")
    hladder1_IMG= loadImage("platform1.png")
    hladder2_IMG= loadImage("platform2.png")
    fireballImg= loadImage("fire1.png")
    princessImg =  loadAnimation("princess1.png","princess2.png","princess3.png","princess4.png")
    bgImg = loadImage("bg.png")
    
   
}


function setup(){
createCanvas(800 , 700)

BG= createSprite(400,450)
BG.addImage(bgImg)
BG.scale=2

monster = createSprite(226,142) 
monster.addAnimation("angry",mImg)

life1 = createSprite(625,50)
life1.addImage("angry",lifeImg)
life1.scale=0.1

life2 = createSprite(650,50)
life2.addImage("angry",lifeImg)
life2.scale=0.1

life3 = createSprite(675,50)
life3.addImage("angry",lifeImg)
life3.scale=0.1

princess= createSprite(460,50)
princess.addAnimation("crying",princessImg)

vladder1=createSprite(680,600);
vladder1.addImage(vladderIMG);
//vladder1.visible=false;
//vladder1.debug=true
vladder1.setCollider("rectangle",0,0,20,80)

vladder2=createSprite(405,500);
vladder2.addImage(vladderIMG);
//vladder2.visible=false;
//vladder2.debug=true
vladder2.setCollider("rectangle",0,0,20,80)


vladder3=createSprite(210,500);
vladder3.addImage(vladderIMG);
//vladder2.visible=false;
//vladder2.debug=true
vladder3.setCollider("rectangle",0,0,20,80)


hero = createSprite(185,625)
hero.addAnimation("Idle",heroIdle1)
//hero.scale=1
hero.addAnimation("walk",heroImg)  
hero.addAnimation("left",heroImg2)
hero.addAnimation("climb",heroClimb)
hero.setCollider("circle",0,0,20)



}

function draw(){
background(170)
heromove()

drawSprites()

    
}


function heromove(){
    if(keyDown("RIGHT_ARROW")){
        hero.changeAnimation("walk",heroImg)
        hero.x= hero.x+5
        //hero.y=625
//hero.destroy()
    }
    
    if(keyDown("LEFT_ARROW")){
        //hero2 = createSprite(hero1.x,hero1.y,10,10)
        hero.changeAnimation("left",heroImg2)
        hero.x= hero.x-5
     }


if(hero.isTouching(vladder1) || hero.isTouching(vladder2)|| hero.isTouching(vladder3) ){

    if(keyDown("UP_ARROW")){
        hero.changeAnimation("climb",heroClimb)
        hero.y= hero.y-5
            }


    if(keyDown("DOWN_ARROW")){
        hero.changeAnimation("climb",heroClimb)
        hero.y= hero.y+5
    }
}

}
//kya karen uskay liye - what to do for it
// seekhnaa - learn
// wo bhi - that too