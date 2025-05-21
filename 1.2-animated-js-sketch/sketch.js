/* Esse arquivo contém o tutorial proposto pelo professor, junto ao desafio no final 
Ambos presentes no link: https://wellingtonwfsarmento.notion.site/Arrays-e-Bolinhas-Animadas-com-p5-js-Um-Tutorial-1e5a08e68f4080db99a0e212c93b68eb
 Cada bolinha possui uma posição e uma velocidade armazenadas em arrays.
*/

//MARK: - Estrutura básica de criação de sketch utilizando Javascript Vanilla
//Eu puxo o p5.js e crio uma função anônima sketch que recebe o objeto p5 como parâmetro.
new p5((sketch) => {
  let posicoes = [];
  let velocidades = [];
  let cores = [];
  const quantBolas = 5;
  let raio = [];
  const gravidade = sketch.createVector(0, 0.25);

  sketch.setup = () => {
    sketch.createCanvas(800, 600).parent("vetores");

    //Iteração para criar as bolinhas
    for (let i = 0; i < quantBolas; i++) {
      //Inicializando as cores aleatórias pra cada bolinha
      cores.push(
        sketch.color(sketch.random(255), sketch.random(255), sketch.random(255))
      );

      // Adiciona uma posição inicial aleatória ao array posicoes
      posicoes.push(
        sketch.createVector(
          sketch.random(30, sketch.width - 30),
          sketch.random(30, sketch.height - 30)
        )
      );

      velocidades.push(
        sketch.createVector(sketch.random(1, 3), sketch.random(1, 3))
      );

      raio.push(sketch.random(10, 30));
    }
  };
  sketch.draw = () => {
    sketch.background(15, 15, 15);
    sketch.noStroke();

    sketch.fill(255);
    sketch.textSize(14);
    sketch.text("Clique para adicionar mais bolinhas", 20, 30);

    for (let i = 0; i < posicoes.length; i++) {
      let pos = posicoes[i];
      let vel = velocidades[i];

      pos.add(vel);
      vel.add(gravidade);

      posicoes[i].x = sketch.constrain(
        posicoes[i].x,
        raio[i],
        sketch.width - raio[i]
      );
      posicoes[i].y = sketch.constrain(
        posicoes[i].y,
        raio[i],
        sketch.height - raio[i]
      );

      if (posicoes[i].x <= raio[i] || posicoes[i].x >= sketch.width - raio[i]) {
        velocidades[i].x *= -1;
      }
      if (
        posicoes[i].y <= raio[i] ||
        posicoes[i].y >= sketch.height - raio[i]
      ) {
        velocidades[i].y *= -1;
      }

      for (let j = i + 1; j < posicoes.length; j++) {
        let distBolas = sketch.dist(
          posicoes[i].x,
          posicoes[i].y,
          posicoes[j].x,
          posicoes[j].y
        );
        if (distBolas < raio[i] + raio[j]) {
          let temp = velocidades[i].copy();
          velocidades[i] = velocidades[j].copy();
          velocidades[j] = temp;

          let overlap = raio[i] + raio[j] - distBolas;
          let dir = p5.Vector.sub(posicoes[i], posicoes[j]).normalize();
          posicoes[i].add(dir.copy().mult(overlap / 2));
          posicoes[j].sub(dir.copy().mult(overlap / 2));
        }
      }

      sketch.fill(cores[i]);
      sketch.ellipse(posicoes[i].x, posicoes[i].y, raio[i] * 2, raio[i] * 2);
    }
  };

  sketch.mousePressed = () => {
    cores.push(
      sketch.color(sketch.random(255), sketch.random(255), sketch.random(255))
    );

    posicoes.push(sketch.createVector(sketch.mouseX, sketch.mouseY));

    velocidades.push(
      sketch.createVector(sketch.random(1, 3), sketch.random(1, 3))
    );

    raio.push(sketch.random(10, 30));
  };
});