function goToEvento(id){
    window.location.pathname = "/evento.html";    
    let eventId = id
}

function carregaEvento(body){
    fetch(`http://localhost:8080/eventos/${eventId}`
    ).then(resposta => {return resposta.json()}
    ).then(body => { 
        carregaEvento(body)
    })

    let eventoCard = document.getElementById('cardEvento');
    let dados = body;
    let texto = `
        <div>
        <img src="img/painel3 1.png" alt="" />

        <div class="card-bottom">
        <div class="card-header d-flex">
            <p style="font-size: 1.5rem; font-weight: 600">${body.nome}</p>
            <span style="font-size: 1rem"> ${body.data} - ${body.local} </span>
        </div>
        <div style="text-align: center">
            <p style="font-weight: 600">Descrição</p>
            <br />
            <span>
                ${body.desc}
            </span>
        </div>
        </div>
        </div>
    `;
    eventoCard.innerHTML = texto;
}



let counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    updateDisplay(--counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label-normal").innerHTML = val;
    document.getElementById("counter-label-meia").innerHTML = val;
    document.getElementById("counter-label-parceiro").innerHTML = val;
    
}
  function total(){

         let num1 = document.getElementById("preco").value;
         let num2 = document.getElementById("counter-label-normal").value;
         let mult = num1*num2;
          document.setElementById("total").innerHTML =mult;    
  }