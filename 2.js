//insira o numero para analisar se ele pertence a sequência de Fibonacci.
let numero = parseInt(prompt("Digite um número: "));

let fibonacci = [0, 1]; // iniciando a sequência de Fibonacci
while (fibonacci[fibonacci.length - 1] < numero) { // gerando a sequência até o último número ser maior ou igual ao número informado
let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
fibonacci.push(proximo);
}

if (fibonacci.includes(numero)) {
console.log(`${numero} pertence à sequência de Fibonacci!`);
} else {
console.log(`${numero} não pertence à sequência de Fibonacci.`);
}