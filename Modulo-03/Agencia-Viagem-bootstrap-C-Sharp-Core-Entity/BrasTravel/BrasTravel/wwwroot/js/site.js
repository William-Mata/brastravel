let valor;

function Contato() {
    let msg = document.getElementById("msg");


    for (let i = 0; i < msg.lenght; i++) {
        msg.innerText = " ";
    }


    alert("Entraremos em contato em breve.")
}

function Check() {
    let volta = document.getElementById("voltaCheck");


    if (volta.checked) {
        document.getElementById("volta").style.display = "block";
    } else {
        document.getElementById("volta").style.display = "none";
    }
}

function VerificandoValor() {

    var dataVolta = document.getElementById("TdVolta");


    for (let i = 0; i < dataVolta.lenght; i++) {

        if (dataVolta === "01/01/0001 00:00:00") {
            document.getElementById("TdVolta").innerHTML = "Viagem so de ida";

        } else {
            document.getElementById("TdVolta").innerHTML = dataVolta.innerHTML;
        }
    }

}


function Descricao(id) {
    let valorViagem = document.getElementById(id).children;

    let preco = valorViagem[1].innerHTML.split(' ');

    valor = preco[1];



    document.getElementById("Destino").value = valorViagem[0].innerHTML;

    document.getElementById("Valor").value = valorViagem[1].innerHTML;

}


function Desconto() {
    let cupom = document.getElementById("Cupom").value;
    let descontoAplicado = false;
    valor = valor.replace(/,/g, "").replace(/\./g, "");

    let valorNovo = parseInt(valor);


    console.log(valorNovo);

    if ((cupom.toUpperCase() === "NATAL30") && (valorNovo >= 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.30);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "NATAL45") && (valorNovo < 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.45);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "NOVO40") && (valorNovo >= 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.40);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "NOVO50") && (valorNovo < 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.50);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "FERIAS25") && (valorNovo >= 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.25);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "FERIAS35") && (valorNovo < 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.35);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "CARNAVAL35") && (valorNovo >= 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.35);
        descontoAplicado = true;

    } else if ((cupom.toUpperCase() === "CARNAVAL60") && (valorNovo < 3000)) {
        valorNovo = valorNovo - (valorNovo * 0.60);
        descontoAplicado = true;

    } else {
        document.getElementById("AspCp").innerHTML = "Cupom Inválido - Verifique Seu Cupom";

    }

    console.log(valorNovo);
    console.log(cupom);


    if (descontoAplicado == true) {

        var resultado = " " + valorNovo;

        if (resultado.length > 4) {
            resultado = resultado.substr(1, 1) + "." + resultado.substr(2, resultado.length);

        }

        console.log(resultado);

        document.getElementById("Valor").value = "R$: " + resultado;
        document.getElementById("AspCp").innerHTML = "Cupom Aplicado - Aproveite bem sua Viagem";


    }
}

$(function () {

    var ModalShow = $('#ModalAqui');

    $('button[data-bs-toggle="modalAjax"]').click(function (event) {

        var url = $(this).data('url');
        var decodeUrl = decodeURIComponent(url);

        $.get(decodeUrl).done(function (data) {
            ModalShow.html(data);
            ModalShow.find('.modal').modal('show');
        })

    })


    ModalShow.on('click', '[data-save="modal"]', function (event) {
        event.preventDefault();

        var form = $(this).parents('.modal').find('form');
        var actionUrl = form.attrt('action');
        var sendData = form.serialize();
        $.post(actionUrl, sendData).done(function (data) {
            ModalShow.find('.modal').modalViagem('hide');

        })
    })



})

