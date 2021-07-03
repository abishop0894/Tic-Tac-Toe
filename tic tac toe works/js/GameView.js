export default class GameView {
  constructor() {
    console.log("Init Game View");
  }

  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombination();

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      tile.textContent = game.board[i];
      tile.classList.remove("tile-winner");

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
      }
    }
  } 

  updateTurn(game) {
    let playerX = document.querySelector(".playerX");
    let playerO = document.querySelector(".playerO");

    if (game.turn == "X") {
      playerO.classList.remove("active");
      playerX.classList.add("active");
    } else {
      playerX.classList.remove("active");
      playerO.classList.add("active");
    }
  }
}


