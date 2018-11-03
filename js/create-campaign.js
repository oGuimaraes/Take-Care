var formCadastro = document.getElementById('form-cadastro');

formCadastro.addEventListener("submit", function(event){
    event.preventDefault();

    formularioPreenchido = event.target;

    tipoCampanha = document.getElementById('tipo-campanha').value;
    nomeCampanha = document.getElementById('nome-campanha').value;
    descricaoCampanha = document.getElementById('descricao-campanha').value;
    linkImagem = document.getElementById('link-imagem').value;
    imagemPatrocinio = document.getElementById('img-patrocinio').value;
    linkPatrocinio = document.getElementById('link-patrocinio').value;
    linkPatrocinio.innerHTML = '#';
    valorTotal  = document.getElementById('total-arrecadar').value;
    valorArrecadado = document.getElementById('valor-arrecadado').value;
    porcentagemArrecadada = document.getElementById('porcentagem-arrecadada').value;

    console.log(firebase.database().ref('campanhas').push);
    console.log(linkImagem.files);
    db.collection('campanhas').doc('' + (new Date()).getTime()).set({

        descricao: descricaoCampanha,
        imagem: linkImagem,
        imagem_patrocinio: imagemPatrocinio,
        link_patrocinio: linkPatrocinio,
        porcentagem_arrecadada: porcentagemArrecadada,
        tipo: tipoCampanha,
        titulo: nomeCampanha,
        valor_arrecadado: valorArrecadado,
        valor_total: valorTotal
        
    })

});

document.getElementById('link-imagem').addEventListener("change", function (e){
    console.log(e.files);
})
