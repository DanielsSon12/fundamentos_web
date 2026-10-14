//Exercício 1
const valor = 17.684;

console.log(Math.round(valor));
console.log(Math.floor(valor));
console.log(Math.ceil(valor));


//Exercício 2
const preco = 149.98765;

console.log(Number(preco.toFixed(2)));


//Exercício 3
const valor1 = "25";
const valor2 = "17.5";

const numero1 = Number(valor1);
const numero2 = Number(valor2);

console.log("Soma:", numero1 + numero2);
console.log("Diferença:", numero1 - numero2);
console.log("Produto:", numero1 * numero2);
console.log("Quociente:", numero1 / numero2);


//Exercício 4
const valorNumerico = "123.45";

if (Number.isNaN(Number(valorNumerico))) {
    console.log("Valor inválido");
} else {
    console.log("Valor numérico válido");
}


//Exercício 5
const numero = 42.0;

if (Number.isInteger(numero)) {
    console.log("O número é inteiro.");
} else {
    console.log("O número não é inteiro.");
}


//Exercício 6
const numeros = [17, 4, 89, 32, 12, 56];

console.log("Maior:", Math.max(...numeros));
console.log("Menor:", Math.min(...numeros));


//Exercício 7
function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(gerarNumero());


//Exercício 8
const nota1 = 7.5;
const nota2 = 8.25;
const nota3 = 9.0;

const media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(2));


//Exercício 9
console.log("Maior inteiro seguro:", Number.MAX_SAFE_INTEGER);
console.log("Menor inteiro seguro:", Number.MIN_SAFE_INTEGER);
console.log("Maior valor finito:", Number.MAX_VALUE);


//Exercício 10
function analisarNumero(valor) {
    return {
        numero: typeof valor === "number" && !Number.isNaN(valor),
        inteiro: Number.isInteger(valor),
        finito: Number.isFinite(valor),
        seguro: Number.isSafeInteger(valor)
    };
}

console.log(analisarNumero(42));
console.log(analisarNumero(42.5));
console.log(analisarNumero("42"));
console.log(analisarNumero(Infinity));
console.log(analisarNumero(NaN));