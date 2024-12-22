function adicionarTarefa() {
  //   let msg = "Tarefa adicionada com sucesso!";
  //   document.getElementById("msg").textContent = msg;

  let inpTarefa = document.getElementById("inpTarefa");
  let tarefa = inpTarefa.value;
  //   console.log(tarefa);

  document.getElementById("msg").textContent = tarefa;
}
