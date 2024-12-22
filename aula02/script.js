function adicionarTarefa() {
  // recebe valor do input do usuário
  let inpTarefa = document.getElementById("inpTarefa");
  let tarefa = inpTarefa.value;

  // cria um novo item (li) e insere na lista não ordenada (ul)
  let listaTarefas = document.getElementById("listaTarefas");
  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = tarefa;
  listaTarefas.appendChild(novaTarefa);

  // msg de tarefa adicionada
  let msg = "Tarefa adicionada com sucesso :)";
  document.getElementById("msg").textContent = msg;

  // limpa o input do usuário e coloca o foco no input
  inpTarefa.value = "";
  inpTarefa.focus();
}

// fazer o botão funcionar ao clicar na tecla Enter
document
  .getElementById("inpTarefa")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Verifica se a tecla pressionada é "Enter"
      adicionarTarefa(); // Chama a função para adicionar a tarefa
    }
  });
