var readlineSync = require("readline-sync");
console.log("Qual palavra deseja analisar? ")
const palavraUsuario = readlineSync.prompt()

primo();
myWord();

// Função que soma os numeros correspondentes a cada letra da palavra dada pelo usuário

function myWord (){
    let contadorMi = 0;
    let contadorMa = 0;
    
    //Separando as letras minusculas e dando valores de acordo com a tabela ASCII
    
    for( let i = 0; i < palavraUsuario.length; i++){
        // Se a letra for minuscula
        if(palavraUsuario[i].codePointAt() >= 97){
            contadorMi = contadorMi + (palavraUsuario[i].codePointAt() - 96);
    
        }
        // Se a letra for maiuscula
        else if (palavraUsuario[i].codePointAt() <= 90){
            contadorMa = contadorMa + (palavraUsuario[i].codePointAt() - 38);
            
        }
       
    }
   
    return contadorMa + contadorMi;

}
// Função que analise se o numero é primo ou não

function primo(){
    const numero = myWord()
    let ehprimo = true;
    //Se o numero for 1 então atribuimos FALSE
    if(numero == 1 ){
        ehprimo = false;
    }
    // Se o numero for divisível por quanquer numero entre 2 e n, este numero não é primo então atribuímos FALSE.
    for( let i = 2; i < numero; i++){
        if( numero % i == 0 ){
            ehprimo = false;
    
        }
    }
        if( ehprimo){
            console.log(numero + " É um número primo");
        }else{
            console.log(numero + " Não é um número primo.");
        }
}