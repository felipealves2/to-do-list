//  [1]  Reconhecer quando o botão de enviar for clicado
//  [2]  Pegar o texto do input:
//  [3] Colocar essa tareva na lista de tarefas ou seja criar uma li
//  [4] deletar a tarefa da lista de tarefas


let contador = 0;


function adicionarTarefa() {

    let valorInput = document.querySelector("#taskInput").value;

    let litItem = document.createElement("li");



    let textoTarefa = document.createElement("span");
    textoTarefa.className = "task-text";
    textoTarefa.textContent = valorInput;

    let botaoRemover = document.createElement("span");
    botaoRemover.className = "remove-task";
    botaoRemover.textContent = "❌";
    botaoRemover.onclick = function () {
        deletarTarefa(this);
    };

    litItem.append(textoTarefa, botaoRemover);

    document.querySelector("ul#taskList").appendChild(litItem);

    document.querySelector("#taskInput").value = "";


    contador++;

    if (contador == 1) {
        document.querySelector("#taskCounter").textContent = contador + " tarefa";
    } else {
        document.querySelector("#taskCounter").textContent = contador + " tarefas";
    }

    atualizarEstadoVazio();
}


function deletarTarefa(li) {
    li.parentElement.remove();

    contador--;

    if (contador == 1) {
        document.querySelector("#taskCounter").textContent = contador + " tarefa";
    } else {
        document.querySelector("#taskCounter").textContent = contador + " tarefas";
    }

    atualizarEstadoVazio();
}


function atualizarEstadoVazio() {

    let lista = document.querySelector("#taskList");
    let emptyState = document.querySelector("#emptyState");

    if (lista.children.length === 0) {

        emptyState.style.display = "block";

    } else {

        emptyState.style.display = "none";

    }

}





