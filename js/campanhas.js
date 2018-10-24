// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var areaCampanha = document.getElementById("areaCampanha");
var boxCampanha = document.querySelectorAll('.box-campanha');
var createDiv;
var createImg = document.createElement("img");

db.collection("campanhas").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

        var img = doc.data().imagem;
        var porcentagem = doc.data().porcentagem_arrecadada;
        var arrecadado = doc.data().valor_arrecadado;
        var total = doc.data().valor_total;
        var tituloc = doc.data().titulo;
        var desc = doc.data().descricao;
        var patrocinio = doc.data().imagem_patrocinio;

    createDiv = document.createElement("div");
    areaCampanha.appendChild(createDiv);
    createDiv.setAttribute("class", "box-campanha");
    createDiv.setAttribute("id", "box-campanha");

    createImg = document.createElement("img");
    createDiv.appendChild(createImg);
    createImg.setAttribute("class", "imagem");
    createImg.setAttribute("src", img);

    boxCampanha = document.querySelectorAll('.box-campanha');
    createDiv = document.createElement("div");
    console.log(boxCampanha[i+1]);
    boxCampanha[i+1].appendChild(createDiv);
    createDiv.setAttribute("class", "progresso");

    progresso = document.querySelectorAll('.progresso');
    createDiv = document.createElement("div");
    progresso[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "barra");

    barra = document.querySelectorAll('.barra');
    createDiv = document.createElement("div");
    barra[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "concluido");
    createDiv.style.width = porcentagem + "%";
    createDiv.innerHTML = porcentagem + "%";

    arrecadado = document.querySelectorAll('.arrecadado');
    createDiv = document.createElement("span");
    progresso[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "arrecadado");
    createDiv.innerHTML = arrecadado;

    createDiv = document.createElement("br");
    progresso[i + 1].appendChild(createDiv);

    createDiv = document.createElement("span");
    progresso[i + 1].appendChild(createDiv);
    createDiv.innerHTML = "arrecadado de ";

    valorTotal = document.querySelectorAll('.valor-total');
    createDiv = document.createElement("span");
    progresso[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "valor-total");
    createDiv.innerHTML = total;

    createDiv = document.createElement("div");
    boxCampanha[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "informacoes");

    informacoes = document.querySelectorAll('.informacoes');
    createDiv = document.createElement("div");
    informacoes[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "titulo");
    createDiv.innerHTML = tituloc;

    createDiv = document.createElement("div");
    informacoes[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "descricao");
    createDiv.innerHTML = desc;

    createDiv = document.createElement("div");
    informacoes[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "area-patrocinio");
    areaPatrocinio = document.querySelectorAll('.area-patrocinio');

    createDiv = document.createElement("div");
    areaPatrocinio[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "patrocinio");
    createDiv.innerHTML = "patrocinado por";

    createDiv = document.createElement("a");
    createDiv.setAttribute("class", "clicavel");
    areaPatrocinio[i + 1].appendChild(createDiv);

    createDiv = document.createElement("img");
    clicavel = document.querySelectorAll('.clicavel');
    clicavel[i + 1].appendChild(createDiv);
    createDiv.setAttribute("class", "img-patrocinio");
    createDiv.setAttribute("src", patrocinio);

    console.log();
    });
});