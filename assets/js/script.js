// Rock paper Scissor Game

class Move {
	constructor() {
		this.score = 0;
	}
}

const state = {};

const initialize = () => {
	state.player = new Move();
	state.comp = new Move();
	// state.player.score = 0;
	// state.comp.score = 0;
	decisionMaker("init");
	readScore();
};

const checkWinner = () => {
	setTimeout(() => {
		if (state.player.score === 10) {
			confirm("Player Wins! Game has been Initialized");
			initialize();
		} else if (state.comp.score === 10) {
			confirm("Computer Wins! Game has been Initialized");
			initialize();
		} else {
			return null;
		}
	}, 10);
};

const decisionMaker = (name) => {
	const el = document.querySelector(".game__decision");
	el.innerHTML = "";
	let markup;
	if (name === "draw") {
		markup = `It is a draw! Play Again`;
	} else if (name === "init") {
		markup = `VS`;
	} else {
		markup = ` ${name} won the game!!`;
	}
	el.insertAdjacentHTML("afterbegin", markup);
};

const readScore = () => {
	document.querySelectorAll(".score").forEach((element, index) => {
		element.innerHTML = "";
		let markup;
		index === 1 ? (markup = `${state.player.score}`) : (markup = `${state.comp.score}`);
		element.insertAdjacentHTML("afterbegin", markup);
	});
};

const updateScore = (player, comp) => {
	if ((player === "scissor" && comp === "paper") || (player === "paper" && comp === "rock") || (player === "rock" && comp === "scissor")) {
		decisionMaker("Player");
		state.player.score += 1;
	} else if (player === comp) {
		decisionMaker("draw");
	} else {
		decisionMaker("Computer");
		state.comp.score += 1;
	}
};

const updateView = (player, comp) => {
	computer_img = document.querySelector(".comp img");
	player_img = document.querySelector(".player img");
	computer_img.setAttribute("src", `assets/game-${comp}.png`);
	player_img.setAttribute("src", `assets/game-${player}.png`);
	console.log;
};

// Controller to handle player and Computer Moves
initialize();

// Choose a computer move
const possibleMoves = ["rock", "paper", "scissor"];
const compMove = (move) => {
	return possibleMoves[move];
};

document.querySelector(".choose__move").addEventListener("click", (e) => {
	const playerMove = e.target.alt;
	if (playerMove) {
		// Choose a computer move
		const computer = compMove(Math.round(Math.random() * 2));
		updateScore(playerMove, computer);
		readScore();
		updateView(playerMove, computer);
		checkWinner();
	}
});

// Output Player Move
