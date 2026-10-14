// Exercício 1
const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");
const resultado1 = document.getElementById("resultado1");

btn1.addEventListener("click", function () {
    const nome = input1.value;
    resultado1.textContent = nome.trim().toLowerCase();
});


// Exercício 2
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");
const resultado2 = document.getElementById("resultado2");

btn2.addEventListener("click", function () {
    const email = input2.value;

    if (email.endsWith("@exemplo.com")) {
        resultado2.textContent = "E-mail válido";
    } else {
        resultado2.textContent = "E-mail inválido";
    }
});


// Exercício 3
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");
const resultado3 = document.getElementById("resultado3");

btn3.addEventListener("click", function () {
    const frase = input3.value;

    resultado3.textContent = "Total: " + frase.length +
        " | Sem espaços: " + frase.replaceAll(" ", "").length;
});


// Exercício 4
const input4 = document.getElementById("input4");
const btn4 = document.getElementById("btn4");
const resultado4 = document.getElementById("resultado4");

btn4.addEventListener("click", function () {
    const mensagem = input4.value;

    if (mensagem.includes("JavaScript")) {
        resultado4.textContent = "A mensagem contém JavaScript.";
    } else {
        resultado4.textContent = "A mensagem não contém JavaScript.";
    }
});


// Exercício 5
const input5 = document.getElementById("input5");
const btn5 = document.getElementById("btn5");
const resultado5 = document.getElementById("resultado5");

btn5.addEventListener("click", function () {
    const email = input5.value;
    const posicao = email.indexOf("@");

    resultado5.textContent = email.slice(0, posicao);
});


// Exercício 6
const input6 = document.getElementById("input6");
const btn6 = document.getElementById("btn6");
const resultado6 = document.getElementById("resultado6");

btn6.addEventListener("click", function () {
    const mensagem = input6.value;

    resultado6.textContent = mensagem.replaceAll("João", "Maria");
});


// Exercício 7
const input7 = document.getElementById("input7");
const btn7 = document.getElementById("btn7");
const resultado7 = document.getElementById("resultado7");

btn7.addEventListener("click", function () {
    const codigo = input7.value.toUpperCase();

    resultado7.textContent = codigo.slice(0, 3) + "-" + codigo.slice(3);
});


// Exercício 8
const input8 = document.getElementById("input8");
const btn8 = document.getElementById("btn8");
const resultado8 = document.getElementById("resultado8");

function inverterString(palavra) {
    return palavra.split("").reverse().join("");
}

btn8.addEventListener("click", function () {
    resultado8.textContent = inverterString(input8.value);
});


// Exercício 9
const input9 = document.getElementById("input9");
const btn9 = document.getElementById("btn9");
const resultado9 = document.getElementById("resultado9");

function validarSenha(senha) {
    return senha.length >= 8 &&
        senha !== senha.toLowerCase() &&
        senha !== senha.toUpperCase() &&
        senha.split("").some(caractere => !isNaN(Number(caractere)) && caractere !== " ");
}

btn9.addEventListener("click", function () {
    resultado9.textContent = validarSenha(input9.value);
});


// Exercício 10
const input10 = document.getElementById("input10");
const btn10 = document.getElementById("btn10");
const resultado10 = document.getElementById("resultado10");

function formatarNome(nome) {
    return nome.trim().toLowerCase().split(/\s+/).map(palavra => {
        return palavra.slice(0, 1).toUpperCase() + palavra.slice(1);
    }).join(" ");
}

btn10.addEventListener("click", function () {
    resultado10.textContent = formatarNome(input10.value);
});