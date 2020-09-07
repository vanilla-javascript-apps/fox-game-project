export function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
}

export function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
}

export function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
}

export const writeModal = (text = "") => {
  document.querySelector(
    ".modal"
  ).innerHTML = `<div class="modal-inner">${text}</div>`;
};
