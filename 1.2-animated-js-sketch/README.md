# Vetores e arrays em JS -> Transição de P5.js para Javascript

Os Arrays são estruturas essenciais em programação para armazenar e manipular conjuntos de dados. Pense em um array como uma caixinha que guarda vários valores relacionados. Por exemplo, poderíamos ter um array de cores favoritas: `let cores = ['azul', 'verde', 'vermelho'];`. Cada valor dentro de um array é chamado de elemento, e cada elemento tem um índice numérico que representa sua posição na lista. Importante lembrar: os arrays são indexados a partir de zero – ou seja, o primeiro elemento está no índice 0, o segundo no índice 1 e assim por diante.

## E vetores no p5?

No p5, nativamente, é disponibilizado uma classe **p5.Vector**. Mas o que é um vetor neste contexto? Podemos pensar em um vetor como uma flecha no espaço, que possui magnitude (tamanho/comprimento) e direção. Um vetor 2D tem dois componentes: x e y. Por exemplo, um vetor (3, 4) representa uma deslocamento de 3 unidades no eixo X e 4 unidades no eixo Y.

### Objetivo da atividade

Lidar com vetores e suas operações (push, pop, etc.) além de conceitos como detecção de colisão básica, gravidade, interatividade, iteração, configuração de ambiente, utilização de Javascript Vanilla.


### Notas
- Foi corrigido a parte das colisões com as bordas, usando constrain pra limitar os números das posições das bolinhas. 
- Foi feito a colisão entre bolinhas usando o cálculo de overlap e cópias dos vetores junto a função normalize do p5 para identificar melhor as posições e fazer uma colisão perfeita.
- A interação é feita por mouse e esta também adiciona mais bolinhas ao sketch.

### Referências do professor

1. **p5.js Reference**
    
    Documentação oficial com exemplos de todas as funções e classes do p5.js.
    
    https://p5js.org/reference/
    
2. **p5.js Tutorials**
    
    Série de tutoriais passo a passo, do básico à interatividade.
    
    https://p5js.org/learn/
    
3. **Learning Processing** (Daniel Shiffman)
    
    Introdução aos conceitos de programação visual com Processing (transição direta para p5.js).
    
    https://learningprocessing.com/
    
4. **The Nature of Code** (Daniel Shiffman)
    
    Exploração de vetores, forças e simulações físicas em p5.js, com código comentado e exercícios.
    
    http://natureofcode.com/
    
5. **The Coding Train** (Canal no YouTube)
    
    Vídeos dinâmicos sobre p5.js, simulações e projetos criativos, apresentados por Daniel Shiffman.
    
    https://www.youtube.com/c/TheCodingTrain