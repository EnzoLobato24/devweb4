// =====================================================
// Arrays, DOM e Eventos - Desafios práticos
// Abra o index.html no navegador e o Console (F12)
// =====================================================

// ✏️ Troque pelo seu nome:
const MEU_NOME = 'Enzo Lobato';

const titulo = (texto) => console.log(`\n===== ${texto} =====`);

// =====================================================
// BLOCO 1 - ARRAYS E MÉTODOS
// =====================================================
titulo('BLOCO 1 - Arrays e Métodos');

// 1.1 nomes: forEach e map
console.log('\n-- 1.1 nomes: forEach e map --');
const nomes = ['Ana', 'Bruno', 'Carla'];

nomes.forEach((nome) => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log('Nomes em maiúsculas:', nomesMaiusculos);

// 1.2 precos: filter e reduce
console.log('\n-- 1.2 precos: filter e reduce --');
const precos = [10, 25, 40, 5, 60];

const precosAcima20 = precos.filter((preco) => preco > 20);
console.log('Preços acima de 20:', precosAcima20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log('Soma dos preços:', somaPrecos);

// 1.3 produtos: map, filter, reduce e forEach
console.log('\n-- 1.3 produtos --');
const produtos = [
  { nome: 'Caderno', preco: 15 },
  { nome: 'Mochila', preco: 120 },
  { nome: 'Caneta', preco: 4 },
  { nome: 'Calculadora', preco: 49 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
console.log('Nomes dos produtos:', nomesProdutos);

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log('Produtos com preço < 50:', produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log('Soma de todos os preços:', totalProdutos);

produtos.forEach((produto) => console.log(`${produto.nome}: R$ ${produto.preco}`));

// =====================================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// =====================================================
titulo('BLOCO 2 - Manipulação do DOM');

// 2.1 Alterar o h1
console.log('\n-- 2.1 Alterando o título --');
const h1 = document.querySelector('#titulo');
h1.textContent = `Blog do ${MEU_NOME}`;
console.log('Novo título:', h1.textContent);

// 2.2 Parágrafos .texto
console.log('\n-- 2.2 Parágrafos --');
const paragrafos = document.querySelectorAll('.texto');
paragrafos.forEach((p) => console.log(p.textContent));

// 2.3 innerHTML na lista
// Uso "+=" para INSERIR sem apagar os 3 <li> que já estão no HTML
// (eles são necessários no Bloco 3, para a delegação de eventos).
console.log('\n-- 2.3 innerHTML --');
const lista = document.querySelector('#lista');
lista.innerHTML += '<li>Primeiro item</li><li>Segundo item</li>';
console.log('Itens após innerHTML:', lista.querySelectorAll('li').length);

// 2.4 createElement + append
console.log('\n-- 2.4 createElement e append --');
const terceiro = document.createElement('li');
terceiro.textContent = 'Terceiro item';
lista.append(terceiro);

// 2.5 classList.add / contains
console.log('\n-- 2.5 classList --');
terceiro.classList.add('destaque');
console.log('Tem a classe "destaque"?', terceiro.classList.contains('destaque'));

// 2.6 tarefas: forEach criando <li>
console.log('\n-- 2.6 Tarefas --');
const tarefas = ['Estudar JS', 'Fazer exercícios', 'Revisar DOM'];

tarefas.forEach((tarefa) => {
  const li = document.createElement('li');
  li.textContent = tarefa;
  lista.append(li);
});

// Classe "feito" no primeiro <li> da lista
lista.querySelector('li').classList.add('feito');

console.log('Total de itens na lista:', document.querySelectorAll('li').length);

// =====================================================
// BLOCO 3 - EVENTOS E EVENT DELEGATION
// =====================================================
titulo('BLOCO 3 - Eventos e Event Delegation');

// 3.1 click no botão
const botao = document.querySelector('#botao');
botao.addEventListener('click', () => {
  console.log('Clicou!');
});

// 3.2 mouseover no botão
botao.addEventListener('mouseover', () => {
  botao.textContent = 'Pode clicar!';
});

// 3.3 keyup no campo nome
const campoNome = document.querySelector('#nome');
campoNome.addEventListener('keyup', () => {
  console.log('Valor atual:', campoNome.value);
});

// 3.4 Event Delegation: UM único listener na lista
// Cliques nos <li> "borbulham" até a <ul>; e.target diz qual <li> foi clicado.
// Por isso funciona também para <li> criados depois via JavaScript.
lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('feito');
    console.log('Item clicado:', e.target.textContent);
  }
});

// Novo <li> criado via JS depois do listener: o clique nele também funciona
const itemDinamico = document.createElement('li');
itemDinamico.textContent = 'Item criado via JS (clique para testar)';
lista.append(itemDinamico);

// 3.5 Formulário
const formulario = document.querySelector('#formulario');
const campoTarefa = document.querySelector('#tarefa');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // evita recarregar a página

  const texto = campoTarefa.value.trim();
  if (texto === '') return; // campo vazio: não adiciona nada

  const li = document.createElement('li');
  li.textContent = texto;
  lista.append(li);

  campoTarefa.value = '';
  campoTarefa.focus();
});
