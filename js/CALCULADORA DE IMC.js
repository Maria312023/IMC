
document.getElementById("btnMulher").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "#fc64ff";
    document.getElementById("body").style.backgroundColor = "#ffe9ff";
    document.getElementById("footer").style.backgroundColor = "#fc64ff";
    document.getElementById("mulher").src = "img/mulher.jpg";

}, false);

document.getElementById("btnHomem").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "rgb(8, 143, 233)";
    document.getElementById("body").style.backgroundColor = "rgb(182, 215,238)";
    document.getElementById("footer").style.backgroundColor = "rgb(8, 143, 233)";
    document.getElementById("mulher").src = "img/homem.jpg";
}, false);

function calcular() {
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    var imc = peso / (altura * altura);
    var mensagem = document.getElementById("msg");

    document.getElementById("txt").innerHTML = " Seu IMC é: " + imc.toFixed(2);

    if (imc < 18.5) {
        mensagem.innerHTML = "Poxa...Você está abaixo do peso!!";
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        mensagem.innerHTML = "Parabéns!!! Seu peso está ideal ";
    }

    else if (imc > 24.9 && imc <= 29.9) {
        mensagem.innerHTML = "Vixee...Você está levemente acima do peso";
    }

    else if (imc > 29.9 && imc <= 34.9) {
        mensagem.innerHTML = "Obesidade grau I";
    }

    else if (imc > 34.9 && imc <= 39.9) {
        mensagem.innerHTML = "Obesidade grau II (severa)";
    }

    else {
        mensagem.innerHTML = "Obesidade III Morbida";
    }
}
