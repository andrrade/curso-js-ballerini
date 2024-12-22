function adicionarTarefa() {
  // recebe valor do input do usuário
  const inpTarefa = document.getElementById("inpTarefa");
  let tarefa = inpTarefa.value.trim();

  const msg = document.getElementById("msg");

  // condicionais
  if (tarefa == "") {
    let msgErro = "Erro :( Digite uma tarefa para adicioná-la à sua lista!";
    msg.textContent = msgErro;
    msg.style.color = "#a34743";
  } else {
    // msg de tarefa adicionada
    let msgSucesso = "Tarefa adicionada com sucesso :)";
    msg.textContent = msgSucesso;
    msg.style.color = "#28a745";

    // cria um novo item (li) e insere na lista não ordenada (ul)
    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
  }

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
