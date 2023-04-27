// 1) Observe o trecho de código abaixo:
const number1 = () => {
    let indice = 13;
    let soma = 0;
    k = 0;

    while (k < indice) {
        k+=1;
        soma += k;
    }
    return soma;
}

// number1(); // O resultado retornou 91 no console

const number2 = (num) => {
    let primeiroNumero = 0;
    let segundoNumero = 1;
    if (num === primeiroNumero || num === segundoNumero) { // Verificação do começo da sequência
        return console.log(`O número ${num} está na sequência de Fibonacci`);
    }
    let soma;
    while(segundoNumero <= num) { // Executa enquanto o próximo número da sequência for menor ou igual ao número passado como parâmetro
        soma = primeiroNumero + segundoNumero;
        if(soma === num) {
       return console.log(`O número ${num} está na sequência de Fibonacci`); // Se a soma dos números for igual ao número passado como parâmetro, o número está na sequência
        }
        primeiroNumero = segundoNumero;
        segundoNumero = soma;
    }
    return console.log(`O número ${num} não está na sequência de Fibonacci`); // Se a soma dos números for diferente do número passado como parâmetro, o número não está na sequência
}

// //TESTES
// number2(0); // O número digitado está na sequência de Fibonacci
// number2(1); // O número digitado está na sequência de Fibonacci
// number2(2); // O número digitado não está na sequência de Fibonacci
// number2(3); // O número digitado está na sequência de Fibonacci
// number2(4); // O número digitado não está na sequência de Fibonacci
// number2(5); // O número digitado está na sequência de Fibonacci
// number2(6); // O número digitado não está na sequência de Fibonacci
// number2(7); // O número digitado não está na sequência de Fibonacci
// number2(8); // O número digitado está na sequência de Fibonacci
// number2(9); // O número digitado não está na sequência de Fibonacci
// number2(10); // O número digitado não está na sequência de Fibonacci
// number2(11); // O número digitado não está na sequência de Fibonacci
// number2(12); // O número digitado não está na sequência de Fibonacci
// number2(13); // O número digitado está na sequência de Fibonacci

const number3 = {
// 3) Descubra a lógica e complete o próximo elemento:


// a) 1, 3, 5, 7, _9_  <--- Números ímpares

// b) 2, 4, 8, 16, 32, 64, _128_ <--- Expoentes de 2

// c) 0, 1, 4, 9, 16, 25, 36, _49_ <--- Quadrados perfeitos

// d) 4, 16, 36, 64, _100_ <--- Quadrados perfeitos de pares

// e) 1, 1, 2, 3, 5, 8, _13_ <--- Sequência de Fibonacci

// f) 2,10, 12, 16, 17, 18, 19, _200_ <--- Números iniciados pela letra "d"

};

const number4 = {
//     4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. 
//     O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h.
//     Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
    

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.

//   RESPOSTA: Podemos desconsiderar qualquer informação além de que eles se cruzam na rodovia. No momento em que se cruzam, os dois estarão a mesma distância de Ribeirão Preto  
  
}

const number5 = (string) => {
//     5) Escreva um programa que inverta os caracteres de um string.


// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

    let stringInvertida = '';  // Variável onde a string invertida será armazenada
    for(let i = string.length - 1; i >= 0; i--) { // Percorre o array de trás para frente e adiciona cada caractere na variável stringInvertida
        stringInvertida += string[i];
    }
    return console.log(stringInvertida);
}

// //TESTES
// number5("Teste"); // O resultado foi "etseT"
// number5("Teste de string"); // O resultado foi "gnirts ed etseT"
// number5("Teste de string com números 123"); // O resultado foi "321 sõmerõn moc gnirts ed etseT"
// number5("Teste de string com números 123 e caracteres especiais !@#$%¨&*()_+"); // O resultado foi "+_)(*&^%$#@! laicepse seretcarac e 321 sõmerõn moc gnirts ed etseT"
