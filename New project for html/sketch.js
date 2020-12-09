function setup() {
  
  createCanvas(500,500);
  background('#E68049');
  
}


function draw() {

 if (mouseIsPressed){
 let c = color(255, 204, 100);
 fill(c);
 background('#E68049');
 circle(30,30,20);
 textsize(24);
 fill(200,250,200);
 text('coronavirus',2020,2021);

}
else {
  background('Blue');
  fill(c);
  ellipse(200,200,50,50);
}
}