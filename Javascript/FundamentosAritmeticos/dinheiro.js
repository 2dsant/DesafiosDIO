let valor = parseInt(gets());

let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0
let nota5 = 0;
let nota2 = 0 ;
let nota1 = 0;

let valorTotal = valor;
let valorAtual = 0;

while (valorTotal > valorAtual){
  
  if(valorTotal >= 100){
    nota100 = parseInt(valorTotal / 100);
    valorTotal -= nota100*100;
  }
  if(valorTotal >= 50){
    nota50 = parseInt(valorTotal / 50);
    valorTotal -= nota50*50;
  }
  if(valorTotal >= 20){
    nota20 = parseInt(valorTotal / 20);
    valorTotal -= nota20*20;
  }
  if(valorTotal >= 10){
    nota10 = parseInt(valorTotal / 10);
    valorTotal -=nota10*10;
  }
  if(valorTotal >= 5){
    nota5 = parseInt(valorTotal / 5);
    valorTotal -= nota5*5;
  }
  if(valorTotal >= 2){
    nota2 = parseInt(valorTotal / 2);
    valorTotal -=nota2*2;
  }
  if(valorTotal >= 1){
    nota1 = parseInt(valorTotal / 1);
    valorTotal -= nota1;
  }
}
console.log(valor);
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");