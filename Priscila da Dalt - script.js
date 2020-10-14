/*
 * Parte 1: Escreva a respeito do código que vai até o comentário
 * que termina a parte 1
 * Descreva com suas palavras o que faz esse trecho de código.
 * É importante conter: 
 * - Quais elementos html estão sendo utilizados?
 * - Há um onclick sendo definido. Qual elemento irá disparar o onclick?
 * - O que faz a função definida no onclick
 *
 * Também, altere os locais onde há comentários com perguntas abaixo,
 * deixando a resposta da pergunta feita.
 * */

 let lista = document.getElementsByClassName('numero') //cria variável lista através do comando let onde seu valor pode ser alterado, 
 //dentro desta variável estão guardados todos os elementos html classe que tenha nome numero, em forma de lista. 
let resultado = document.getElementById('resultado') //cria variável resultado através do comando let onde seu valor pode ser alterado, 
//dentro desta variável esta guardado o elemento html id que tenha nome resultado.

let valor_inicial=0 // cria variável chamada valor inicial e guarda o valor 0, para começar a percorrer do início, posição 0.
let valor_final=lista.length // cria variável chamada valor final e guarda como valor o tamanho da variável lista definida anteriormente.

for(let i=valor_inicial; i<valor_final; i++){ // O que esse for percorre? cria a variavel i com valor igual a variavel valor inicial
  // para percorrer os valores desta variavel enquanto i for menor que a variável valor final, com passo de 1 em 1. 
  //Percorre os botões de numero e do ponto.

  lista[i].onclick = function(){ // O que essa linha faz? para cada vez que o for é executado i conterá um valor diferente que representa a
    //posição que se está dentro da lista e será atribuido a ele o evento onclick que chama uma função ao ser clicado.

    let texto_do_botao = lista[i].innerText // Qual o conteúdo dessa variável? Aqui cria-se a variável chamada texto do botao que recebe
    //o comando innerText para retornar o texto, que neste caso é um número, que esta localizado entre as tags html das classes chamadas numero.
    //o comando innertext só pode ser usado em elementos html que não são do tipo input, como por exemplo button.

    let texto_do_resultado = resultado.value // Qual o conteúdo dessa variável? Aqui cria-se a variável chamada texto do resultado que recebe
    //o comando value da variável resultado para retornar o texto, que esta localizado dentro do input.
    //o comando value só pode ser usado em elementos html do tipo input.

    if(texto_do_botao=='.'){ // O que está sendo comparado nesse if? Este if esta dentro do for anterior, compara se o valor guardado na variável
      // texto do botao é igual a um ponto. Se foi clicado o botão ponto.
      let encontrou_ponto = false // Como será usada essa variável dentro do for? cria a variável chamada encontrou ponto que recebe como 
      //valor inicial a palavra reservada false, pois é a primeira vez que o botão ponto foi clicado.

      let valor_inicial=0 // cria variável chamada valor inicial e guarda o valor 0, para começar a percorrer do início, posição 0.
      let valor_final=texto_do_resultado.length // cria variável chamada valor final e guarda como valor o tamanho da variável 
      //texto do resultado definida anteriormente.

      for(let i=valor_inicial; i<valor_final; i++){ // O que esse for percorre? Este for esta dentro do if anterior. Semelhante ao for anterior
        // cria a variavel i com valor igual a variavel valor inicial para percorrer os valores desta variavel enquanto i for menor que
        // a variável valor final, com passo de 1 em 1. Percorre o input de resultado.

        if(texto_do_resultado[i]=='.'){ // O que está sendo comparado nesse if? Este if esta dentro do for anterior, compara se o valor guardado
          // na variável texto do resultado na posição que i esta naquele momento, é igual a um ponto. Ou seja percorre o input para ver se
          //dentro dele há 1 ponto.
          encontrou_ponto = true //aqui a variável recebe a palavra reservada true pois foi encontrado 1 ponto no input do resultado.

        } // Qual if termina aqui? o if imediatamente acima, texto do resultado.
        if(
          texto_do_resultado[i]=='+' ||
          texto_do_resultado[i]=='/' ||
          texto_do_resultado[i]=='*' ||
          texto_do_resultado[i]=='-'
        ){ // O que está sendo comparado nesse if? compara se o valor guardado na variável texto do resultado na posição que i esta
          // naquele momento, é igual a um dos operadores aritméticos, soma ou divisão ou multiplicação ou subtração. Ou seja percorre o input 
          //para ver se dentro dele há algum operador aritmético.

          encontrou_ponto = false //aqui a variável encontrou ponto é tornada novamente com valor false para ser possível adicionar outro ponto
          //após os operadores aritméticos.

        } // Qual if termina aqui? o if imediatamente acima, texto do resultado operadores aritméticos.
      } // aqui termina o for dentro do if texto do botao.

      if(encontrou_ponto){ // De onde está vindo encontrou_ponto? do if texto do resultado == ponto.
        console.log('Tinha ponto') //imprime no console que no input de resultado tinha ponto e não adiciona nada ao value do input.
      } else { // Qual if termina aqui? o if imediatamente acima, encontrou ponto.

        resultado.value = texto_do_resultado + texto_do_botao // O que faz essa linha? se não tinha ponto no input, 
        //o valor de resultado acrescentará ao texto que já está la o valor do botão que foi clicado.
      }

    } else { // Qual if termina aqui? o if texto do botao == ponto. 
      resultado.value = texto_do_resultado + texto_do_botao // O que faz essa linha? Se o botão clicado não for ponto
      //o valor de resultado acrescentará ao texto que já está la o valor do botão que foi clicado.      
    } //fechou else

  } //fechou função onclick
} //fechou 1º for
/*
  * Fim da parte 1
  * */


