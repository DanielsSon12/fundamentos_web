// QUESTÃO 1

const frutas = ["maçã", "banana", "laranja"];

frutas.push("uva");
frutas.unshift("abacaxi");
frutas.pop();
frutas.shift();

console.log(frutas);

// QUESTÃO 2
 
const numeros = [10, 20, 30, 40, 50, 60];

const parteNumeros = numeros.slice(2, 5);

console.log(parteNumeros);
console.log(numeros);

// QUESTÃO 3

const cores = ["azul", "verde", "amarelo", "vermelho"];

cores.splice(1, 2, "roxo", "laranja");
cores.splice(1, 0, "preto");

console.log(cores);

// QUESTÃO 4

const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Python", "Java"];

const tecnologias = frontEnd.concat(backEnd);

console.log(tecnologias);

// QUESTÃO 5

const palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];

const frase = palavras.join(" ");

console.log(frase);

// QUESTÃO 6

const linguagens = ["JavaScript", "Python", "Java", "C#"];

function temLinguagem(nome) {
  return linguagens.includes(nome);
}

console.log(temLinguagem("Python"));
console.log(temLinguagem("Ruby"));

function temLinguagemIgnorandoMaiusculas(nome) {
  return linguagens.some(
    (linguagem) => linguagem.toLowerCase() === nome.toLowerCase(),
  );
}

console.log(temLinguagemIgnorandoMaiusculas("python"));
console.log(temLinguagemIgnorandoMaiusculas("RUBY"));

// QUESTÃO 7

const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniel"];

console.log(nomes.indexOf("Ana"));
console.log(nomes.lastIndexOf("Ana"));
console.log(nomes.indexOf("Marcos"));

// QUESTÃO 8

const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos.forEach((produto, indice) => {
  console.log(`${indice} - ${produto}`);
});

// QUESTÃO 9

const precos = [100, 250, 80, 320, 150];

const precosComDesconto = precos.map((preco) => preco * 0.9);

console.log(precosComDesconto);
console.log(precos);

// QUESTÃO 10

const numerosPares = [3, 8, 11, 14, 21, 26, 30, 35];

const pares = numerosPares.filter((numero) => numero % 2 === 0);

console.log(pares);

// QUESTÃO 11

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Daniel", nota: 7.5 },
];

const alunoEncontrado = alunos.find((aluno) => aluno.nota >= 9);

console.log(alunoEncontrado);

// QUESTÃO 12

const produtosId = [
  { id: 101, nome: "Notebook" },
  { id: 205, nome: "Mouse" },
  { id: 310, nome: "Teclado" },
  { id: 450, nome: "Monitor" },
];

function buscarIndice(id) {
  return produtosId.findIndex((produto) => produto.id === id);
}

console.log(buscarIndice(205));
console.log(buscarIndice(999));

// QUESTÃO 13

const notas = [5.5, 6.0, 7.2, 8.0, 9.5];

console.log(notas.some((nota) => nota >= 9));
console.log(notas.some((nota) => nota < 6));

// QUESTÃO 14

const idades = [22, 31, 19, 27, 40];
const idades2 = [22, 17, 19, 27, 40];

console.log(idades.every((idade) => idade >= 18));
console.log(idades2.every((idade) => idade >= 18));

// QUESTÃO 15

const precosCompra = [29.9, 49.9, 15.5, 100.0];

const totalCompra = precosCompra.reduce((total, preco) => {
  return total + preco;
}, 0);

console.log("Total da compra:", totalCompra.toFixed(2));

function calcularTotalCompra(produtos) {
  return produtos.reduce((total, produto) => {
    return total + produto.preco;
  }, 0);
}

const itensCompra = [
  { nome: "Mouse", preco: 120 },
  { nome: "Teclado", preco: 250 },
  { nome: "Monitor", preco: 900 },
];

console.log(calcularTotalCompra(itensCompra));

// QUESTÃO 16

const numerosOrdenacao = [100, 8, 25, 3, 45, 12];

const crescente = [...numerosOrdenacao].sort((a, b) => a - b);
const decrescente = [...numerosOrdenacao].sort((a, b) => b - a);

console.log(crescente);
console.log(decrescente);

// QUESTÃO 17

const fila = ["Ana", "Bruno", "Carlos", "Daniel"];

const filaInvertida = fila.slice().reverse();

console.log(filaInvertida);
console.log(fila);

// QUESTÃO 18

const categorias = [
  ["HTML", "CSS"],
  ["JavaScript", "TypeScript"],
  ["Node.js", "Express"],
];

const todasTecnologias = categorias.flat();

console.log(todasTecnologias);

const tecnologiasAninhadas = [
  ["HTML", ["CSS"]],
  ["JavaScript", ["TypeScript", ["React"]]],
];

console.log(tecnologiasAninhadas.flat(3));

// QUESTÃO 19

const turmas = [
  { nome: "Turma A", alunos: ["Ana", "Bruno"] },
  { nome: "Turma B", alunos: ["Carlos", "Daniel", "Eva"] },
];

const todosAlunos = turmas.flatMap((turma) => turma.alunos);

console.log(todosAlunos);

const alunosComTurma = turmas.flatMap((turma) =>
  turma.alunos.map((nome) => ({
    nome: nome,
    turma: turma.nome,
  })),
);

console.log(alunosComTurma);

// QUESTÃO 20

const vendas = [
  { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
  { produto: "Mouse", categoria: "Informática", valor: 120, quantidade: 5 },
  { produto: "Cadeira", categoria: "Móveis", valor: 900, quantidade: 3 },
  { produto: "Teclado", categoria: "Informática", valor: 250, quantidade: 4 },
  { produto: "Mesa", categoria: "Móveis", valor: 1200, quantidade: 1 },
];

const vendasInformatica = vendas
  .filter((venda) => venda.categoria === "Informática")
  .map((venda) => ({
    ...venda,
    total: venda.valor * venda.quantidade,
  }));

console.log("Vendas de Informática:", vendasInformatica);

const faturamentoTotal = vendasInformatica.reduce((total, venda) => {
  return total + venda.total;
}, 0);

console.log("Faturamento total:", faturamentoTotal);

const maiorFaturamento = vendasInformatica.reduce((maior, venda) => {
  return venda.total > maior.total ? venda : maior;
});

console.log("Maior faturamento individual:", maiorFaturamento);

const nomesProdutos = vendasInformatica.map((venda) => venda.produto);

console.log("Nomes dos produtos:", nomesProdutos);

const vendasOrdenadas = [...vendasInformatica].sort(
  (a, b) => b.total - a.total,
);

console.log("Vendas ordenadas:", vendasOrdenadas);
