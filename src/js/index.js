const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//comando "adicionar um ouvinte de evento", alguém clica e dispara a ação ->
botaoAlterarTema.addEventListener("click", /*mais de um valor, mais de uma informação*/ () => {/*função se seta*/

/*CODIGO QUE SERÁ EXECUTADO QUANDO CLICAR NO BOTÃO */
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo){
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else{
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    // CLASSLIS -> lista das classes que tem no elemento
    } 
});
