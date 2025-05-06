let alunos = [];

function adicionarAluno() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const curso = document.getElementById("curso").value;

  if (nome && idade && curso) {
    const aluno = {
      nome,
      idade: parseInt(idade),
      curso
    };

    alunos.push(aluno);
    mostrarAlunos();

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("curso").value = "";
  } else {
    alert("Preencha todos os campos!");
  }
}

function removerAluno(index) {
  alunos.splice(index, 1);
  mostrarAlunos();
}

function mostrarAlunos() {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  alunos.forEach((aluno, index) => {
    lista.innerHTML += `
      <div class="taskItem">
        <div class="taskText">
          <strong>${aluno.nome}</strong>, ${aluno.idade} anos - ${aluno.curso}
        </div>
        <button class="removeBtn" onclick="removerAluno(${index})">−</button>
      </div>
    `;
  });
}

