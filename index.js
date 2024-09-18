//Dia 18.09.2024 Aula 04
//Exercício de Interpretação de código 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //c. true

console.log("d. ", typeof resultado) //d. boolean

//Exercício de Interpretação de código 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) //falta de conversão para 'Number', pois está sendo considerado string

//Exercício de Interpretação de código 3
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) //problema corrigido

//Exercício de escrita de código 1
let suaIdade = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

const resultado = suaIdade - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeAmigo)
console.log("A diferença de idade é", resultado)

//Exercício de escrita de código 2
let numeroPar = Number(prompt("Insira um número par"))

console.log(numeroPar % 2)

//percebido que qualquer número par dividido por 2 obtém o 'resto' igual a 0 (zero)
//percebido que se o usuário digitar um número ímpar, o 'resto' resultará 1 (um) */

//Exercício de escrita de código 3
let idade = Number(prompt("Qual é a sua idade?"))

console.log("Idade em meses", idade *12)
console.log("Idade em dias", idade * 365)
console.log("Idade em horas", idade * 24 * 365)

//Exercício de escrita de código 4
let numeroUm = Number(prompt("Digite um número"))
let numeroDois = Number(prompt("Digite outro número"))

const restoUm = numeroUm % numeroDois === 0
const restoDois = numeroDois % numeroUm === 0

console.log("O primeiro número é maior que o segundo?", numeroUm > numeroDois)
console.log("O primeiro número é igual ao segundo?", numeroUm === numeroDois)
console.log("O primeiro número é divisível pelo segundo?", restoUm)
console.log("O segundo número é divisível pelo primeiro?", restoDois)