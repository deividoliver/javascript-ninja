/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function (win, doc) {
    'use strict';


    var $valores = doc.querySelector('[data-js="valores"]');

    var $numeros = doc.querySelectorAll('[data-js="btn"]');

    var $botaoCE = doc.querySelectorAll('[data-js="btn-ce"]');

    var $botaoIgual = doc.querySelectorAll('[data-js="btn-igual"]');

    var $botaoSomar = doc.querySelectorAll('[data-js="btn-somar"]');

    var $botaoSubtrair = doc.querySelectorAll('[data-js="btn-subtrair"]');

    var $botaoMultiplicar = doc.querySelectorAll('[data-js="btn-multiplicar"]');

    var $botaoDividir = doc.querySelectorAll('[data-js="btn-dividir"]');

    Array.prototype.forEach.call($numeros, function (botao) {
        botao.addEventListener('click', numeroClicado, false);
    });

    Array.prototype.forEach.call($botaoCE, function (botao) {
        botao.addEventListener('click', ceClicado, false);
    });

    Array.prototype.forEach.call($botaoSomar, function (botao) {
        botao.addEventListener('click', somarClicado, false);
    });

    Array.prototype.forEach.call($botaoSubtrair, function (botao) {
        botao.addEventListener('click', subtrairClicado, false);
    });

    Array.prototype.forEach.call($botaoMultiplicar, function (botao) {
        botao.addEventListener('click', multiplicarClicado, false);
    });

    Array.prototype.forEach.call($botaoDividir, function (botao) {
        botao.addEventListener('click', dividirClicado, false);
    });

    Array.prototype.forEach.call($botaoIgual, function (botao) {
        botao.addEventListener('click', calcular, false);
    });

    function dividirClicado(evento) {
        var tam = $valores.value.length
        var temp = $valores.value.slice(tam - 1)

        if (temp == "+" || temp == "-" || temp == "x" || temp == "÷")
            $valores.value = $valores.value.substring(0, tam - 1) + this.value;
        else
            $valores.value += this.value;
    }
    function multiplicarClicado(evento) {
        var tam = $valores.value.length
        var temp = $valores.value.slice(tam - 1)

        if (temp == "+" || temp == "-" || temp == "x" || temp == "÷")
            $valores.value = $valores.value.substring(0, tam - 1) + this.value;
        else
            $valores.value += this.value;
    }
    function subtrairClicado(evento) {
        var tam = $valores.value.length
        var temp = $valores.value.slice(tam - 1)

        if (temp == "+" || temp == "-" || temp == "x" || temp == "÷")
            $valores.value = $valores.value.substring(0, tam - 1) + this.value;
        else
            $valores.value += this.value;
    }

    function somarClicado(evento) {
        var tam = $valores.value.length
        var temp = $valores.value.slice(tam - 1)

        if (temp == "+" || temp == "-" || temp == "x" || temp == "÷")
            $valores.value = $valores.value.substring(0, tam - 1) + this.value;
        else
            $valores.value += this.value;
    }

    function numeroClicado(evento) {
        $valores.value += this.value;
    }

    function ceClicado(evento) {
        $valores.value = "0"
    }

    function calcular(query) {

        var tam = $valores.value.length
        var temp = $valores.value.slice(tam - 1)
        var resultado = 0;
        if (temp == "+" || temp == "-" || temp == "x" || temp == "÷") {
            $valores.value = $valores.value.substring(0, tam - 1)
        } else {
            console.log($valores.value.match(/(\d+)/g))
            console.log($valores.value.match(/([-x÷\+])/g))
            var numeros = $valores.value.match(/(\d+)/g)
            var operandos = $valores.value.match(/([-x÷\+])/g)


            resultado = Number(numeros[0]);

            for (let index = 0, indexNumeros = 1; index < operandos.length; index++) {
                switch (operandos[index]) {
                    case "+":
                        resultado +=  Number(numeros[indexNumeros])
                        break;
                    case "-":
                    resultado -=  Number(numeros[indexNumeros])
                        break;
                    case "x":
                    resultado *=  Number(numeros[indexNumeros])
                        break;
                    case "÷":
                    if(resultado)
                    resultado /=  Number(numeros[indexNumeros]) 
                    else
                    resultado = "Error!"
                        break;
                
                    default:
                    
                        break;
                }
                indexNumeros++;
                
            }
            $valores.value = resultado
        }




    }

})(window, document);
