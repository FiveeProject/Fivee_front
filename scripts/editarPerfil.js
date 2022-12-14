let distancia = 0
let interesse = ""
let gostoMusical = ""
let tiposEventos = ""
let idUsuario = 1;

function setDistancia(dist){
    distancia = dist;
}
function setInteresse(inte){
    interesse = inte;
}
function setGostoMusical(gost){
    gostoMusical = gost;
}
function setTiposEventos(tEve){
    tiposEventos = tEve;
}

function salvarPerfil(){
    let dados = {
        cpf: document.getElementById('inputCpf').value,
        nome: document.getElementById('inputNome').value,
        cidade: document.getElementById('inputCidade').value,
        distanciaRec: distancia,
        interesses: interesse,
        gostoMusical: gostoMusical,
        tiposEventos: tiposEventos,
        usuario: {
            id: idUsuario
        }
    }

    fetch('http://localhost:8080/perfil',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(dados)
    }
    ).then(resposta=>{return resposta.json()}
    ).then(body=>{console.log(body)
        window.location.pathname = "/perfi.html";
    })
}