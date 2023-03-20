// pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    //desmarcar o botão selecionado anterior
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');

    //marcar o botao clicado como se estivesse selecionado
    botao.classList.add('selecionado');

    //esconder a imagem ativa de fundo
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');

    //fazer aparecer a imagem de fundo correspondente ao botão clicado
    imagens[indice].classList.add('ativa');
  })
})