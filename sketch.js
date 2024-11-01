let cor;
let posicaoHorizontal = 200;
let posicaoVertical = 200;
function setup() {
  createCanvas(400, 400);
  background("rgb(0,0,0)");
  cor= color(random(0, 255), random(0,255), random(0, 255));
  
}
function draw() {
  circle(posicaoHorizontal, posicaoVertical, 50);
  fill(cor);
  
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal +3;
  }
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal -3;
  }
  if(mouseY > posicaoVertical){
    posicaoVertical = posicaoVertical +3;
  }
  if(mouseY < posicaoVertical){
    posicaoVertical = posicaoVertical -3;
  
    }
    if(mouseIsPressed){
    cor= color(random(0, 255), random(0,255), random(0, 255), random(0, 100), random(0, 100));
  }
  
  }
  
   
     
     
 
