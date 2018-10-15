axios.get('js/database.json')
    .then(function(response) {
        console.log(response.data.results);

        var results = response.data.results;
        var imagem;
        var areaCampanha = document.getElementById("areaCampanha");
        var boxCampanha;
        var createDiv;
        var createImg = document.createElement("img");

        for (i = 0; i < results.length; i++){
            console.log(response.data.results[i].imagem.normal);

            createDiv = document.createElement("div");
             /* pai.appendChild(filho) */
            areaCampanha.appendChild(createDiv);
            createDiv.setAttribute("class", "box-campanha");

            createImg = document.createElement("img");
            createDiv.appendChild(createImg);
            createImg.setAttribute("class", "imagem");
            createImg.setAttribute("src", response.data.results[i].imagem.normal);

            boxCampanha = document.querySelectorAll('.box-campanha');
            createDiv = document.createElement("div");
            boxCampanha[i+1].appendChild(createDiv);
            createDiv.setAttribute("class", "progresso");

            progresso = document.querySelectorAll('.progresso');
            createDiv = document.createElement("div");
            progresso[i+1].appendChild(createDiv);
            createDiv.setAttribute("class", "barra");

            barra = document.querySelectorAll('.barra');
            createDiv = document.createElement("div");
            barra[i+1].appendChild(createDiv);
            createDiv.setAttribute("class", "concluido");
            createDiv.style.width = results[i].meta.porcentagem_arrecadada + "%";
            createDiv.innerHTML = results[i].meta.porcentagem_arrecadada + "%";

            arrecadado = document.querySelectorAll('.arrecadado');
            createDiv = document.createElement("span");
            progresso[i+1].appendChild(createDiv);  
            createDiv.setAttribute("class", "arrecadado");
            createDiv.innerHTML = "R$" + results[i].meta.valor_arrecadado;
            
            createDiv = document.createElement("br");
            progresso[i+1].appendChild(createDiv);

            createDiv = document.createElement("span");
            progresso[i+1].appendChild(createDiv);
            createDiv.innerHTML = "arrecadado de ";
            
            valorTotal = document.querySelectorAll('.valor-total');
            createDiv = document.createElement("span");
            progresso[i+1].appendChild(createDiv);
            createDiv.setAttribute("class", "valor-total");
            createDiv.innerHTML = "R$" + results[i].meta.dinheiro;




        }





    })
    .catch(function (error) {
        console.log(error);
    });
