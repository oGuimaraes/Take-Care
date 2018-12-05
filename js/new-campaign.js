// Transforma as imagens em DataURL
function DataURL(imagem, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function (event) { callback(reader.result, event) });
    reader.readAsDataURL(imagem);
}


// Vars
var banner;
var logoPat;

document.getElementById('bannerInput').addEventListener('change', function (e) {
    DataURL(this.files[0], function (data) { banner = data });
});

document.getElementById('logoPatrocinadorInput').addEventListener('change', function (e) {
    DataURL(this.files[0], function (data) { logoPat = data })
});

// Cria a campanha em sí
function criarCampanha() {
    if (!$('#form-cadastro')[0].checkValidity()) {
        msg("Preencha o formulário corretamente.");
        return;
    }

    // Pega os valores das campanhas
    let tipoCampanha = $("#tipo-campanha").val();
    let nomeCampanha = $("#nameInput").val();
    let descricaoPequena = $("#descPeqInput").val();
    let descricaoCompleta = $("#descCompletaInput").val();
    let linkPatrocinio = $("#basic-url").val();
    let valorTotal = $("#metaArrecadacao").val();
    let valorArrecadado = $("#arrecadado").val();

    // Calculo da porcentagem
    let aux;
    aux = (valorArrecadado * 100) / valorTotal;

    let porcentagemArrecadada = aux;

    // ======================

    let endereco = $("#endereco-ong").val();


    // Cria o objeto campanha com todas as informações
    let campanha = {

        descricao_pequena: descricaoPequena,
        descricao_completa: descricaoCompleta,
        imagem: banner,
        imagem_patrocinio: logoPat,
        link_patrocinio: linkPatrocinio,
        porcentagem_arrecadada: porcentagemArrecadada,
        tipo: tipoCampanha,
        titulo: nomeCampanha,
        valor_arrecadado: valorArrecadado,
        valor_total: valorTotal,
        endereco_ong: endereco
    };

    // Envia os dados para o firebase
    db.collection('campanhas').add(campanha);
}
function msg(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}
