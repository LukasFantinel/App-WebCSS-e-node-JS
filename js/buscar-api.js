

var botaoAdicionar = document.querySelector("#buscar-api");
botaoAdicionar.addEventListener("click", () => {
    console.log("Buscar da API!");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/api/estados/");

    xhr.addEventListener("load", () => {
        console.log("Load executado!");

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");

            var resposta = xhr.response;
            var dados = JSON.parse(resposta);
            console.log(dados);
            dados.forEach(dados => {
                adicionarDadoNaTabela(dados);
            });
        } else {
            console.log("Deu ruim!");
            erroAjax.classList.remove("invisivel");
        }
    });

    console.log(xhr);
    console.log("Executar Send!");
    xhr.send();


});

