axios.get('js/database.json')
    .then(function (response) {
        console.log(response.data.results);

        var results = response.data.results;
        var imagem;
        var areaCampanha = document.getElementById("areaCampanha");
        var boxCampanha = document.querySelectorAll('.box-campanha');
        var createDiv;
        var createImg = document.createElement("img");

        function criarCampanha(i) {
            createDiv = document.createElement("div");
            /* pai.appendChild(filho) */
            areaCampanha.appendChild(createDiv);
            createDiv.setAttribute("class", "box-campanha");
            createDiv.setAttribute("id", "box-campanha");

            createImg = document.createElement("img");
            createDiv.appendChild(createImg);
            createImg.setAttribute("class", "imagem");
            createImg.setAttribute("src", response.data.results[i].imagem.normal);

            var boxCampanha = document.querySelectorAll('.box-campanha');
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
            createDiv.style.width = results[i].meta.porcentagem_arrecadada + "%";
            createDiv.innerHTML = results[i].meta.porcentagem_arrecadada + "%";

            arrecadado = document.querySelectorAll('.arrecadado');
            createDiv = document.createElement("span");
            progresso[i + 1].appendChild(createDiv);
            createDiv.setAttribute("class", "arrecadado");
            createDiv.innerHTML = "R$" + results[i].meta.valor_arrecadado;

            createDiv = document.createElement("br");
            progresso[i + 1].appendChild(createDiv);

            createDiv = document.createElement("span");
            progresso[i + 1].appendChild(createDiv);
            createDiv.innerHTML = "arrecadado de ";

            valorTotal = document.querySelectorAll('.valor-total');
            createDiv = document.createElement("span");
            progresso[i + 1].appendChild(createDiv);
            createDiv.setAttribute("class", "valor-total");
            createDiv.innerHTML = "R$" + results[i].meta.dinheiro;

            createDiv = document.createElement("div");
            boxCampanha[i + 1].appendChild(createDiv);
            createDiv.setAttribute("class", "informacoes");

            informacoes = document.querySelectorAll('.informacoes');
            createDiv = document.createElement("div");
            informacoes[i + 1].appendChild(createDiv);
            createDiv.setAttribute("class", "titulo");
            createDiv.innerHTML = results[i].info.nome_campanha;

            createDiv = document.createElement("div");
            informacoes[i + 1].appendChild(createDiv);
            createDiv.setAttribute("class", "descricao");
            createDiv.innerHTML = results[i].info.desc_pequena;

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
            createDiv.setAttribute("src", results[i].patrocinio.img);
        }

        var valorSearch = document.getElementById('search').value;

        if (valorSearch == "") {
            for (i = 0; i < results.length; i++) {
                criarCampanha(i);
            }
        }

        document.getElementById('search').addEventListener('change', function () {
            value = this.value;
            alert(value);

            for (i = 0; i < results.length; i++) {
                document.getElementById('box-campanha').remove()
                categoria = results[i].info.tipo;
                if (categoria == value) {
                    criarCampanha(i);
                }
            }
        });

    })
    .catch(function (error) {
        console.log(error);
    });
