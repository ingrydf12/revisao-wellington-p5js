/* A estrutura de pilhas segue o princípio LIFO (Last In First Out), ou seja, o último elemento adicionado é o primeiro a ser removido.
   * As pilhas são uma estrutura de dados linear, onde os elementos são armazenados em uma sequência.
   * As pilhas são úteis para armazenar dados temporários, como chamadas de função, variáveis locais e outros dados que precisam ser acessados rapidamente.
   * As pilhas são implementadas usando arrays ou listas encadeadas.
   * As pilhas são usadas em algoritmos de busca, como busca em profundidade, e em algoritmos de ordenação, como quicksort.
   * As pilhas são usadas em linguagens de programação para armazenar variáveis locais e chamadas de função.
*/

//Nesse exemplo, eu pensei em criar uma pilha de frutas
let stack = [];

//Adicionando os elementos a pilha, sendo o último adicionado, será o primeiro a ser removido
stack.push("banana");
stack.push("maçã");
stack.push("laranja");

console.log("A pilha após as adições: ", stack); // ["banana", "maçã", "laranja"]

stack.pop(); // remove o último elemento adicionado
console.log("A pilha após a remoção: ", stack); // ["banana", "maçã"]