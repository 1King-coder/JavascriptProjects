axios('pessoas.json')
  .then(resposta => carregaElNaPag(resposta.data))

const thead = document.createElement('thead');
const tr = () => document.createElement('tr');
const th = () => document.createElement('th');




function carregaElNaPag(json) {
  const table = document.createElement('table');
  const th1 = th();
  th1.innerHTML = 'Nome';
  
  const th2 = th();
  th2.innerHTML = 'Idade';
  
  const th3 = th();
  th3.innerHTML = 'Salario';
  
  const th4 = th();
  th4.innerHTML = 'CPF';
  
  
  
  thead.appendChild(tr().appendChild(th1))

  thead.appendChild(tr().appendChild(th2))
  
  thead.appendChild(tr().appendChild(th3))

  
  thead.appendChild(tr().appendChild(th4))

  table.appendChild(thead)

 
  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = pessoa.cpf;
    tr.appendChild(td4);

    table.appendChild(tr);
  };

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table)
};

