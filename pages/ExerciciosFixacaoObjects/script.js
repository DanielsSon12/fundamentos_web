// QUESTÃO 1

const aluno = {
  nome: "Mariana",
  idade: 21,
  curso: "Sistemas de Informação",
};

console.log(aluno.nome);
console.log(aluno["idade"]);
console.log(aluno.curso);

aluno.idade = 22;

console.log(aluno);

// QUESTÃO 2

const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10,
};

produto.categoria = "Informática";
produto.estoque = 8;

delete produto.estoque;

produto.desconto = 10;

console.log(produto);

// QUESTÃO 3

const usuario = {
  nome: "Carlos",
  email: "carlos@email.com",
  idade: 30,
};

console.log("Possui email:", Object.hasOwn(usuario, "email"));
console.log("Possui telefone:", Object.hasOwn(usuario, "telefone"));
console.log("Possui idade:", "idade" in usuario);

// QUESTÃO 4

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  cor: "preto",
};

console.log(Object.keys(carro));
console.log(Object.values(carro));

Object.entries(carro).forEach(([propriedade, valor]) => {
  console.log(`${propriedade}: ${valor}`);
});

// QUESTÃO 5

const produtoTeclado = {
  nome: "Teclado",
  preco: 250,
  quantidade: 4,
};

function calcularTotal(objeto) {
  return objeto.preco * objeto.quantidade;
}

produtoTeclado.total = calcularTotal(produtoTeclado);

console.log("Total:", produtoTeclado.total);

// QUESTÃO 6

const funcionario = {
  nome: "Ana",
  cargo: "Desenvolvedora",
  endereco: {
    cidade: "Nova Friburgo",
    estado: "RJ",
    cep: "28600-000",
  },
};

console.log(funcionario.endereco.cidade);
console.log(funcionario.endereco.estado);
console.log(funcionario.endereco.cep);

funcionario.endereco.cidade = "Rio de Janeiro";

console.log(funcionario.endereco.cidade);
console.log(funcionario.endereco.telefone?.numero);

// QUESTÃO 7

const conta = {
  titular: "João",
  saldo: 1500,

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  },

  consultarSaldo() {
    console.log("Saldo atual:", this.saldo);
  },

  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor inválido.");
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
    } else {
      this.saldo -= valor;
    }
  },
};

conta.depositar(500);
conta.consultarSaldo();

conta.sacar(200);
conta.consultarSaldo();

conta.sacar(5000);

// QUESTÃO 8

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Daniel", nota: 7.0 },
];

const nomesAlunos = alunos.map((aluno) => aluno.nome);
console.log("Nomes:", nomesAlunos);

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
console.log("Notas maiores ou iguais a 7:", aprovados);

const maiorNota = alunos.reduce((maior, aluno) => {
  return aluno.nota > maior.nota ? aluno : maior;
});

console.log("Aluno com maior nota:", maiorNota);

const media =
  alunos.reduce((soma, aluno) => {
    return soma + aluno.nota;
  }, 0) / alunos.length;

console.log("Média da turma:", media);

const alunosOrdenados = [...alunos].sort((a, b) => b.nota - a.nota);
console.log("Alunos ordenados:", alunosOrdenados);

// QUESTÃO 9

const dadosPessoais = {
  nome: "Marina",
  idade: 28,
};

const dadosProfissionais = {
  cargo: "Analista",
  salario: 4500,
};

const pessoa = {
  ...dadosPessoais,
  ...dadosProfissionais,
};

pessoa.resumo = `${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.cargo}.`;

console.log(pessoa);

// QUESTÃO 10

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    categoria: "Informática",
    preco: 3500,
    estoque: 4,
  },
  { id: 2, nome: "Mouse", categoria: "Informática", preco: 120, estoque: 15 },
  { id: 3, nome: "Cadeira", categoria: "Móveis", preco: 900, estoque: 6 },
  { id: 4, nome: "Teclado", categoria: "Informática", preco: 250, estoque: 10 },
];

function listarNomes(lista) {
  return lista.map((produto) => produto.nome);
}

function calcularValorEstoque(produto) {
  return produto.preco * produto.estoque;
}

function listarValoresEstoque(lista) {
  return lista.map((produto) => ({
    nome: produto.nome,
    total: calcularValorEstoque(produto),
  }));
}

function calcularEstoqueTotal(lista) {
  return lista.reduce((total, produto) => {
    return total + calcularValorEstoque(produto);
  }, 0);
}

function encontrarMaisCaro(lista) {
  return lista.reduce((maisCaro, produto) => {
    return produto.preco > maisCaro.preco ? produto : maisCaro;
  });
}

function filtrarCategoria(lista, categoria) {
  return lista.filter((produto) => produto.categoria === categoria);
}

function encontrarPorId(lista, id) {
  return lista.find((produto) => produto.id === id);
}

function criarResumo(lista) {
  return {
    quantidadeProdutos: lista.length,
    valorTotalEstoque: calcularEstoqueTotal(lista),
  };
}

console.log("Nomes:", listarNomes(produtos));
console.log("Valor por produto:", listarValoresEstoque(produtos));
console.log("Valor total do estoque:", calcularEstoqueTotal(produtos));
console.log("Produto mais caro:", encontrarMaisCaro(produtos));
console.log(
  "Produtos de Informática:",
  filtrarCategoria(produtos, "Informática"),
);

const idInformado = 2;
console.log("Produto encontrado:", encontrarPorId(produtos, idInformado));

console.log("Resumo:", criarResumo(produtos));
console.log("Propriedades do primeiro produto:", Object.keys(produtos[0]));
