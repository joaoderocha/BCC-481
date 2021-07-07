const imagesArray = [
  "images.jpeg",
  "girl.jpg",
  "meme1.png",
  "thismeme.jpg",
  "meme2.jpg",
];

const prefix = "images";

let currentPosition = 0;

function getNextPosition() {
  if (currentPosition < imagesArray.length - 1) {
    return currentPosition + 1;
  }

  return 0;
}

function onClick() {
  currentPosition = getNextPosition();

  const imagem = document.querySelector("img");
  imagem.src = `${prefix}/${imagesArray[currentPosition]}`;
}

const button = document.querySelector("button");
button.addEventListener("click", onClick);
