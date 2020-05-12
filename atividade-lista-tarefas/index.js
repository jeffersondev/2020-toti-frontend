const novaTarefaInput = document.querySelector("#new-task")
const botaoAdicionar = document.querySelector("#add-task-button")
const listaDeTarefas = document.querySelector(".task-list")

function adicionarTarefa(event) {
    if (novaTarefaInput.value === "") {
        return;
    }
    const novoItem = document.createElement("li")
    novoItem.textContent = novaTarefaInput.value
    novoItem.classList.add("task-list__item")
    listaDeTarefas.appendChild(novoItem)
    novaTarefaInput.value = ""
    novaTarefaInput.focus()
}

botaoAdicionar.addEventListener("click", adicionarTarefa)