
const motivaciones = [
  "¡Eres brillante, Flo!",
  "¡Vamos Flo que tú puedes!",
  "¡Florencia, Florencia!!!!",
  "¡Eres Hijita de Papito!",
  "¡Súper bien Flo! ¡Sigue así!"
];

const stickers = [
  "🌟", "🎉", "🍭", "🧁", "💖"
];

let num1 = 3;
let num2 = 4;

function nuevaPregunta() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("problema").textContent = `${num1} × ${num2} = ?`;
  document.getElementById("respuesta").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("motivacion").textContent = motivaciones[Math.floor(Math.random() * motivaciones.length)];
  document.getElementById("sticker").textContent = "";
}

function verificar() {
  const respuesta = parseInt(document.getElementById("respuesta").value);
  if (respuesta === num1 * num2) {
    document.getElementById("resultado").textContent = "¡Correcto Hijita!";
    document.getElementById("sticker").textContent = stickers[Math.floor(Math.random() * stickers.length)];
  } else {
    document.getElementById("resultado").textContent = "Concéntrate Flo! 💪";
  }
  setTimeout(nuevaPregunta, 2000);
}

window.onload = nuevaPregunta;
