// console.log() irá imprimir informações no console do browser.
// Podemos acessar o console clicando com o botão direito do mouse na página e escolhendo 'Inpecionar elemento'
// Também podemos acessar indo no menu ou com os atalhos F12 ou CTRL-Shift-C ou CTRL-Shift-J (Dependendo do navegador)

console.log('Exercícios de revisão') // Essa mensagem será exibida logo que a tela for carregada.

let flag = true // Isso inicializa uma variável. 'true' é a palavra reservada para o operador 
//booleano 'Verdade'. O 'true' permite a entrada em 'if' e mantém 'while' executando, como veremos abaixo.

console.log('\nPrimeiro exercício: \n')

// Escreva um if que verifica a flag e imprime uma informação no console. Recarregue a página e 
//verifique no console se a informação foi exibida.

if(flag){
  console.log ('entrei no if')
}
//    console... 'Entrei no if'
//
//

flag = false

console.log('\nSegundo exercício: \n')

// Copie o mesmo if aqui. Verifique no console o que está acontecendo.

if(flag){
  console.log ('entrei no if')
}

// Podemos usar operações para avaliar o if também.
// O Javascript tem operações como == (igual), > (maior), != (diferente)

let a = 0
let b = 0

console.log('\nTerceiro exercício: \n')

// Escreva um if com else que verifica se a == b e imprima algo no console recarregue a página e 
//verifique o resultado

if(a==b){
console.log('entrei no if')
} else{
  console.log ('entrei no else')
}

a = 0
b = 1

console.log('\nQuarto exercício: \n')

// Reescreva o if e verifique o resultado agora

if(a==b){
  console.log('entrei no if')
  } else{
    console.log ('entrei no else')
  }

console.log('\nQuinto exercício: \n')

// Reescreva o if mais uma vez, agora com o operador != e verifique o resultado

if(a!=b){
  console.log('entrei no if')
  } else{
    console.log ('entrei no else')
  }

console.log('\nSexto exercício: \n')

// O for é uma estrutura de repetição. Ele repete 'n' vezes o código que estará dentro dele.
// Para criar um precisamos de 3 informações: valor inicial, valor final e tamanho do passo
// Na sintaxe do Javascript essas informações ficam:
// for(let i = valor_inicial; i < valor_final; i++) // O i++ indica o tamanho do passo como 1
// 

// Ajuste os valores iniciais e finais para que a mensagem de estou no for seja imprimida 10 vezes.
let valor_inicial = 0
let valor_final = 11 

//python: for i in range(5)

for(let i=valor_inicial; i<valor_final; i++){
  console.log('Estou no for - passo:'+i)
}

console.log('\nSétimo exercício: \n')
// Dentro do for é possível utilizar o valor da variável i. Ela será um contador que começará a partir do valor_inicial e terminará no valor final.
// Reajuste o valor inicial e final, fazendo com que sejam imprimidos os números de 15 a 20 (Tome cuidado com o valor final. Ele está sendo usado com o comparador < (menor), e não com o comparador <= (menor ou igual))
valor_inicial = 15
valor_final = 21

for(let i=valor_inicial; i<valor_final; i++){
  console.log(i)
}

console.log('\nOitavo exercício: \n')
// Também conseguimos percorrer listas usando o for. Para isso precisamos da informação do tamanho da lista.
// Preencha a lista fazendo com que o for exiba os número 10, 20, 30 e 40
let lista = [10,20,30,40,50]
valor_inicial = 0
valor_final = lista.length

for(let i=valor_inicial; i<valor_final; i++){
  console.log(lista[i]) // Aqui é necessário acessar a informação a partir da lista
}

console.log('\nNono exercício: \n')
// Strings são variáveis textuais. O Javascript possui várias operações prontas para trabalhar com strings.
// As strings são definidas colocando o conteúdo textual entre aspas (simples ou duplas)

// Coloque um valor de texto para essa string
let texto = 'Olá'

console.log(texto)

console.log('\nDécimo exercício: \n')
// Uma das operações que podemos fazer com strings é a concatenação (a junção de duas strings)
// No Javascript faremos a concatenação com o operador soma (+)

// Coloque um valor de texto para as duas strings e verifique como a informação será exibida no console
let texto_da_frente = 'Olá'
let texto_de_tras = ' Mundo'
//por espaço na variavel ou entre o + das variáveis
console.log(texto_da_frente + texto_de_tras)

console.log('\nDécimo primeiro exercício: \n')
// Podemos percorrer strings como se fossem lista.
// Preencha uma palavra nessa string e verifique o que será imprimido
let texto_percorrido = 'labaro'
valor_inicial = 0
valor_final = texto_percorrido.length

for(let i=valor_inicial; i<valor_final; i++){
  console.log(texto_percorrido[i])
}

console.log('\nDécimo segundo exercício: \n')
// Podemos usar if dentro do for
// Escreva um if dentro desse for que irá imprimir algo sempre que ele encontrar uma letra 'a'. Verifique quantas vezes o if está imprimindo para a palavra Banana. Altere a palavra e teste novamente
texto_percorrido = 'Banana'
valor_inicial = 0
valor_final = texto_percorrido.length

for(let i=valor_inicial; i<valor_final; i++){
  if(texto_percorrido[i] == 'a'){
    console.log( 'Encontrei um a' + i)
}}

console.log('\nDécimo terceiro exercício: \n')
// A partir da palavra document, podemos acessar funcão que recuperam elementos do html
// A principal função é a document.getElementById(). Ela recebe uma string que conterá o id de um elemento e recupera o seu conteúdo
// Recupere abaixo o elemento h1 da página html
let elemento_h1 = document.getElementById ('meu_h1') // altere a atribuição para o valor correto

console.log(elemento_h1)

console.log('\nDécimo quarto exercício: \n')
// A partir de um elemento podemos obter informações presentes no html
// O elemento h1 possui um conteúdo interno (innerText)
// Escreva um console log para acessar o innerText
 elemento_h1 = document.getElementById ('meu_h1')

console.log(elemento_h1.innerText)

console.log('\nDécimo quinto exercício: \n')
// Podemos também buscar elementos pela sua classe, mas nesse caso ficaremos com uma lista de elementos
// Para buscar por classe usamos a função documento.getElementsByClassName()
// Recupere abaixo todos os elementos da classe 'classe_input'
let lista_de_classe_input = document.getElementsByClassName('classe_input') // altere a atribuição para o valor correto
valor_inicial = 0
valor_final = lista_de_classe_input.length

for(let i=valor_inicial; i<valor_final; i++){
  console.log(lista_de_classe_input[i])
}

console.log('\nDécimo sexto exercício: \n')
// Elementos input não possuem innerText
// Mas eles tem a informação de value
// Escreva um console log para acessar o value dentro do for

for(let i=valor_inicial; i<valor_final; i++){
  let input_do_for=lista_de_classe_input[i]
  console.log(input_do_for.value) // Altere esse console.log para exibir a informação correta
}
