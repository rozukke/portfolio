const term = document.getElementById("term");
const caret = document.getElementById("caret");
const termBacking = document.getElementById("term-backing");

let bufferBefore = "";
let bufferAfter = "";

function updateTerminal() {
  term.firstChild.innerHTML = bufferBefore;
  term.children[2].innerHTML = bufferAfter.slice(1, bufferAfter.length) ?? "";
  caret.innerHTML = bufferAfter[0] ?? " ";
}

termBacking.addEventListener("keydown", (e) => {
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
  } else if (e.key === "Enter") {
    const command = bufferBefore + bufferAfter;
    doCommand(command);
    bufferBefore = "";
    bufferAfter = "";
  }
  updateTerminal();
  e.preventDefault();
});

function doCommand(command) {
  switch (command) {
    default:
      alert("Not implemented!");
      break;
  }
}

term.addEventListener("click", () => termBacking.focus());

updateTerminal();
termBacking.focus();
