var botaoAdicionar = document.querySelector("#adicionar-estados");
botaoAdicionar.addEventListener("click", function (event) {
    var formapi = document.querySelector("#form-adicionaapi");
    var requisicaoRetornada = obtemDadoDoformulario(formapi);
    event.preventDefault();

    adicionarDadonaApi(requisicaoRetornada);
    formapi.reset();
});

function obtemDadoDoformulario(formapi) {
    let dados = {
        estado: formapi.estado.value,
        cidade: formapi.cidade.value,
        hospital: formapi.hospital.value,
        suspeito: formapi.suspeito.value,
        confirmado: formapi.confirmado.value,
        curados: formapi.curados.value,
        obitos: formapi.obitos.value
    }
    return dados;
}


function montaLinha(requisicaoRetornada) {
    var formTr = document.createElement("tr");
    formTr.classList.add("api");
    formTr.appendChild(montarColuna(requisicaoRetornada.estado, "info-estado"));
    formTr.appendChild(montarColuna(requisicaoRetornada.cidade, "info-cidade"));
    formTr.appendChild(montarColuna(requisicaoRetornada.hospital, "info-hospital"));
    formTr.appendChild(montarColuna(requisicaoRetornada.suspeito, "info-suspeito"));
    formTr.appendChild(montarColuna(requisicaoRetornada.confirmado, "info-confirmado"));
    formTr.appendChild(montarColuna(requisicaoRetornada.curados, "info-curados"));
    formTr.appendChild(montarColuna(requisicaoRetornada.obitos, "info-obitos"));


    return formTr;
}

function montarColuna(dados, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dados;
    return td;
}

function adicionarDadoNaTabela(dados) {
    var formTr = montaLinha(dados);
    var tabela = document.querySelector("#tabela-formapi");
    tabela.appendChild(formTr);
    console.log('Teste dados', dados);
}


function adicionarDadonaApi(dados) {
    console.log('Meus Logs Dados', dados);

    const url = "http://localhost:8081/api/estados/";
    const dadosJson = JSON.stringify(dados);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(dadosJson);
    console.log('Meu Teste', dadosJson);


    xhr.onload = function () {

        const dados = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(dados);
        } else {
            console.error(dados);
        }
    }
}