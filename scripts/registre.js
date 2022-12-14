let idUser = 0

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  
  async function register() {
    const usuario = document.getElementById("usuario");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const senha = document.getElementById("senha");
    const senha2 = document.getElementById("senha2");

    if (
      !usuario.value ||
      !email.value ||
      !telefone.value ||
      !senha.value ||
      !senha2.value
    ) {
      alert("Todos os campos devem ser preenchidos");
      return;
    } else if (senha.value !== senha2.value) {
      alert("As senhas devem ser iguais!");
      return;
    }

    const data = {
      usuario: usuario.value,
      senha: senha.value,
      email: email.value,
      telefone: telefone.value,
    };

    fetch('http://localhost:8080/register',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(data)
    }
    ).then(resposta=>{return resposta.json()}
    ).then(body=>{console.log(body)
        if(body.id != 0)
            window.location.pathname = "/editarPerfil.html";
            idUser = body.id 
        //alert(''+body.id+'\n'+body.usuario+'\n'+body.senha+'\n'+body.email+'\n'+body.telefone)
    })
  }