import Game from "./Game.js";
import GameView from "./GameView.js";

console.log("Hello");

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

const onTileClick = (i) => {
  game.makeMove(i);
  gameView.updateBoard(game);
  game.nextTurn();
};

const newGame = () => {
  game = new Game();
};

document.querySelector(".restart").addEventListener("click", () => {
  newGame();
  gameView.updateBoard(game);
});
