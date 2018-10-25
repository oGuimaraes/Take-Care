// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var areaCampanha = document.getElementById('area-campanha');

db.collection("campanhas").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

        /* var img = doc.data().imagem;
        var porcentagem = doc.data().porcentagem_arrecadada;
        var arrecadado = doc.data().valor_arrecadado;
        var total = doc.data().valor_total;
        var tituloc = doc.data().titulo;
        var desc = doc.data().descricao;
        var patrocinio_img = doc.data().imagem_patrocinio;
        var link_patrocinio = doc.data().link_patrocinio; */

        // Remove all campanhas

        // Add campanhas
        criarCardCampanha(areaCampanha, doc);
    });
});

function removerCampanhasListadas(areaCampanha) {
    while (areaCampanha.firstChild) {
        areaCampanha.removeChild(areaCampanha.firstChild);
    }
}

function criarCardCampanha(areaCampanha, doc) {

    var divCampanha = document.createElement("div");
    divCampanha.setAttribute("class", "box-campanha");
    divCampanha.setAttribute("id", "box-campanha");

    var createImg = document.createElement("img");
    divCampanha.appendChild(createImg);
    createImg.setAttribute("class", "imagem");
    createImg.setAttribute("src", doc.data().imagem);

    divProgresso = document.createElement("div");
    divProgresso.setAttribute("class", "progresso");
    divCampanha.appendChild(divProgresso);
    
    divBarra = document.createElement("div");   
    divBarra.setAttribute("class", "barra");
    divProgresso.appendChild(divBarra);

    divConcluido = document.createElement('div');
    divConcluido.setAttribute("class", "concluido");
    divConcluido.style.width = doc.data().porcentagem_arrecadada + "%";
    divConcluido.innerHTML = doc.data().porcentagem_arrecadada + "%";
    divBarra.appendChild(divConcluido);

    spanArrecadado = document.createElement("span");
    spanArrecadado.setAttribute("class", "arrecadado");
    divProgresso.appendChild(spanArrecadado);
    spanArrecadado.innerHTML = "R$" + doc.data().valor_arrecadado;

    divProgresso.appendChild(document.createElement("br"));

    spanArrecadadoDe = document.createElement("span");
    spanArrecadadoDe.innerHTML = "arrecadado de ";
    divProgresso.appendChild(spanArrecadadoDe);

    spanValor = document.createElement("span");
    spanValor.setAttribute("class", "valor-total");
    spanValor.innerHTML = "R$" + doc.data().valor_total;
    divProgresso.appendChild(spanValor);

    divInfo = document.createElement("div");
    divInfo.setAttribute("class", "informacoes");
    divCampanha.appendChild(divInfo);

    divTitulo = document.createElement("div");
    divTitulo.setAttribute("class", "titulo");
    divTitulo.innerHTML = doc.data().titulo;
    divInfo.appendChild(divTitulo);

    divDescricao = document.createElement("div");
    divDescricao.setAttribute("class", "descricao");
    divDescricao.innerHTML = doc.data().descricao;
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
    imgPatrocinio.setAttribute("src", doc.data().imagem_patrocinio);
    divClicavel.appendChild(imgPatrocinio);

    // Adiciona elemento ao DOM
    areaCampanha.appendChild(divCampanha);
}