/*
 * Parte 2: Escreva a respeito do código que vai até o comentário
 * que termina a parte 2
 * Descreva com suas palavras o que faz esse trecho de código.
 * É importante conter: 
 * - Quais elementos html estão sendo utilizados?
 * - Há um onclick sendo definido. Qual elemento irá disparar o onclick?
 * - O que faz a função definida no onclick
 *
 * Também, altere os locais onde há comentários com perguntas abaixo,
 * deixando a resposta da pergunta feita.
  * */

    //após verificação da quantidade de pontos no input resultado e função dos botões de numeros, passa-se a tratar a função dos botões de 
    //operações aritméticas.


let lista2 = document.getElementsByClassName('operacao') //cria variável lista2 através do comando let onde seu valor pode ser alterado, 
//dentro desta variável estão guardados todos os elementos html classe que tenha nome operação, em forma de lista.

resultado = document.getElementById('resultado') //cria variável resultado através do comando let onde seu valor pode ser alterado, 
//dentro desta variável esta guardado o elemento html id que tenha nome resultado.

valor_inicial=0 // cria variável chamada valor inicial e guarda o valor 0, para começar a percorrer do início, posição 0.
valor_final=lista2.length // cria variável chamada valor final e guarda como valor o tamanho da variável lista2 definida anteriormente.

