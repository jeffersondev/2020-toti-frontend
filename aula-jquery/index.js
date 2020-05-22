$(function () {
    $("#mostrar").click(mostrar)
    $("#esconder").click(econder)

    $("img").hover(function () {
        $(this)
            .animate({
                opacity: 1,
                width: '250px'
            }, 1000)
    })

    $("img").mouseleave(function () {
        $(this)
            .animate({
                opacity: 0.5,
                width: '200px'
            }, 1000)
    })

    $("h1").hover(aplicarDestaque)
    $("h1").mouseleave(tirarDestaque)
    $("#p1").hover(aplicarDestaque)
    $("#p1").mouseleave(tirarDestaque)
})

function mostrar() {
    $("#p1").fadeIn()
}

function econder() {
    $("#p1").fadeOut()
}

function aplicarDestaque() {
    $(this).addClass("destaque")
}

function tirarDestaque() {
    $(this).removeClass("destaque")
}
