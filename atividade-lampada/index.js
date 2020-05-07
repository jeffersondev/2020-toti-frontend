function ligar() {
    // pegar elemento de imagem
    const lampada = document.querySelector("#lampada")
    //trocar src para ligada
    lampada.src = "img/lampada-ligada.jpeg"
    //trocar alt para ligada
    lampada.alt = "Lâmpada ligada"

    //pegar elemento button de ligar
    const botaoLigar = document.querySelector("#botao-ligar")
    //adicionar atributo disabled
    botaoLigar.disabled = true

    //pegar elemento button de desligar
    const botaoDesligar = document.querySelector("#botao-desligar")
    //remover atributo disabled
    botaoDesligar.disabled = false
}

function desligar() {
    // pegar elemento de imagem
    const lampada = document.querySelector("#lampada")
    //trocar src para desligada
    lampada.src = "img/lampada-desligada.jpeg"
    //trocar alt para desligada
    lampada.alt = "Lâmpada desligada"

    //pegar elemento button de ligar
    const botaoLigar = document.querySelector("#botao-ligar")
    //remover atributo disabled
    botaoLigar.disabled = false

    //pegar elemento button de desligar
    const botaoDesligar = document.querySelector("#botao-desligar")
    //adicionar atributo disabled
    botaoDesligar.disabled = true
}
