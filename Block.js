class Block extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("block.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     push();
     this.Visiblity = this.Visiblity - 50;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
     World.remove(world, this.body);
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }
};