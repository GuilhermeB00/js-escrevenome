function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
  background("white");
  // função de desenho de um retângulo
  // rect(posição_x, posição_y, largura, altura
    rect(0, 0, 100, 150)
  }
  function setup() {
  createCanvas(600, 600);
  }
  function draw() {
  background("white");
  stroke("blue") // alterando a cor da borda do desenho
  fill("red") // alterando a cor do preenchimento do desenho
  rect(100, 250, 100, 150)
  }
  function setup() {
  createCanvas(600, 600);
  background("white");
  }
  function draw() {
  stroke("blue");
  fill("red");
  if(mouseIsPressed){
  rect(mouseX, mouseY, 20, 35);
  }
  }