/* Esse arquivo contém o tutorial proposto pelo professor, junto ao desafio no final 
Ambos presentes no link: https://wellingtonwfsarmento.notion.site/Arrays-e-Bolinhas-Animadas-com-p5-js-Um-Tutorial-1e5a08e68f4080db99a0e212c93b68eb
 * Cada bolinha possui uma posição e uma velocidade armazenadas em arrays.
*/

//MARK: - Estrutura básica de criação de sketch utilizando Javascript Vanilla
//Eu puxo o p5.js e crio uma função anônima sketch que recebe o objeto p5 como parâmetro.
new p5((sketch) => {
  let posicoes = [];
  let velocidades = [];
  let cores = [];
  const quantBolas = prompt("Quantas bolinhas você quer criar?", 10);
  let raio = [];
  const gravidade = sketch.createVector(0, 0.25)

  sketch.setup = () => {
    sketch.createCanvas(600, 400).parent("vetores");

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

    for (let i = 0; i < quantBolas; i++) {
      let pos = posicoes[i];
      let vel = velocidades[i];

      //Aqui adiciona o vetor de velocidade a posição, trazendo a animação da bolinha -> Dentro do loop é uma boa prática
      pos.add(vel);
      vel.add(gravidade);
      //O QUE FAZ AQUI? - Colisão com as bordas, basicamente -> Pega o x e verifica com a width, assim como y e height.
      if (
        posicoes[i].x - raio[i] < 0 ||
        posicoes[i].x + raio[i] > sketch.width
      ) {
        velocidades[i].x = velocidades[i].x * -1;
      }
      if (
        posicoes[i].y - raio[i] < 0 ||
        posicoes[i].y + raio[i] > sketch.height
      ) {
        velocidades[i].y = velocidades[i].y * -1;
      }

      //Colisão entre as bolinhas
      if (sketch.dist(posicoes[i], posicoes[i + 1]) < raio[i] + raio[i + 1]) {
        velocidades[i].x *= -1;
        velocidades[i].y *= -1;
      }

      sketch.fill(cores[i]);
      sketch.ellipse(posicoes[i].x, posicoes[i].y, raio[i] * 2, raio[i] * 2);
    }
  };
});
