const term = document.getElementById("term");
const caret = document.getElementById("caret");

let bufferBefore = "";
let bufferAfter = "";

function updateTerminal() {
  term.firstChild.innerHTML = bufferBefore;

  // Shitty caret update logic;
  term.children[2].innerHTML = bufferAfter.slice(1, bufferAfter.length) ?? "";
  caret.innerHTML = bufferAfter[0] ?? " ";
}

term.addEventListener("keydown", (e) => {
  if (e.key.length === 1) {
    bufferBefore += e.key;
  } else if (e.key === "Backspace") {
    bufferBefore = bufferBefore.slice(0, -1);
  } else if (e.key === "ArrowLeft") {
    bufferAfter = (bufferBefore.at(-1) ?? "") + bufferAfter;
    bufferBefore = bufferBefore.slice(0, -1) ?? "";
  } else if (e.key === "ArrowRight") {
    bufferBefore = bufferBefore + (bufferAfter[0] ?? "");
    bufferAfter = bufferAfter.slice(1, bufferAfter.length) ?? "";
  }
  updateTerminal();
  e.preventDefault();
});

term.addEventListener("click", () => term.focus());

updateTerminal();
term.focus();
