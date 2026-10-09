const cards = document.getElementById("cards");

fetch("")
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