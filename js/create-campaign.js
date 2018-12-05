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
    console.log("Submit")
    formularioPreenchido = event.target;

    tipoCampanha = document.getElementById('tipo-campanha').value;
    nomeCampanha = document.getElementById('nome-campanha').value;
    descricaoPequena = document.getElementById('descricao-pequena').value;
    descricaoCompleta = document.getElementById('descricao-completa').value;
    linkPatrocinio = document.getElementById('link-patrocinio').value;
    linkPatrocinio.innerHTML = '#';
    valorTotal  = document.getElementById('total-arrecadar').value;
    valorArrecadado = document.getElementById('valor-arrecadado').value;
    porcentagemArrecadada = document.getElementById('porcentagem-arrecadada').value;

    /* (Falta Testar)

    criadorCampanha = document.getElementById("criador-campanha");
    enderecoONG = DOCUMENT.getElementById("endereco-ong");

    */

    var corpoRequest = {

        descricao_pequena: descricaoPequena,
        descricao_completa: descricaoCompleta,
        imagem: imagemBase64,
        imagem_patrocinio: patrocinioImagemBase64,
        link_patrocinio: linkPatrocinio,
        porcentagem_arrecadada: porcentagemArrecadada,
        tipo: tipoCampanha,
        titulo: nomeCampanha,
        valor_arrecadado: valorArrecadado,
        valor_total: valorTotal,

        /* Falta testar
        criador_campanha: criadorCampanha,
        endereco_ong: enderecoONG
        */
        
    };

    console.log(corpoRequest);
    db.collection('campanhas').add(corpoRequest);

});

document.getElementById('link-imagem').addEventListener("change", function (e){
    console.log(e.files);
})
