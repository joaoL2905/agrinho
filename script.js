document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("btnCalcular");

    botao.addEventListener("click", calcularEconomia);

});

function calcularEconomia() {

    const agua = parseFloat(document.getElementById("agua").value);
    const economia = parseFloat(document.getElementById("economia").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(agua) || isNaN(economia)) {
        resultado.innerHTML = "⚠️ Preencha os dois campos.";
        return;
    }

    if (agua <= 0) {
        resultado.innerHTML = "⚠️ Digite uma quantidade de água maior que zero.";
        return;
    }

    if (economia <= 0 || economia >= 100) {
        resultado.innerHTML = "⚠️ Digite uma porcentagem entre 1% e 99%.";
        return;
    }

    const aguaEconomizada = agua * economia / 100;
    const novoConsumo = agua - aguaEconomizada;
    const economiaMensal = aguaEconomizada * 30;

    resultado.innerHTML = `
        <strong>💧 Resultado da simulação</strong><br><br>

        Consumo atual:
        ${agua.toFixed(0)} litros por dia.<br>

        Água economizada:
        ${aguaEconomizada.toFixed(0)} litros por dia.<br>

        Novo consumo:
        ${novoConsumo.toFixed(0)} litros por dia.<br><br>

        🌱 Em 30 dias, a economia estimada será de
        <strong>${economiaMensal.toFixed(0)} litros de água.</strong>
    `;
}
