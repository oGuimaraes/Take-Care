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
    var areaCampanha = document.getElementById("area-campanha");

    for (var i = 0; i < campanhas.length; i++) {
        var campanha = campanhas[i];
        indice = i;
    var areaCampanha = document.getElementById("area-campanha");
        criarCardCampanha(areaCampanha, campanha);
    }
}

function removerCampanhasListadas() {
    var areaCampanha = document.getElementById('area-campanha');

    while (areaCampanha.firstChild) {
        areaCampanha.removeChild(areaCampanha.firstChild);
    }
}

function criarCardCampanha(areaCampanha, campanha) {
    //var boxCampanha = document.querySelectorAll('.box-campanha');
    //var boxCampanha = document.createElement ('div')
    //querySelectorAll('.box-campanha');

    var divCampanha = document.createElement("div");
    divCampanha.setAttribute("class", "box-campanha");
    divCampanha.setAttribute("id", "box-campanha");

    var createImg = document.createElement("img");
    divCampanha.appendChild(createImg);
    createImg.setAttribute("class", "imagem");
    createImg.setAttribute("src", campanha.imagem.normal);

    divProgresso = document.createElement("div");
    divProgresso.setAttribute("class", "progresso");
    divCampanha.appendChild(divProgresso);
    
    divBarra = document.createElement("div");   
    divBarra.setAttribute("class", "barra");
    divProgresso.appendChild(divBarra);

    divConcluido = document.createElement('div');
    divConcluido.setAttribute("class", "concluido");
    divConcluido.style.width = campanha.meta.porcentagem_arrecadada + "%";
    divConcluido.innerHTML = campanha.meta.porcentagem_arrecadada + "%";
    divBarra.appendChild(divConcluido);

    spanArrecadado = document.createElement("span");
    spanArrecadado.setAttribute("class", "arrecadado");
    divProgresso.appendChild(spanArrecadado);
    spanArrecadado.innerHTML = "R$" + campanha.meta.valor_arrecadado;

    divProgresso.appendChild(document.createElement("br"));

    spanArrecadadoDe = document.createElement("span");
    spanArrecadadoDe.innerHTML = "arrecadado de ";
    divProgresso.appendChild(spanArrecadadoDe);

    spanValor = document.createElement("span");
    spanValor.setAttribute("class", "valor-total");
    spanValor.innerHTML = "R$" + campanha.meta.dinheiro;
    divProgresso.appendChild(spanValor);

    divInfo = document.createElement("div");
    divInfo.setAttribute("class", "informacoes");
    divCampanha.appendChild(divInfo);

    divTitulo = document.createElement("div");
    divTitulo.setAttribute("class", "titulo");
    divTitulo.innerHTML = campanha.info.nome_campanha;
    divInfo.appendChild(divTitulo);

    divDescricao = document.createElement("div");
    divDescricao.setAttribute("class", "descricao");
    divDescricao.innerHTML = campanha.info.desc_pequena;
    divInfo.appendChild(divDescricao);

    divAreaPatrocinio = document.createElement("div");
    divAreaPatrocinio.setAttribute("class", "area-patrocinio");
    divInfo.appendChild(divAreaPatrocinio);

    divPatrocinio = document.createElement("div");
    divPatrocinio.setAttribute("class", "patrocinio");
    divPatrocinio.innerHTML = "patrocinado por";
    divAreaPatrocinio.appendChild(divPatrocinio);

    divClicavel = document.createElement("a");
    divClicavel.setAttribute("class", "clicavel");
    divAreaPatrocinio.appendChild(divClicavel);

    imgPatrocinio = document.createElement("img");
    imgPatrocinio.setAttribute("class", "img-patrocinio");
    imgPatrocinio.setAttribute("src", campanha.patrocinio.img);
    divClicavel.appendChild(imgPatrocinio);

    // Adiciona elemento ao DOM
    areaCampanha.appendChild(divCampanha);
}

function filtrarCampanhasPorTipo(campanhas, tipo) {
    var campanhasFiltradas = [];

    for (var i = 0; i < campanhas.length; i++) {
        var campanha = campanhas[i];
        
        if (tipo === campanhas[i].info.tipo) {
            campanhasFiltradas.push(campanha);
        }

        if (tipo === "todos") {
            campanhasFiltradas.push(campanha);
        }
    }
    return campanhasFiltradas;
}

boxCampanha 
function abrirModal(){

}