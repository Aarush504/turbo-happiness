class Bird extends BaseClass {
  constructor(x,y,r){
    super(x,y,50,50,r);
    this.image = loadImage("sprites/stone.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
