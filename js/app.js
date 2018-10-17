var todasCampanhas = [];
var indice;

document.getElementById('search').addEventListener('change', function () {

    var tipoSelecionado = this.value;
    var campanhasFiltradas = filtrarCampanhasPorTipo(todasCampanhas, tipoSelecionado);
    listarCampanhas(campanhasFiltradas);
});

axios
    .get('db/campanhas.json')
    .catch(function (erroRequisicao) {
        manipularErroRequisicao(erroRequisicao);
    })
    .then(function (respostaRequisicao) {
        manipularSucessoRequisicao(respostaRequisicao);
    });

function manipularErroRequisicao(erro) {
    console.log(erro);
}

function manipularSucessoRequisicao(resposta) {

    todasCampanhas = resposta.data.results;
    listarCampanhas(todasCampanhas);
}

function listarCampanhas(campanhas) {
    removerCampanhasListadas();

    for (var i = 0; i < campanhas.length; i++) {
        var campanha = campanhas[i];
        indice = i;
        criarCardCampanha(campanha);
    }
}

function removerCampanhasListadas() {
    var areaCampanha = document.getElementById('area-campanha');

    while (areaCampanha.firstChild) {
        areaCampanha.removeChild(areaCampanha.firstChild);
    }
}

function criarCardCampanha(campanha) {

    var areaCampanha = document.getElementById("area-campanha");
    var boxCampanha = document.querySelectorAll('.box-campanha');
    var createDiv;
    var createImg = document.createElement("img");

    createDiv = document.createElement("div");
    /* pai.appendChild(filho) */
    areaCampanha.appendChild(createDiv);
    createDiv.setAttribute("class", "box-campanha");
    createDiv.setAttribute("id", "box-campanha");

    createImg = document.createElement("img");
    createDiv.appendChild(createImg);
    createImg.setAttribute("class", "imagem");
    createImg.setAttribute("src", campanha.imagem.normal);

    boxCampanha = document.querySelectorAll('.box-campanha');
    createDiv = document.createElement("div");
    boxCampanha[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "progresso");

    progresso = document.querySelectorAll('.progresso');
    createDiv = document.createElement("div");
    progresso[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "barra");

    barra = document.querySelectorAll('.barra');
    createDiv = document.createElement("div");
    barra[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "concluido");
    createDiv.style.width = campanha.meta.porcentagem_arrecadada + "%";
    createDiv.innerHTML = campanha.meta.porcentagem_arrecadada + "%";

    arrecadado = document.querySelectorAll('.arrecadado');
    createDiv = document.createElement("span");
    progresso[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "arrecadado");
    createDiv.innerHTML = "R$" + campanha.meta.valor_arrecadado;

    createDiv = document.createElement("br");
    progresso[indice].appendChild(createDiv);

    createDiv = document.createElement("span");
    progresso[indice].appendChild(createDiv);
    createDiv.innerHTML = "arrecadado de ";

    valorTotal = document.querySelectorAll('.valor-total');
    createDiv = document.createElement("span");
    progresso[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "valor-total");
    createDiv.innerHTML = "R$" + campanha.meta.dinheiro;

    createDiv = document.createElement("div");
    boxCampanha[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "informacoes");

    informacoes = document.querySelectorAll('.informacoes');
    createDiv = document.createElement("div");
    informacoes[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "titulo");
    createDiv.innerHTML = campanha.info.nome_campanha;

    createDiv = document.createElement("div");
    informacoes[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "descricao");
    createDiv.innerHTML = campanha.info.desc_pequena;

    createDiv = document.createElement("div");
    informacoes[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "area-patrocinio");
    areaPatrocinio = document.querySelectorAll('.area-patrocinio');

    createDiv = document.createElement("div");
    areaPatrocinio[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "patrocinio");
    createDiv.innerHTML = "patrocinado por";

    createDiv = document.createElement("a");
    createDiv.setAttribute("class", "clicavel");
    areaPatrocinio[indice].appendChild(createDiv);

    createDiv = document.createElement("img");
    clicavel = document.querySelectorAll('.clicavel');
    clicavel[indice].appendChild(createDiv);
    createDiv.setAttribute("class", "img-patrocinio");
    createDiv.setAttribute("src", campanha.patrocinio.img);
}

function filtrarCampanhasPorTipo(campanhas, tipo) {
    var campanhasFiltradas = [];

    for (var i = 0; i < campanhas.length; i++) {
        
        if (tipo === campanhas[i].info.tipo) {
            campanhasFiltradas.push(campanhas[i]);
        }

        if (tipo === "todos") {
            campanhasFiltradas.push(campanhas[i]);
        }
    }
    return campanhasFiltradas;
}