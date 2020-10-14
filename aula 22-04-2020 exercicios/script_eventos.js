// console.log() irá imprimir informações no console do browser.
// Podemos acessar o console clicando com o botão direito do mouse na página e escolhendo 'Inpecionar elemento'
// Também podemos acessar indo no menu ou com os atalhos F12 ou CTRL-Shift-C ou CTRL-Shift-J (Dependendo do navegador)

console.log('Exercícios de revisão - Eventos e alteração de DOM') // Essa mensagem será exibida logo que a tela for carregada.

console.log('\nPrimeiro exercício: \n')

// Podemos obter elementos usando document.getElementById('') e a partir dele podemos acessar informações como innerText. 
//Além de obter a informação textual podemos alterá-la. Altere a informação textual do button exibido no html

let button = document.getElementById('meu_button')

button.innerText = 'Texto inserido pelo Javascript'
console.log('ok!')


console.log('\nSegundo exercício: \n')

// Podemos ler informações de vários elementos e alterar informações usando esses dados lidos. Os dados lidos funcionam como strings.
//

let texto = document.getElementById('meu_input').value = 'texto inserido pelo Java Script'// Lê o texto exibido no input
let lista_de_palavras = texto.split(' ') // Quebra o texto aonde encontra o caracter espaço

// Insira a primeira posição da lista de palavras que foi quebrada do texto do input no innerText elemento button
document.getElementById('meu_button').innerText= lista_de_palavras[2]
console.log('ok!')

console.log('\nTerceiro exercício: \n')

// Existem funções definidas pelo Javascript para serem executadas após o usuário realizar alguma ação específica. Uma delas é o onclick
// Faça a função onclick do button exibir uma informação no console
// Verifique o que acontece quando o botão é clicado, após definir a função

document.getElementById('meu_button').onclick = function(){
  console.log('botão clicado')
}
console.log('ok!')

console.log('\nQuarto exercício: \n')

// Também é possível fazer elementos interagirem nas funções de evento. 
// Faça o botão apagar o conteúdo do input
button.innerText='Apagar'
button.onclick = function(){
document.getElementById('meu_input').value = ' '
}
console.log('ok!')

console.log('\nQuinto exercício: \n')

// Podemos usar o input como entrada do usuário, e então podemos alterar o innerText do button
// Reescreva a função do botão para que funcione dessa forma

let input = document.getElementById('meu_input')

document.getElementById('meu_button').onclick = function(){
  button.innerText=input.value
}
console.log('ok!')