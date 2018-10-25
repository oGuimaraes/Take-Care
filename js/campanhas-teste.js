// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var areaCampanha = document.getElementById("areaCampanhas");

db.collection("campanhas").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {

        var img = doc.data().imagem;
        var porcentagem = doc.data().porcentagem_arrecadada;
        var arrecadado = doc.data().valor_arrecadado;
        var total = doc.data().valor_total;
        var tituloc = doc.data().titulo;
        var desc = doc.data().descricao;
        var patrocinio_img = doc.data().imagem_patrocinio;
        var link_patrocino = doc.data().link_patrocinio;

        areaCampanha.innerHTML += "<div class='box-campanha'><img class='imagem' src='" + img + "'><div class='progresso'><div class='barra'><div class='concluido'>" + porcentagem + "</div></div><span class='arrecadado'>" + arrecadado + "</span><br><span>arrecadado de </span><span class='valor-total'>" + total + "</span></div><div class='informacoes'><div class='titulo'>" + tituloc + "</div><div class='descricao'>" + desc + "</div><div class='area-patrocinio'><span class='patrocinio'>patrocinado por</span><a href='" + link_patrocinio + "' class='clicavel'><img class='img-patrocinio' src='" + patrocinio_img + "'></a></div></div></div>";
        areaCampanha.innerHTML = "<p> hello world </p>";
    });
});