for(let i=valor_inicial; i<valor_final; i++){ // O que esse for percorre? cria a variavel i com valor igual a variavel valor inicial
  // para percorrer os valores desta variavel enquanto i for menor que a variável valor final, com passo de 1 em 1. 
  //Percorre os botões de operações +,-,*,/.

  lista2[i].onclick = function(){ // O que essa linha faz? para cada vez que o for é executado i conterá um valor diferente que representa a
    //posição que se está dentro da lista e será atribuido a ele o evento onclick que chama uma função ao ser clicado.

    let texto_do_resultado = resultado.value // Qual o conteúdo dessa variável? Aqui cria-se a variável chamada texto do resultado que recebe
    //o comando value da variável resultado para retornar o texto, que esta localizado dentro do input.
    //o comando value só pode ser usado em elementos html do tipo input.

    let texto_do_botao = lista2[i].innerText // Qual o conteúdo dessa variável? Aqui cria-se a variável chamada texto do botao que recebe
    //o comando innerText para retornar o texto, que neste caso é uma operação, que esta localizado entre as tags html das classes chamadas
    // operacao.
    //o comando innertext só pode ser usado em elementos html que não são do tipo input, como por exemplo button.

    if(texto_do_resultado == ''){ // O que está sendo comparado nesse if? Este if esta dentro do for anterior, compara se o valor guardado
      // na variável texto do resultado é igual a string vazia. Ou seja percorre o input para ver se ele está vazio.

      console.log('Não tinha número') //imprime no console que no input de resultado não tinha nenhum número.

    } else {
      let operador = '' // Como será usada essa variável dentro do for? // cria variável chamada operador e guarda uma string vazia, 
      //para posteriormente percorrer o input e guardar nela o operador que for encontrado.

      let valor_inicial=0 // cria variável chamada valor inicial e guarda o valor 0, para começar a percorrer do início, posição 0.
      let valor_final=texto_do_resultado.length // cria variável chamada valor final e guarda como valor o tamanho da variável 
      //texto do resultado definida anteriormente.

      for(let i=valor_inicial; i<valor_final; i++){ // O que esse for percorre? cria a variavel i com valor igual a variavel valor inicial
        // para percorrer os valores desta variavel enquanto i for menor que a variável valor final, com passo de 1 em 1. 
        //Percorre o input de resultado.

        if(
          texto_do_resultado[i]=='+' ||
          texto_do_resultado[i]=='/' ||
          texto_do_resultado[i]=='*' ||
          texto_do_resultado[i]=='-'
        ){ // O que está sendo comparado nesse if? compara se o valor guardado na variável texto do resultado na posição que i esta
          // naquele momento, é igual a um dos operadores aritméticos, soma ou divisão ou multiplicação ou subtração. Ou seja percorre o input 
          //para ver se dentro dele há algum operador aritmético.

          operador = texto_do_resultado[i] // se for encontrado algum operador ele será guardado na variável operador.
        }
      }

      if(operador){ // De onde está vindo operador? do if texto do resultado == +.
        console.log('Tinha operador') //imprime no console que no input de resultado tinha um operador.
      } else { //caso contrário
        resultado.value = texto_do_resultado + texto_do_botao // O que faz essa linha? Se no resultado não houver um operador
        //o valor de resultado acrescentará ao texto que já está la o valor do botão que foi clicado, que neste caso é uma operação.   
      } //fim do else 
    } // fim do 1º if
  } //fim da função onclick
} //fim do 1º for
/*
  * Fim da parte 2
  * */


/*
 * Parte 3: Escreva a respeito do código que vai até o comentário
 * que termina a parte 3
 * Descreva com suas palavras o que faz esse trecho de código.
 * É importante conter: 
 * - Quais elementos html estão sendo utilizados?
 * - Há um onclick sendo definido. Qual elemento irá disparar o onclick?
 * - O que faz a função definida no onclick
 *
 * Também, altere os locais onde há comentários com perguntas abaixo,
 * deixando a resposta da pergunta feita.
  * */

  //após verificação da quantidade de pontos e da quantidade dos operadores no input resultado, passa-se a tratar a função do botão =.

let lista3 = document.getElementsByClassName('resultar') //cria variável lista3 através do comando let onde seu valor pode ser alterado, 
//dentro desta variável estão guardados todos os elementos html classe que tenha nome resultar, em forma de lista.

resultado = document.getElementById('resultado') //cria variável resultado através do comando let onde seu valor pode ser alterado, 
//dentro desta variável esta guardado o elemento html id que tenha nome resultado.

valor_inicial=0 // cria variável chamada valor inicial e guarda o valor 0, para começar a percorrer do início, posição 0.
valor_final=lista3.length // cria variável chamada valor final e guarda como valor o tamanho da variável lista 3 definida anteriormente.

