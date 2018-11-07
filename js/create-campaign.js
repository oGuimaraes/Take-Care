var formCadastro = document.getElementById('form-cadastro');
var imagemBase64 = null;
var patrocinioImagemBase64 = null;

function converteImagemParaBase64(imagem, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function(event) { callback(reader.result, event) });
    reader.readAsDataURL(imagem);
}

document.getElementById('link-imagem').addEventListener('change', function(e) {
    converteImagemParaBase64(this.files[0], function(data) { imagemBase64 = data });
});

document.getElementById('img-patrocinio').addEventListener('change', function(e) {
    converteImagemParaBase64(this.files[0], function(data) { patrocinioImagemBase64 = data })
});

formCadastro.addEventListener("submit", function(event){
    event.preventDefault();

    formularioPreenchido = event.target;

    tipoCampanha = document.getElementById('tipo-campanha').value;
    nomeCampanha = document.getElementById('nome-campanha').value;
    descricaoCampanha = document.getElementById('descricao-campanha').value;
    linkPatrocinio = document.getElementById('link-patrocinio').value;
    linkPatrocinio.innerHTML = '#';
    valorTotal  = document.getElementById('total-arrecadar').value;
    valorArrecadado = document.getElementById('valor-arrecadado').value;
    porcentagemArrecadada = document.getElementById('porcentagem-arrecadada').value;

    var corpoRequest = {

        descricao: descricaoCampanha,
        imagem: imagemBase64,
        imagem_patrocinio: patrocinioImagemBase64,
        link_patrocinio: linkPatrocinio,
        porcentagem_arrecadada: porcentagemArrecadada,
        tipo: tipoCampanha,
        titulo: nomeCampanha,
        valor_arrecadado: valorArrecadado,
        valor_total: valorTotal
        
    };

    console.log(corpoRequest);
    db.collection('campanhas').doc('' + (new Date()).getTime()).set(corpoRequest);

});

document.getElementById('link-imagem').addEventListener("change", function (e){
    console.log(e.files);
})
