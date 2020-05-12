const novaTarefaInput = document.querySelector("#new-task")
const botaoAdicionar = document.querySelector("#add-task-button")
const listaDeTarefas = document.querySelector(".task-list")

function adicionarTarefa(event) {
    const novoItem = document.createElement("li")
    novoItem.textContent = novaTarefaInput.value
    novoItem.classList.add("task-list__item")
    novoItem.appendChild(botao)
    listaDeTarefas.appendChild(novoItem)
    novaTarefaInput.value = ""
}

botaoAdicionar.addEventListener("click", adicionarTarefa)