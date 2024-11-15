function consultaEndereco(){
    let cep = document.querySelector('#cep').value;

    if(cep.length !== 8){
        Toastify({
            text: "CEP inválido",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#101010",
              color:"#fff",
              display: "flex",
              alignItems:"center",
              width: "25%",
              justifyContent: "space-between",
              boxShadow: "none",
            },
            onClick: function(){} // Callback after click
          }).showToast();

          return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco)
    })
}

function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado');

    if(dados.erro){
        resultado.innerHTML = `<p class="erro">CEP não encontrado. Tente novamente</p>`
    } else{
    
    resultado.innerHTML = 
    `
        <p>Endereço: ${dados.logradouro}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade} - ${dados.uf}</p>
        <p>Complemento: ${dados.complemento} </p>
    `
    }

}