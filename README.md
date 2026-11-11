# Jogo de Adivinhação

Jogo de adivinhação de números feito com **HTML5, CSS3 e JavaScript puro**, sem bibliotecas ou frameworks. O computador sorteia um número de 1 a 100 e o jogador tem 10 tentativas para descobri-lo, recebendo dicas a cada chute.

## Como o jogo funciona

1. Ao abrir a página, um número secreto entre 1 e 100 é sorteado.
2. O jogador digita um palpite e clica em **Chutar** (ou aperta Enter).
3. O jogo responde se o número secreto é **maior** ou **menor** que o palpite.
4. A partida termina quando o jogador **acerta** ou usa as **10 tentativas**. Em caso de derrota, o número secreto é revelado.
5. O botão **Jogar de novo** reinicia a partida.

## Funcionalidades

- Geração de número aleatório com `Math.random()`
- Validação do palpite: valores vazios, textos ou fora do intervalo de 1 a 100 mostram um aviso e **não consomem tentativa**
- Contador de tentativas restantes atualizado a cada jogada
- Dicas de "maior" e "menor" com estruturas condicionais (`if`, `else if`, `else`)
- Fim de jogo com bloqueio dos controles e opção de reiniciar
- Atalho de teclado: tecla Enter para chutar
- Layout simples e responsivo, com estilização em CSS

## Tecnologias

- HTML5 semântico (`header`, `main`, `section`, `footer`)
- CSS3 (reset, seletores, pseudo-classes, box model)
- JavaScript (variáveis, funções, condicionais, eventos e manipulação do DOM)

## Como executar

Não precisa instalar nada.

1. Baixe ou clone o repositório:

```bash
git clone https://github.com/Gabriel-N-Martins/jogo-adivinhacao.git
```

2. Abra o arquivo `index.html` no navegador.

## Estrutura do projeto

```
jogo-adivinhacao/
├── index.html   # estrutura da página
├── styles.css   # estilos
└── script.js    # lógica do jogo
```

## O que este projeto pratica

- Estado de uma aplicação com variáveis (número secreto, tentativas restantes, fim de jogo)
- Conversão e validação de dados digitados pelo usuário (`parseInt`, `isNaN`)
- Tomada de decisão com condicionais
- Separação do código em funções com responsabilidade única (`gerarNumeroSecreto`, `chutar`, `iniciarJogo`, `encerrarJogo`)
- Eventos (`click` e `keydown`) e atualização dinâmica da página

## Autor

**Gabriel**, estudante de Ciência da Computação no UNASP. Comecei na programação com Python em um curso da EBAC e hoje estudo desenvolvimento front-end, com interesse de longo prazo em Machine Learning e Inteligência Artificial.

- GitHub: [@Gabriel-N-Martins](https://github.com/Gabriel-N-Martins)

Projeto desenvolvido como atividade prática do curso de Front-End da EBAC.
