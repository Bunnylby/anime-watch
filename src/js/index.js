/*

Obejtivo- quando clicar no botao trocar a imagem correspondente.

parte 1- pegar html dos botoes

parte 2- identificar o clique do usuario no botao

parte 3- desmarcar o botao anterior

parte 4- marcar o botao clicado como selecionado

parte 5- enconder a imagem anterior

parte 6- aparecer a imagem correspondente ao botao

*/

// passo 1

const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

// passo 2

botoesCarrossel.forEach((botao, indice) => {

  botao.addEventListener('click', () => {

    //passo 3

    const botaoSelecionado = document.querySelector('.selecionado');

    botaoSelecionado.classList.remove('selecionado');

    // passo 4

    botao.classList.add('selecionado');

    // passo 5

    const imagemAtiva = document.querySelector('.ativa');

    imagemAtiva.classList.remove('ativa');

    // passo 6

    imagens[indice].classList.add('ativa');

  })

})
