const imagesArray = [
  { path: "fechada.jpg", nome: "porta fechada" },
  { path: "aberta.jpg", nome: "porta aberta" },
];

const prefix = "images";

let currentPosition = 0;
let contador = 0;

function getNextPosition() {
  if (currentPosition < imagesArray.length - 1) {
    return currentPosition + 1;
  }

  return 0;
}

function onClick() {
  const [divImagem, divNome, divContador, divTimestamp] =
    document.querySelectorAll("#porta div");
  currentPosition = getNextPosition();

  atualizaImagem(divImagem, currentPosition);
  atualizaNome(divNome, currentPosition);
  atualizaContador(divContador);
  atualizaTimestamp(divTimestamp);
}

function atualizaNome(divNome, currentPosition) {
  divNome.textContent = imagesArray[currentPosition].nome;
}

function atualizaImagem(divImagem, currentPosition) {
  const imagem = divImagem.querySelector("img");
  imagem.src = `${prefix}/${imagesArray[currentPosition].path}`;
}

function atualizaContador(divContador) {
  contador += 1;
  divContador.textContent = contador;
}

function atualizaTimestamp(divTimestamp) {
  const timestamp = new Date();

  divTimestamp.textContent = timestamp;
}

const imagem = document.querySelector("#conteudo");
imagem.addEventListener("click", onClick);
