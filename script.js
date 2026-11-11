// Jogo de Adivinhação - script.js

const MAX_TENTATIVAS = 10;

// Estado do jogo
let numeroSecreto;
let tentativasRestantes;
let jogoAcabou;

// Elementos da página
const inputPalpite = document.getElementById("palpite");
const botaoChutar = document.getElementById("chutar");
const botaoReiniciar = document.getElementById("reiniciar");
const paragrafoMensagem = document.getElementById("mensagem");
const paragrafoTentativas = document.getElementById("tentativas");

// Gera um inteiro aleatório entre 1 e 100
function gerarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

function atualizarTentativas() {
  paragrafoTentativas.textContent = "Tentativas restantes: " + tentativasRestantes;
}

// Prepara (ou reinicia) o jogo
function iniciarJogo() {
  numeroSecreto = gerarNumeroSecreto();
  tentativasRestantes = MAX_TENTATIVAS;
  jogoAcabou = false;

  inputPalpite.value = "";
  inputPalpite.disabled = false;
  botaoChutar.disabled = false;
  botaoReiniciar.hidden = true;
  paragrafoMensagem.textContent = "Faça o seu primeiro chute!";
  atualizarTentativas();
  inputPalpite.focus();
}

function encerrarJogo() {
  jogoAcabou = true;
  inputPalpite.disabled = true;
  botaoChutar.disabled = true;
  botaoReiniciar.hidden = false;
}

// Executada a cada clique em "Chutar"
function chutar() {
  if (jogoAcabou) {
    return;
  }

  // 1. Capturar e converter o palpite (o input sempre devolve string)
  const palpite = parseInt(inputPalpite.value);

  // 2. Validar: precisa ser um número entre 1 e 100
  // (palpite inválido não gasta tentativa)
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    paragrafoMensagem.textContent = "Digite um número válido entre 1 e 100.";
    return;
  }

  // 3. Gastar uma tentativa
  tentativasRestantes--;

  // 4. Comparar com o número secreto
  if (palpite === numeroSecreto) {
    paragrafoMensagem.textContent = "Você acertou!";
    atualizarTentativas();
    encerrarJogo();
    return;
  }

  if (tentativasRestantes === 0) {
    paragrafoMensagem.textContent = "Você perdeu! O número secreto era " + numeroSecreto;
    atualizarTentativas();
    encerrarJogo();
    return;
  }

  if (palpite < numeroSecreto) {
    paragrafoMensagem.textContent = "O número secreto é maior";
  } else {
    paragrafoMensagem.textContent = "O número secreto é menor";
  }

  atualizarTentativas();
  inputPalpite.value = "";
  inputPalpite.focus();
}

// Eventos
botaoChutar.addEventListener("click", chutar);
botaoReiniciar.addEventListener("click", iniciarJogo);
inputPalpite.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    chutar();
  }
});

// Ao carregar a página
iniciarJogo();
