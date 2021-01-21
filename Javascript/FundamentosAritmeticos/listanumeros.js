let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let valor6 = parseFloat(gets());

let arrNum = [valor1, valor2, valor3, valor4, valor5];
let positiveNumbers = 0;
let negativeNumbers = 0;
let oddNumbers = 0;
let evenNumbers = 0;

for(let i = 0; i < arrNum.length; i++){
  if (arrNum[i] > 0){
    positiveNumbers++;
  }
  if (arrNum[i] < 0){
    negativeNumbers++;
  }
  if (arrNum[i] % 2 == 0){
    evenNumbers++;
  }
  if (arrNum[i] % 2 != 0){
    negativeNumbers++;
  }
}
console.log(evenNumbers + " valor(es) par(es)");
console.log(oddNumbers + " valor(es) impar(es)");
console.log(positiveNumbers + " valor(es) positivo(s)");
console.log(negativeNumbers + " valor(es) negativo(s)");