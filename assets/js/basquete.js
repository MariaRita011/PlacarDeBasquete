//Declaração de arrays de contagem de pontos
let arrpontosE1 = [];
let arrpontosE2 = [];




//Variáveis Equipe 1
let add1 = 0;
let add2 = 0;
let add3 = 0;
ganhos1 = 0;
let result = 0;




//PONTOS EQUIPE 1

//Adição de 1 ponto para a equipe 1
function maisum1() {
    add1 = add1 + 1;
    result = add3 + add2 + add1;
    document.getElementById("atualE1").innerHTML = result;
}

//Adição de 2 pontos para a equipe 1
function maisdois1() {
    add2 = add2 + 2;
    result = add3 + add2 + add1;
    document.getElementById("atualE1").innerHTML = result;
}

//Adição de 3 pontos para a equipe 1
function maistres1() {
    add3 = add3 + 3;
    result = add3 + add2 + add1;
    document.getElementById("atualE1").innerHTML = result;
}



//Variáveis Equipe 2
let add12 = 0;
let add22 = 0;
let add32 = 0;
ganhos2 = 0;
let result1 = 0;



//PONTOS EQUIPE 2

//Adição de 1 ponto para a equipe 2
function maisum2() {
    add12 = add12 + 1;
    result1 = add32 + add22 + add12;
    document.getElementById("atualE2").innerHTML = result1;
}

//Adição de 2 pontos para a equipe 2
function maisdois2() {
    add22 = add22 + 2;
    result1 = add32 + add22 + add12;
    document.getElementById("atualE2").innerHTML = result1;
}

//Adição de 3 pontos para a equipe 2
function maistres2() {
    add32 = add32 + 3;
    result1 = add32 + add22 + add12;
    document.getElementById("atualE2").innerHTML = result1;
}




//Ações após apertar o botão "Parar"

//Contadores equipe 1
let count = Number(0);

let countquartos = Number(0);

//Contadores equipe 2
let count2 = Number(0);

let countquartos2 = Number(0);

//function parar
function pare() {

    //Quartos ganhas pela equipe 1
    if (result > result1) {
        countquartos++;
        document.getElementById("ganhoE1").innerHTML = 'Quartas ganhas: ' + countquartos;
    }

    //caso haja um empate
    if (result == result1) {
        document.getElementById("ganhoE1").innerHTML = 'Quartas ganhas: ' + countquartos;
    }

    //Quartos ganhas pela equipe 2
    if (result < result1) {
        countquartos2++;
        document.getElementById("ganhoE2").innerHTML = 'Quartas ganhas: ' + countquartos2;
    }

    //Caso a equipe 1 seja a vencedora
    if (countquartos > countquartos2 && countquartos == 3) {
        document.getElementById("ganhador").innerHTML = 'O ganhador é a: Equipe 1!!';
    }

    //Caso a equipe 2 seja a vencedora
    if (countquartos < countquartos2 && countquartos2 == 3) {
        document.getElementById("ganhador").innerHTML = 'O ganhador é a: Equipe 2!!';
    }

    //redefinição das váriaveis da equipe 1
    count++;
    arrpontosE1.push(result);
    add1 = Number(0);
    add2 = Number(0);
    add3 = Number(0);
    result = 0;

    //redefinição das váriaveis da equipe 2
    count2++;
    arrpontosE2.push(result1);
    add12 = Number(0);
    add22 = Number(0);
    add32 = Number(0);
    result1 = 0;

    //Caso haja um empate
    if (countquartos == 2 && countquartos2 == 2) {
        count++;
        count2++;
        document.getElementById("E24Q").innerHTML = '4º Quarto: ' + arrpontosE2[3] + ' pontos';
        document.getElementById("E14Q").innerHTML = '4º Quarto: ' + arrpontosE1[3] + ' pontos';
        document.getElementById("ganhador").innerHTML = 'PRORROGAÇÃO!!';

    }

    //Pontos 1º Quarto equipe 1
    if (count == 1) {
        document.getElementById("E11Q").innerHTML = '1º Quarto: ' + arrpontosE1[0] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //Pontos 2º Quarto equipe 1
    if (count == 2) {
        document.getElementById("E12Q").innerHTML = '2º Quarto: ' + arrpontosE1[1] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //Pontos 3º Quarto equipe 1
    if (count == 3) {
        document.getElementById("E13Q").innerHTML = '3º Quarto: ' + arrpontosE1[2] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //Pontos 4º Quarto equipe 1
    if (count == 4) {
        document.getElementById("E14Q").innerHTML = '4º Quarto: ' + arrpontosE1[3] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }


    //Pontos 1º Quarto equipe 2
    if (count2 == 1) {
        document.getElementById("E21Q").innerHTML = '1º Quarto: ' + arrpontosE2[0] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //Pontos 2º Quarto equipe 2
    if (count2 == 2) {
        document.getElementById("E22Q").innerHTML = '2º Quarto: ' + arrpontosE2[1] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //Pontos 3º Quarto equipe 2
    if (count2 == 3) {
        document.getElementById("E23Q").innerHTML = '3º Quarto: ' + arrpontosE2[2] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //Pontos 4º Quarto equipe 2
    if (count2 == 4) {
        document.getElementById("E24Q").innerHTML = '4º Quarto: ' + arrpontosE2[3] + ' pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //em caso de prorrogação
    if (count == 5) {
        document.getElementById("prorrogacaoE1").innerHTML = 'Prorrogação: 0 pontos';
        document.getElementById("prorrogacaoE2").innerHTML = 'Prorrogação: 0 pontos';
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
    }

    //resultado prorrogação
    if (count == 6) {
        document.getElementById("atualE1").innerHTML = result;
        document.getElementById("atualE2").innerHTML = result1;
        document.getElementById("prorrogacaoE1").innerHTML = 'Prorrogação: ' + arrpontosE1[4] + ' pontos';
        document.getElementById("prorrogacaoE2").innerHTML = 'Prorrogação: ' + arrpontosE2[4] + ' pontos';
    }

    //caso o visitante tente burlar o sistema
    if (count > 6 || countquartos > 3 || countquartos2 > 3 || countquartos == 3 && count == 4 || countquartos2 == 3 && count == 4) {
        alert("O jogo já acabou! A página será reiniciada!!!")
        window.location.reload(true);
    }
}