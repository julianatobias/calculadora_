/* Calculadora */
/* Calculadora */

{

    var x = Number(prompt("Digite um valor:"));
    var y = Number(prompt("Digite um valor:"));
    var operador = prompt('Digite uma operação: "+, -, *, /"');//operações
    var opcao = Number(prompt("calcular média? s/n"))
    var num1 = Number(prompt("Digite primeira nota:"));
    var num2 = Number(prompt("Digite outra nota:"));
    var resultado = 0; {
        if (operador === '+') { //Inicio operadores
            resultado = x + y;
        } else if (operador === '-') {
            resultado = x - y;
        } else if (operador === '*') {
            resultado = x * y;
        } else if (operador === '/') {
            if (x !== 0) {
            }
            else {
                console.log('Operação não permitida');
            }
            if (operador !== null) {
                console.log(resultado);// fim de operadores com resultado simples
            }
            {
                var mediaNotas = matchMedia / 2
                console.log(mediaNotas)
                if (mediaNotas >= 5)
                    console.log("Aprovado")
                else
                    console.log("Reprovado")
                {
                    var media, n1, n2, n3;
                    n1 = Number(prompt('Digite a sua primeira nota:'));
                    n1 = eval(n1);
                    n2 = Number(prompt("Digite a sua segunda nota:"));
                    n2 = eval(n2);
                    n3 = Number(prompt("Digite a sua terceira nota:"));
                    n3 = eval(n3);

                    media = (n1 + n2 + n3) / 3;

                    {
                        document.while("Sua média é:", media);
                        console.log("media");
                    }

                }
            }
        }
    }
}
