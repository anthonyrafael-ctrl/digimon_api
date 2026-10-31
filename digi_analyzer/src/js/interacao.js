const cards = document.getElementById("cards");

fetch("https://digi-api.com/api/v1/digimon?page=0&pageSize=9")
    .then(resposta => resposta.json())
    .then(dados => {

        dados.content.forEach(digimon => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <img src="${digimon.image}" alt="${digimon.name}">
                <h2>${digimon.name}</h2>
                <p>ID: ${digimon.id}</p>
            `;

            cards.appendChild(card);
        });

    })
    .catch(erro => {
        console.log("Erro:", erro);
    });

document.getElementById('next-btn').addEventListener('click', function() {
    console.log('Botão Próximo clicado');
});

document.getElementById('prev-btn').addEventListener('click', function() {
    console.log('Botão Voltar clicado');
});

const formulario = document.getElementById("form-pesquisa");
const campoPesquisa = document.getElementById("busca-digimon");
const resultado = document.getElementById("resultado-pesquisa");

const API = "https://digi-api.com/api/v1/digimon/";

let pesquisaAtual = 0;

formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const pesquisa = campoPesquisa.value.trim().replace(/\s+/g, "").toLowerCase();

    if (pesquisa === "") {
        resultado.textContent = "Digite um nome ou ID.";
        return;
    }

    const identificador = ++pesquisaAtual;

    resultado.innerHTML = "<p>Carregando Digimon...</p>";

    try {

        const resposta = await fetch(
            API + encodeURIComponent(pesquisa)
        );

        if (!resposta.ok) {
            throw new Error("Digimon não encontrado.");
        }

        const dados = await resposta.json();

         if (identificador !== pesquisaAtual) {
            return;
        }

        mostrarDigimon(dados);

    } catch (erro) {

        if (identificador !== pesquisaAtual) {
            return;
        }

        resultado.innerHTML = "";

        const mensagem = document.createElement("p");

        mensagem.textContent =
            "Digimon não encontrado. Verifique o nome ou ID.";

        resultado.appendChild(mensagem);

        console.log("Erro:", erro);
    }

});

function mostrarDigimon(digimon) {

    resultado.innerHTML = "";

    const cartao = document.createElement("div");

    cartao.classList.add("card", "card-resultado");

    const nome = document.createElement("h2");
    nome.textContent = digimon.name;

    const id = document.createElement("p");
    id.textContent = "ID: " + digimon.id;

    cartao.appendChild(nome);
    cartao.appendChild(id);

    // Imagem
    if (digimon.images && digimon.images.length > 0) {

        const imagem = document.createElement("img");

        imagem.src = digimon.images[0].href;
        imagem.alt = digimon.name;

        cartao.appendChild(imagem);
    }

    resultado.appendChild(cartao);
}
