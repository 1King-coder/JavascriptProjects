const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    };
});

const criaBtnDeletar = (li) => {
    li.innerHTML += ' ';
    const btnDeletar = document.createElement('button');
    btnDeletar.innerText = 'Deletar';
    btnDeletar.setAttribute('class', 'deletar')
    btnDeletar.setAttribute('title', 'Deletar essa tarefa')
    li.appendChild(btnDeletar);
};

const limpaImput = () => {
    inputTarefa.value = '';
    inputTarefa.focus();
};

const criaLi = () => {
    const li = document.createElement('li')
    return li;
}

const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaImput();
    criaBtnDeletar(li);
    salvaTarefas();
};

const salvaTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Deletar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    };

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

const adicionaTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    };
}
adicionaTarefasSalvas();

btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaImput();
});

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('deletar')) {
        el.parentElement.remove();
        salvaTarefas();
    };
});

