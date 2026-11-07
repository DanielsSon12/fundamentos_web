let paises = [];
let paisesFiltrados = [];

const url = "https://countries.dev/countries?fields=full";

async function carregarPaises() {
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro ao buscar países: " + resposta.status);
    }

    const dados = await resposta.json();

    if (!Array.isArray(dados)) {
      throw new Error("A API não retornou uma lista de países.");
    }

    paises = dados.map((pais) => ({
      name: {
        common:
          typeof pais.name === "string"
            ? pais.name
            : pais.name?.common || pais.nativeName || pais.alpha3Code,
      },
      capital: Array.isArray(pais.capital)
        ? pais.capital
        : pais.capital
          ? [pais.capital]
          : [],
      population: pais.population || 0,
      area: pais.area || 0,
      region: pais.region || "",
      subregion: pais.subregion || "Não informado",
      flags: {
        png:
          pais.flags?.png ||
          pais.flags?.svg ||
          (pais.flag?.startsWith("http") ? pais.flag : ""),
      },
      flag: pais.flag,
      currencies: pais.currencies || [],
      languages: pais.languages || [],
      borders: pais.borders || [],
    }));

    paisesFiltrados = [...paises];

    exibirPaises(paisesFiltrados);
    calcularEstatisticas();
  } catch (erro) {
    console.log(erro);

    document.getElementById("listaPaises").innerHTML =
      "Erro ao carregar países.";
  }
}

function exibirPaises(lista) {
  const container = document.getElementById("listaPaises");

  container.innerHTML = "";

  lista.forEach((pais) => {
    container.innerHTML += `
            <div class="pais" onclick="detalhesPais('${encodeURIComponent(pais.name.common)}')">
                ${
                  pais.flags.png
                    ? `<img src="${pais.flags.png}" alt="Bandeira">`
                    : `<h2>${pais.flag || ""}</h2>`
                }
                <h3>${pais.name.common}</h3>
                <p>Capital: ${pais.capital[0] || "Não possui"}</p>
                <p>População: ${pais.population.toLocaleString("pt-BR")}</p>
            </div>
        `;
  });
}

function aplicarFiltros() {
  const busca = document.getElementById("campoBusca").value.toLowerCase();
  const regiao = document.getElementById("filtroRegiao").value;

  paisesFiltrados = paises.filter((pais) => {
    return (
      pais.name.common.toLowerCase().includes(busca) &&
      (regiao === "" || pais.region === regiao)
    );
  });

  exibirPaises(paisesFiltrados);
}

document.getElementById("campoBusca").addEventListener("input", aplicarFiltros);
document
  .getElementById("filtroRegiao")
  .addEventListener("change", aplicarFiltros);

function ordenarPorNome() {
  paisesFiltrados.sort((a, b) => a.name.common.localeCompare(b.name.common));

  exibirPaises(paisesFiltrados);
}

function ordenarPorPopulacao() {
  paisesFiltrados.sort((a, b) => b.population - a.population);

  exibirPaises(paisesFiltrados);
}

function ordenarPorArea() {
  paisesFiltrados.sort((a, b) => b.area - a.area);

  exibirPaises(paisesFiltrados);
}

function calcularEstatisticas() {
  const totalPopulacao = paises.reduce(
    (total, pais) => total + pais.population,
    0,
  );

  const totalArea = paises.reduce((total, pais) => total + pais.area, 0);

  const mediaPopulacao = totalPopulacao / paises.length;
  const mediaArea = totalArea / paises.length;

  document.getElementById("estatisticas").innerHTML = `
        <h2>Estatísticas dos Países</h2>
        <p>População total: ${totalPopulacao.toLocaleString("pt-BR")}</p>
        <p>Área total: ${totalArea.toLocaleString("pt-BR")} km²</p>
        <p>Média de população: ${mediaPopulacao.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}</p>
        <p>Média de área: ${mediaArea.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} km²</p>
    `;
}

function detalhesPais(nome) {
    nome = decodeURIComponent(nome);

    const pais = paises.find(pais => pais.name.common === nome);

    if (pais) {
        const moedas = Array.isArray(pais.currencies)
            ? pais.currencies.map(moeda => moeda.name).join(", ")
            : Object.values(pais.currencies || {}).map(moeda => moeda.name).join(", ");

        const idiomas = Array.isArray(pais.languages)
            ? pais.languages.map(idioma => idioma.name).join(", ")
            : Object.values(pais.languages || {}).join(", ");

        const detalhes = document.getElementById("detalhesPais");

        detalhes.style.display = "block";

        detalhes.innerHTML = `
            <h2>Detalhes de ${pais.name.common}</h2>

            <img src="${pais.flags.png}" alt="Bandeira de ${pais.name.common}">

            <p><strong>Moedas:</strong> ${moedas || "Não informado"}</p>

            <p><strong>Idiomas:</strong> ${idiomas || "Não informado"}</p>

            <p><strong>Sub-região:</strong> ${pais.subregion || "Não informado"}</p>

            <p><strong>Fronteiras:</strong> ${pais.borders.length > 0 ? pais.borders.join(", ") : "Nenhuma"}</p>

            <button onclick="fecharDetalhes()">Fechar</button>
        `;

        detalhes.scrollIntoView({ behavior: "smooth" });
    }
}

function fecharDetalhes() {
    document.getElementById("detalhesPais").style.display = "none";
}

carregarPaises();
