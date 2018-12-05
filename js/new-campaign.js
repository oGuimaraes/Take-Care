var userNow = firebase.auth().currentUser;
var userEmail = userNow.email;

// Transforma as imagens em DataURL
function DataURL(imagem, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function (event) { callback(reader.result, event) });
    reader.readAsDataURL(imagem);
}


// Vars
var banner;
var logoPat;
var bannera;
var logoPata;

document.getElementById('bannerInput').addEventListener('change', function (e) {
    DataURL(this.files[0], function (data) { banner = data });
});

document.getElementById('logoPatrocinadorInput').addEventListener('change', function (e) {
    DataURL(this.files[0], function (data) { logoPat = data })
});

document.getElementById('bannerInputa').addEventListener('change', function (e) {
    DataURL(this.files[0], function (data) { bannera = data });
});

document.getElementById('logoPatrocinadorInputa').addEventListener('change', function (e) {
    DataURL(this.files[0], function (data) { logoPata = data })
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
        endereco_ong: endereco,
        criador: userEmail
    };

    // Envia os dados para o firebase
    db.collection('campanhas').add(campanha).then(function (docRef) {
        console.log("Documento escrito com a ID: ", docRef.id);
        $("#criarcampanha").modal('toggle');
        $("#form-cadastro")[0].reset();
    });
}

function btnAlterarCampanha() {
    if (!$('#form-cadastro')[0].checkValidity()) {
        msg("Preencha o formulário corretamente.");
        return;
    }

    // Pega os valores das campanhas
    let tipoCampanhaa = $("#tipo-campanhaa").val();
    let nomeCampanhaa = $("#nameInputa").val();
    let descricaoPequenaa = $("#descPeqInputa").val();
    let descricaoCompletaa = $("#descCompletaInputa").val();
    let linkPatrocinioa = $("#basic-urla").val();
    let valorTotala = $("#metaArrecadacaoa").val();
    let valorArrecadadoa = $("#arrecadadoa").val();

    // Calculo da porcentagem
    let aux;
    aux = (valorArrecadadoa * 100) / valorTotala;

    let porcentagemArrecadadaa = aux;

    // ======================

    let enderecoa = $("#endereco-onga").val();

    let campanhaa = {

        descricao_pequenaa: descricaoPequenaa,
        descricao_completaa: descricaoCompletaa,
        imagem: bannera,
        imagem_patrocinio: logoPata,
        link_patrocinio: linkPatrocinioa,
        porcentagem_arrecadada: porcentagemArrecadadaa,
        tipo: tipoCampanhaa,
        titulo: nomeCampanhaa,
        valor_arrecadado: valorArrecadadoa,
        valor_total: valorTotala,
        endereco_ong: enderecoa
        criador: userEmail
    };

    db.collection("cities").doc("LA").set(campanhaa).then(function () {
        console.log("Document successfully written!");
        $('#alterarCamp').modal('toggle');
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            msg("Erro ao tentar escrever o documento! Tente novamente.");
        });
}

function msg(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}
