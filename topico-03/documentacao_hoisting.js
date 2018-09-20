/** exemplo de efeito "hoisting" em javascript
 *
 * Em javascript toda variavel e elevada-icada 
 * ate o topo do seu contexto, antes da execucao
 * 
 * 
 */




var exibeMensagem = function() {
    var mensagemForaDoIf = 'Caelum';
  
    if(true) {
      var mensagemDentroDoIf = 'Alura';
      console.log(mensagemDentroDoIf); // Alura
    }
  
    console.log(mensagemForaDoIf); // Caelum
    console.log(mensagemDentroDoIf); // Alura
}

/**
 * No exemplo acima, a variavel "mensagemDentroDoIf foi 
 * foi elevada, icada, como se tivesse sido declarada junto
 * com a variavel mensagemForaDoIf	
 * 
 * @param p1 - nao e usado dentro do codigo
 * 
 * 
*/