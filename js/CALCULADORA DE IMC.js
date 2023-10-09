function calcular() {
    var peso= Number(document.getElementById("peso").value);
    var altura= Number(document.getElementById("altura").value);

    var imc = peso/(altura*altura);
    var mensagem = document.getElementById("msg");

    document.getElementById("txt").innerHTML= " O IMC é: " + imc.toFixed(2);

    if (imc < 18.5) {
       mensagem.innerHTML = "Abaixo do peso!!";
    }

    else if (imc >= 18.5 && imc <= 24.9){
    mensagem.innerHTML = "Peso Ideal - Parabéns!!";
    }

    else if (imc > 24.9 && imc <= 29.9){
    mensagem.innerHTML = "Levemente acima do peso";
    }

    else if (imc >29.9 && imc <= 34.9){
    mensagem.innerHTML = "Obesidade grau I";
    }

    else if (imc >34.9 && imc <= 39.9){
    mensagem.innerHTML = "Obesidade grau II (severa)";
    }

    else {
    mensagem.innerHTML = "Obesidade III Morbida";
    }
}
