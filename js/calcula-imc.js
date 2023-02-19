//Troca de Título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    //Validação valores reais
    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if (!pesoValido) {
        tdImc.textContent = "Peso inválido!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    };

    if (!alturaValido) {
        tdImc.textContent = "Altura inválida!";
        alturaValido = false;
        paciente.classList.add("paciente-invalido");
    };

    if (pesoValido && alturaValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    };
};

function validaPeso(peso) {
    if (peso >= 0 && peso <= 400) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}