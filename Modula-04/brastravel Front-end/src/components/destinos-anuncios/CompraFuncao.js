export function Check() {
    let volta = document.getElementById("voltaCheck");

    if (volta.checked) {
        document.getElementById("volta").style.display = "flex";
    } else {
        document.getElementById("volta").style.display = "none";

    }
}


export function VerificandoValor() {
    var dataVolta = document.getElementById("TdVolta");

    for (let i = 0; i < dataVolta.lenght; i++) {

        if (dataVolta === "01/01/0001 00:00:00") {
            document.getElementById("TdVolta").innerHTML = "Viagem so de ida";

        } else {
            document.getElementById("TdVolta").innerHTML = dataVolta.innerHTML;
        }
    }
}


export function Desconto() {
    let valor = document.getElementById("Valor").value;

    let cupom = document.getElementById("Cupom").value;
    let descontoAplicado = false;
    valor = valor.replace(/,/g, "").replace(/\./g, "");

    let valorNovo = parseInt(valor);

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

    if (descontoAplicado === true) {

        var resultado = " " + valorNovo;

        if (resultado.length > 4) {
            resultado = resultado.substring(1, 2) + "." + resultado.substring(2, resultado.length);
            resultado += ",00"
        } else if (resultado.length <= 4) {

            resultado += ",00"
        }

        document.getElementById("Valor").value = resultado;
        document.getElementById("AspCp").innerHTML = "Cupom Aplicado - Aproveite bem sua Viagem";


    }
}