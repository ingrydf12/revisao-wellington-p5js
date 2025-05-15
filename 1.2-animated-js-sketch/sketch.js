/* Esse arquivo contém o tutorial proposto pelo professor, junto ao desafio no final 
Ambos presentes no link: https://wellingtonwfsarmento.notion.site/Arrays-e-Bolinhas-Animadas-com-p5-js-Um-Tutorial-1e5a08e68f4080db99a0e212c93b68eb
 * Cada bolinha possui uma posição e uma velocidade armazenadas em arrays.
*/

//MARK: - Estrutura básica de criação de sketch utilizando Javascript Vanilla
new p5((sketch) => {
  let posicoes = [];
  let velocidades = []; //Pra armazenar as diferentes velocidades, mas faz sentido?
  const quantBolas = 10;

  sketch.setup = () => {
    sketch.createCanvas(600, 400).parent("vetores");

    //Criando bolinha com a classe p5.Vector
    var ball = createVector(100, 100);
    

    for (let i = 0; i < quantBolas; i++) {
      //Iteração para criar as bolinhas
    }
  };
});
