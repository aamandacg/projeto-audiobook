const nomeCapitulo = document.getElementById("capitulo"); //getElementById: recupere um elemento a partir do ID dele.
const audio = document.getElementById("audio-capitulo"); // CONST: Usar quando eu não for mudar em nenhum momento a variável.
const botaoPlayPause = document.getElementById("play-pause"); 
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const quantidadeCapitulos = 10;
let taTocando = false; //LET: Usar se eu for em algum momento alterar a varíavel (adicionar ou remover informações).
let capitulo = 1;

function tocarFaixa() { // // function: funcionalidade que vou deixar preparada e usar quando for conveniente.
  botaoPlayPause.classList.remove("bi-play-circle-fill"); // O elemento 'botão play' tem que perder a classe 'sumir' no momento que a musica começar a tocar.
  botaoPlayPause.classList.add("bi-pause-circle-fill"); // O elemento 'botão pause' vai aparecer no momento que a música começar a tocar. 
  audio.play();
  taTocando = true;
}

function pausarFaixa() {
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill"); 
  audio.pause();
  taTocando = false;
}

function tocarOuPausarFaixa() { 
  if (taTocando === true) {
    pausarFaixa();
  } else { 
    tocarFaixa();
  }
}

function capituloAnterior() {
  if (capitulo === 1) {
    capitulo = quantidadeCapitulos;
  } else {
    capitulo -= 1;
  }
  audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Capítulo " + capitulo;
  tocarFaixa();
}

function proximoCapitulo() {
  if (capitulo < quantidadeCapitulos) {
    capitulo += 1;
  } else {
    capitulo = 1;
  }
  audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Capítulo " + capitulo;
  tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);
