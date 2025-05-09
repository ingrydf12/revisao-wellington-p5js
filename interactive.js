let circX, circSpeedX;
let quadY, quadSpeedY;
let triX, triY, triSpeedX, triSpeedY;
let posX, posY, speedCube;
let clicks = [];

const TAM = 40,
  SPEED = 3,
  FIXLINE = 10;

function setup() {
  let canvas = createCanvas(1000, 480);
  canvas.parent('container-sketch');
  circX = width / 2;
  circSpeedX = SPEED;
  sqY = height / 2;
  sqSpeedY = SPEED;
  triX = 0;
  triY = 0;
  triSpeedX = SPEED * 0.7;
  triSpeedY = SPEED * 0.5;
  posX = width / 2;
  posY = height - TAM * 2;
  speedCube = SPEED * 2;
  textSize(12);
}

function draw() {
  background(16);
  fill(250);
  textStyle(BOLD);
  text("Controles", 10, 20);
  textStyle(NORMAL);
  text("Teclas: ← ↑ → ↓ movem o quadrado azul", 10, 40);
  text("Clique para gerar bolinhas coloridas", 10, 60);

  fill(100, 200, 250);
  circle(circX, height / 3, TAM);
  //Evita que ele ultrapasse os limites da tela
  circX += circSpeedX;
  if (circX > width - TAM / 2 || circX < TAM / 2) {
    circSpeedX *= -1;
  }

  //Quadrado se movimentando
  fill(250, 100, 150);
  square(width / 2 - TAM * 4, sqY, TAM);
  sqY += sqSpeedY;
  //Evita que ele ultrapasse os limites da tela e só inverte a direção pela vel
  if (sqY > height - TAM || sqY < 0) {
    sqSpeedY *= -1;
  }

  //Triângulo
  fill(150, 250, 100);
  triangle(triX, triY, triX + TAM, triY, triX + TAM / 2, triY + TAM);
  triX += triSpeedX;
  triY += triSpeedY;
  if (triX < 0 || triX > width - TAM) triSpeedX *= -1;
  if (triY < 0 || triY > height - TAM) triSpeedY *= -1;

  //1) Laço For
  fill(120, 34, 186);
  for (let i = 0; i < FIXLINE; i++) {
    circle(width - 30, i * 40 + 40, 20);
  }

  //2) Controles quadrado (setas)
  fill(255);
  rect(posX, posY, TAM, TAM);
  if (keyIsDown(LEFT_ARROW)) posX -= speedCube;
  if (keyIsDown(RIGHT_ARROW)) posX += speedCube;
  if (keyIsDown(UP_ARROW)) posY -= speedCube;
  if (keyIsDown(DOWN_ARROW)) posY += speedCube;
  posX = constrain(posX, 0, width - TAM);
  posY = constrain(posY, 0, height - TAM);

  //Cores dos círculos dos cliques
  noStroke();
  for (let b of clicks) {
    fill(b.cor);
    circle(b.x, b.y, b.d);
  }
}

//MARK: - Círculos aleatórios por clique
function mousePressed() {
  clicks.push({
    x: mouseX,
    y: mouseY,
    d: random(10, 30),
    cor: color(random(255), random(255), random(255)),
  });
}
