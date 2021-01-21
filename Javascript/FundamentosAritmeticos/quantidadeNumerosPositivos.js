/*
Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, 
devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. 
Não esqueça da mensagem "valores positivos" ao final. 
*/

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let valor6 = parseFloat(gets());

let arrNum = [valor1, valor2, valor3, valor4, valor5, valor6];
let arrPositives = 0;
for(let i = 0; i < arrNum.length; i++){
  if(arrNum[i] > 0){
    arrPositives++;
  }
}

console.log(arrPositives + " valores positivos");
