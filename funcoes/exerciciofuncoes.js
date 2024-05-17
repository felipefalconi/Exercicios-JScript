// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executado. Faça com que o menu repita a sua execução, disponibilize as opções para o usuário, até que seja digitado "sair"


function exercicioLogin() {
    let username = prompt("Digite o seu usuário: ");

    let senha = prompt("Digite sua senha: ");

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!");
    }
    else {
        console.log("Você não tem permissão de acesso!");
    }

}



function exercicioIMC() {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "));

    let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

    let imc = peso / (altura * altura);

    console.log("Seu IMC é: " + imc);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    }

    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
    }

    else if (imc >= 30.0 && imc <= 34.9) {
        console.log("Obesidade grau 1");
    }

    else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obesidade grau 2");
    }

    else {
        console.log("Obesidade grau 3");
    }
}

function exerciciodiasdasemana() {
    let number = prompt("Olá, escolha um dia de 1 a 7")
    if (number == 1) {
        console.log("Segunda-feira")
    }

    if (number == 2) {
        console.log("Terça-feira")
    }

    if (number == 3) {
        console.log("Quarta-feira")
    }

    if (number == 4) {
        console.log("Quinta-feira")
    }

    if (number == 5) {
        console.log("Sexta-feira")
    }

    if (number == 6) {
        console.log("Sábado")
    }

    if (number == 7) {
        console.log("Domingo")
    }
}

function exercicionotas() {
    let nota1 = parseInt(prompt("Digite sua primeira nota"))

    let nota2 = parseInt(prompt("Digite sua segunda nota"))

    let nota3 = parseInt(prompt("Digite sua terceira nota"))

    let nota4 = parseInt(prompt("Digite sua quarta nota"))

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7) {
        console.log("APROVADO")
    }

    if (media < 5) {
        console.log("REPROVADO")
    }

    else if (media < 7 && media >= 5) {
        console.log("RECUPERAÇÃO");
    }

}

function exercicioidade() {
    let idade = parseInt(prompt("Digite sua idade: "));

    while (idade < 18) {
        idade = parseInt(prompt("Você é menor de idade. Por favor, digite sua idade novamente: "))
    }

    console.log("Você é maior de idade. Sua idade é: " + idade);
}

function exerciciocontagem() {
    let numero = parseInt(prompt("Digite um número para a contagem regressiva: "));

    console.log("Contagem regressiva está começando em: " + numero)

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    console.log("Contagem regressiva finalizada!");
}

let opcao;

do {
    opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login\n2 - Exercicio IMC\n3 - Exercicio dias da semana\n4 - Exercicio notas\n5 - Exercicio idade\n6 - Exercicio contagem");

    switch (opcao) {
        case "1":
            exercicioLogin();
            break;

        case "2":
            exercicioIMC();
            break;

        case "3":
            exerciciodiasdasemana();
            break;

        case "4":
            exercicionotas();
            break;

        case "5":
            exercicioidade();
            break;

        case "6":
            exerciciocontagem();
            break;

            default:
                break;
    }
} while ("opcao != sair")
