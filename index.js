/*1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
formula (0 °C × 9/5) + 32 = 32 °F

let tempCelsius = prompt('digite quantos graus celsius esta fazendo agora');
const tempFahrenheit = (tempCelsius * 9/5) + 32;
document.write(`${tempCelsius} garus celsius convertidos em Fahrenheit e : ${tempFahrenheit}`)

*/

/*2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
semana correspondente utilizando a estrutura condicional switch.

const diaSemana = parseInt(prompt('digite uma numero'));

switch(diaSemana){
    case(1):{
        document.write('hoje e domingo')
        break;
    }
    case(2):{
        document.write('hoje e segunda')
        break;
    }
    case(3):{
        document.write('hoje e terca')
        break;
    }
    case(4):{
        document.write('hoje e quarta')
        break;
    }
    case(5):{
        document.write('hoje e quinta')
        break;
    }
    case(6):{
        document.write('hoje e sexta')
        break;
    }
    case(7):{
        document.write('hoje e sabado')
        break;
    }
    default: {
        document.write('dia invalido');
    }
}
*/

/*3. Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero.

const numeroParImpar = prompt('digite seu numero')

    if(numeroParImpar > 0 ){
        document.write(`seu numero ${numeroParImpar} e positivo`)
    }else if(numeroParImpar < 0){
        document.write(`seu numero ${numeroParImpar} e negativo`)
    }else{
        document.write(`seu numero ${numeroParImpar} e 0`)
    }
*/

/*4. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.


let custoFabrica = Number(prompt('digite o valor do seu carro'))
const percentual = custoFabrica * 28 / 100;
console.log(percentual)
const imposto = custoFabrica * 45 / 100;
const vlTotal = (custoFabrica + percentual + imposto)
    document.write(`<p>o valor total e  ${vlTotal}</p> pois e a soma do custo ${custoFabrica} + ${percentual} + ${imposto}`)
*/

/*5. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;

c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.

const altura = Number(prompt('digite sua altura'))
const peso = Number(prompt('digite seu peso'))
const imc = peso / altura * 2;

if(imc < 18.5){
    document.write(`Você está abaixo da faixa de peso ideal - IMC: ${imc} `)
}else if(imc > 24.99){
    document.write(`Você está acima da faixa de peso ideal - IMC: ${imc} `)
}else{
    document.write(`Você está dentro da faixa de peso ideal - IMC: ${imc}`)
}
*/

/*6. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.

const num1 = Number(prompt("Digite o primeiro número: "))
const num2 = Number(prompt("Digite o segundo número: "))
const operacao = prompt("Digite a operação matemática (+, -, *, /): ")

    if(operacao == '+'){
        document.write(num1 + num2)
    }else if (operacao == '-'){
        document.write(num1 - num2)
    }else if(operacao == '*')
        document(num1 * num2)
    else if(operacao == '/'){
        document.write(num1 / num2)
    }   
    */         

/*
7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. 

O usuário precisa informar a quantidade de dinheiro que deseja
retirar, 
esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o
saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve
ser considerado e também contabilizado o valor da taxa a ser
cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
da taxa do saque não pode ser maior que o saldo disponível.


const saldo = 100;
const saque = Number(prompt('digite o valor a ser realizar o saque'))
let saldoAtual = 0;
let taxaSaque = 4.5

if(saque > 0 && (saque + taxaSaque) < saldo){
    if(saque % 5 != 0){
        document.write(`nao e multiplo de 5 seu valor reveja seu saque`)
    }else{
    saldoAtual = saldo - saque - taxaSaque
    document.write(`seu valor de saque de ${saque + taxaSaque} 
    efetuado com sucesso ${saldoAtual}`) }
}else(
    document.write(`voce nao tem o limite suficiente para o 
    saque de ${saque + taxaSaque} pois seu saldo e ${saldo}`))
*/



/*8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio
Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano

const idadeAtual = 12;
const pesoAtual = 25;

if(idadeAtual < 12){
    document.write(`infantil`)
}else if(idade >= 13 && idade <= 16 && pesoAtual < 40){
    document.write(`juvenil leve`)
}else if(idade >= 13 && idade <= 16 && pesoAtual > 40){
    document.write(`juvenil pesado`)
}else if(idade >= 17 && idade <= 24 && pesoAtual < 45){
    document.write(`senior leve`)
}else if(idade >= 17 && idade <= 24 && pesoAtual >45 && pesoAtual < 60){
    document.write(`senior medio`)
}else if(idade >= 17 && idade <= 24 && pesoAtual > 60){
    document.write(`senior pesado`)
}else{
    document.write(`veterano`)
}
*/


/*9. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da mult a, cobrando R$5 por cada
km acima da velocidade permitida.


const vlCarroPermitida = 94;
const vlMultakm = 5;

if(vlCarroPermitida > 80){
    document.write(`voce acaba de ser multado ${(vlCarroPermitida - 80) * vlMultakm}`)
}else(`velocidade ok = ${velocidade}`)
*/