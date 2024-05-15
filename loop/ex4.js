// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("Digite um número para ver a sua tabuada:"));

if (!isNaN(numero)){
  console.log("Tabuada do",numero + ":");
  for (let cont = 1; cont <= 10; cont++) {
    console.log(numero + " x " + cont + " = " + (numero * i));
  }
}else{
  console.log("Número inválido. Por")
}