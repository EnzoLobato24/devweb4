# Arrays, DOM e Eventos em JavaScript

Resolução dos desafios práticos da aula de **Arrays, DOM e Eventos**. 


## Bloco 1 – Métodos de array

| Método | Função | Retorno |
|--------|--------|---------|
| `forEach` | Executa uma função para cada item. Usado para "efeitos", como imprimir. | `undefined` |
| `map` | **Transforma** cada item e devolve um novo array do mesmo tamanho (ex.: nomes em maiúsculas). | Novo array |
| `filter` | **Seleciona** apenas os itens que passam em um teste (ex.: preços acima de 20). | Novo array, possivelmente menor |
| `reduce` | **Acumula** todos os itens em um único valor (ex.: soma dos preços). | Um valor |

Nenhum desses métodos altera o array original (`map`, `filter` e `reduce` devolvem resultados novos).

## Bloco 2 – Manipulação do DOM

A lógica segue três passos:

1. **Selecionar** elementos: `querySelector` (o primeiro que combina) e `querySelectorAll` (todos).
2. **Criar e inserir**: `createElement` cria o elemento, `textContent` define o texto e `append` o coloca na página. O `innerHTML` insere trechos de HTML em forma de texto.
3. **Estilizar por classes**: `classList.add`, `classList.contains` e `classList.toggle` ligam e desligam classes CSS (`destaque`, `feito`), mantendo o estilo no CSS e a lógica no JavaScript.

## Bloco 3 – Eventos e Event Delegation

Com `addEventListener`, a página reage a `click`, `mouseover`, `keyup` e `submit`. No formulário, `e.preventDefault()` impede o recarregamento da página, e `.trim()` evita adicionar tarefas vazias.

### Por que usar Event Delegation?

Em vez de colocar um listener em cada `<li>`, coloca-se **um único listener na `<ul>`** e usa-se `e.target` para descobrir qual item foi clicado. Isso traz duas vantagens:

- **Performance**: um listener em vez de dezenas ou centenas, o que usa menos memória e simplifica o código.
- **Elementos dinâmicos**: um `<li>` criado depois (por JavaScript ou pelo formulário) **também responde ao clique**, porque o evento sobe (*bubbling*) até a lista, que já tem o listener. Com listeners individuais, cada item novo precisaria receber o seu próprio.

## Arquivos

- `index.html`: estrutura da página e estilos (`.destaque`, `.feito`).
- `app.js`: toda a lógica dos três blocos.
- `README.md`: esta documentação.
