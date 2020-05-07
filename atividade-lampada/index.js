function ligar() {
    //pegar elemento de imagem
    const lampada = document.querySelector("#lampada")
    //trocar src para ligada
    lampada.src = "img/lampada-ligada.jpeg"
    //trocar alt para ligada
    lampada.alt = "Lâmpada ligada"

    //pegar elemento button
    const botaoLigar = document.querySelector("#botao-ligar")
    //adicionar atributo disabled
    botaoLigar.disabled = true

    //pegar elemento button
    const botaoDesligar = document.querySelector("#botao-desligar")
    //remover atributo disabled
    botaoDesligar.disabled = false
}

function desligar() {

}