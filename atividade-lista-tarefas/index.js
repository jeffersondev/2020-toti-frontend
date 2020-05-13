const novaTarefaInput = document.querySelector("#new-task")
const botaoAdicionar = document.querySelector("#add-task-button")
const listaDeTarefas = document.querySelector(".task-list")

function adicionarTarefa(event) {
    if (novaTarefaInput.value === "") {
        return;
    }
    const novoItem = criarNovoItem(novaTarefaInput.value)
    listaDeTarefas.appendChild(novoItem)
    novaTarefaInput.value = ""
    novaTarefaInput.focus()
}

function criarNovoItem(textoTarefa) {
    const novoItem = document.createElement("li")
    novoItem.innerText = textoTarefa
    novoItem.classList.add("task-list__item")
    novoItem.appendChild(criarBotaoCompletarTarefa())
    return novoItem
}

function criarBotaoCompletarTarefa() {
    const botao = document.createElement("button")
    botao.type = "button"
    botao.classList.add("task-list__action")
    botao.innerHTML = "<i class=\"fas fa-check-square\"></i>"
    botao.addEventListener("click", completarTarefa)
    return botao
}

function completarTarefa(event) {
    const botao = event.currentTarget;
    const item = botao.parentNode

    //riscar item
    item.classList.remove("task-list__item")
    item.classList.add("task-list__item--done")

    //mudar ícone
    botao.innerHTML = "<i class=\"fas fa-undo-alt\"></i>"

    //atualiza funções chamadas
    botao.removeEventListener("click", completarTarefa)
    botao.addEventListener("click", desfazerTarefa)
}

function desfazerTarefa(event) {
    const botao = event.currentTarget;
    const item = botao.parentNode

    //riscar item
    item.classList.remove("task-list__item--done")
    item.classList.add("task-list__item")

    //mudar ícone
    botao.innerHTML = "<i class=\"fas fa-check-square\"></i>"

    //atualiza funções chamadas
    botao.removeEventListener("click", desfazerTarefa)
    botao.addEventListener("click", completarTarefa)
}

botaoAdicionar.addEventListener("click", adicionarTarefa)