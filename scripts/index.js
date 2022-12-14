fetch('http://localhost:8080/eventos'
    ).then(resposta => {return resposta.json()}
    ).then(body => { 
        mostraEventos1(body)
        mostraEventos2(body)
    })

function mostraEventos1(body){
    let divCardsEventos = document.getElementById('cardsEventos1');
    let texto = '';

    let dados = body;
    for(i = 0; i < 3; i++){
        let evento = dados[i];

        texto = texto + `
        <div class="card">
            <img class="image" src="img/_gunsnroses.jpg" />
            <h2>${evento.nome}</h2>
            <p>${evento.data}</p>
            <p>Local: ${evento.local}</p>
            <button class="btn-ingressoindex" onclick="goToEvento(${evento.id})">Ingresso</button>
        </div>
        `;
        }
divCardsEventos.innerHTML = texto;
}

function mostraEventos2(body){
    let divCardsEventos = document.getElementById('cardsEventos2');
    let texto = '';

    let dados = body;
    for(i = 3; i < 6; i++){
        let evento = dados[i];

        texto = texto + `
        <div class="card">
            <img class="image" src="img/_gunsnroses.jpg" />
            <h2>${evento.nome}</h2>
            <p>${evento.data}</p>
            <p>Local: ${evento.local}</p>
            <button class="btn-ingressoindex" onclick="goToEvento(${evento.id})">Ingresso</button>
        </div>
        `;
        }
divCardsEventos.innerHTML = texto;
}

