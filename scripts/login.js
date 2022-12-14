
function login(){

    let dados = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value,
        email: "",
        telefone: ""
    }

    fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(dados)
    }
    ).then(resposta=>{return resposta.json()}
    ).then(body=>{console.log(body)
        if(body.id != 0)
            window.location.pathname = "/perfil.html";
        //alert(''+body.id+'\n'+body.usuario+'\n'+body.senha+'\n'+body.email+'\n'+body.telefone)
    })
    //alert('Usuario ou senha incorretos!')
}