for(let i=valor_inicial; i<valor_final; i++){ // O que esse for percorre? cria a variavel i com valor igual a variavel valor inicial
  // para percorrer os valores desta variavel enquanto i for menor que a variável valor final, com passo de 1 em 1. 
  //Percorre os botões de operações =.

  lista3[i].onclick = function(){ // O que essa linha faz? para cada vez que o for é executado i conterá um valor diferente que representa a
    //posição que se está dentro da lista e será atribuido a ele o evento onclick que chama uma função ao ser clicado.

    let texto_anterior = resultado.value // Qual o conteúdo dessa variável? cria variável chamada texto anterior e guarda o valor da variável
    //resultado, para poder efetuar as operações com os números que estão no input.

    let operador = '' // Como será usada essa variável dentro do for? // cria variável chamada operador e guarda uma string vazia, 
    //para posteriormente percorrer a variável texto anterior e guardar nela os valores que forem encontrados.

    let valor_inicial=0 // cria variável chamada valor inicial e guarda o valor 0, para começar a percorrer do início, posição 0.
    let valor_final=texto_anterior.length // cria variável chamada valor final e guarda como valor o tamanho da variável 
    //texto anterior definida anteriormente.

      for(let i=valor_inicial; i<valor_final; i++){ // O que esse for percorre? cria a variavel i com valor igual a variavel valor inicial
        // para percorrer os valores desta variavel enquanto i for menor que a variável valor final, com passo de 1 em 1. 
        //Percorre o texto guardado na variável texto anterior que é igual ao texto que estava no input no momento que foi clicado o botão =.
      if(
        texto_anterior[i]=='+' ||
        texto_anterior[i]=='/' ||
        texto_anterior[i]=='*' ||
        texto_anterior[i]=='-'
      ){ // O que está sendo comparado nesse if? compara se o valor guardado na variável texto anterior na posição que i esta
        // naquele momento, é igual a um dos operadores aritméticos, soma ou divisão ou multiplicação ou subtração.
        // Ou seja verifica se há algum operador no conteúdo da variável texto anterior.

        operador = texto_anterior[i] // se for encontrado algum operador ele será guardado na variável operador.
      } //fecha if texto anterior
    } // fecha for 

    let lista = texto_anterior.split(operador) // O que faz essa linha? // cria variável chamada lista e guarda como valor 
    //várias strings quebradas no local onde há um operador do texto guardado na variável texto anterior.

    if(lista.length==1){ // O que está sendo comparado nesse if? se o tamanho da lista for igual a 1

      console.log('Encontrou apenas 1 número') //imprime no console que na lista tinha apenas 1 número.

    } else if(lista[1]==''){ // O que está sendo comparado nesse if? Senão verifica se na posição 1 da lista é igual a sting vazia.

      console.log('Faltou o segundo número') //imprime no console que na lista faltou o segundo número.

      resultado.value = 'Erro de operação' // O que faz essa linha? o valor da variável resultado recebe o texto Erro de operação.

    } else { // Qual caso entrará nesse else? Caso contrário se o tamanho da lista for maior que 1 e a segunda posição da lista não for vazia,
      //então

      let num1 = parseFloat(lista[0]) // O que faz essa linha? // cria variável chamada num1 e guarda como valor o contido na posição 0  
      //da lista convertido de string para numero tipo float.
      let num2 = parseFloat(lista[1]) // O que faz essa linha? // cria variável chamada num2 e guarda como valor o contido na posição 1  
      //da lista convertido de string para numero tipo float.

      // O que fazem os próximos if? // se o valor guardado na variável operador for + o valor da variável resultado recebe num1 somado ao num2.
      //igualmente para as demais operações.

      if(operador=='+'){
        resultado.value = num1 + num2
      }
      if(operador=='-'){
        resultado.value = num1 - num2
      }
      if(operador=='*'){
        resultado.value = num1 * num2
      }
      if(operador=='/'){
        resultado.value = num1 / num2
      } //fim do ultimo if
    } //fim do else
  } //fim da função onclick
} // fim do 1º for
/*
  * Fim da parte 3
  * */
