//Calculadora de partidas Rankeadas
//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções

//## Objetivo:

//Crie uma função que recebe como parâmetro
//a quantidade de vitórias e derrotas de um
// jogador,
//depois disso retorne o resultado para uma
//variável, o saldo de Rankeadas deve ser 
//feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de 
//**{saldoVitorias}** está no nível de 
//**{nivel}**"
 
function saldoVitorias(vitorias, derrotas){
    let resultadoVitorias = vitorias - derrotas 
    let nivelHeroi



if(resultadoVitorias<10){
    
    nivelHeroi = "Ferro"
}else if(resultadoVitorias>11 && resultadoVitorias<20){
    
    nivelHeroi = "Bronze"
}else if(resultadoVitorias>21 && resultadoVitorias<50){
    
    nivelHeroi = "Prata"
}else if(resultadoVitorias>51 && resultadoVitorias<80){
    
    nivelHeroi = "Ouro"
}else if(resultadoVitorias>81 && resultadoVitorias<90){
    
    nivelHeroi = "Diamante"
}else if(resultadoVitorias>91 && resultadoVitorias<100){
    
    nivelHeroi = "Lendário"
}else{
    
    nivelHeroi = "Imortal"
}
return {resultadoVitorias, nivelHeroi}

}

let vitorias = 120
let derrotas = 20

let resultado = saldoVitorias(vitorias, derrotas)

console.log(`O herói tem um saldo de ${resultado.resultadoVitorias} vitórias e está no nível ${resultado.nivelHeroi}`)