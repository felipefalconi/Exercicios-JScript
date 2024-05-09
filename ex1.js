// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.


//solicita o nome do usario
let username = prompt ("Digite seu nome de usuario:");


//solicite a senha do usuario
let senha = prompt ("Digite sua senha");


// Verifique se o nome de usuário é "admin" e a senha é "senha123"
// CASO SIM -> Exibe a mensagem de login bem sucedida.
// CASO NAO -> Exiba a mensagem de usuário ou senha incorreta.
if(username == "admin" && senha == "senha123") {
 console.log ("Login bem sucedido")
} 
else {
    console.log ("Username incorreto")
}