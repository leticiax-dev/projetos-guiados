let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa === "") {
        mensagem.textContent = "Digite uma tarefa para adicioná-la à sua lista!"
        mensagem.style.color = "red"
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!"
        mensagem.style.color = "green"
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    tarefas.forEach(tarefa => {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    })
}






