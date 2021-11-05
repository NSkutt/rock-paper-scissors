const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
	
const ansArea = document.querySelector(".result");
	
	
	rock.addEventListener("click", () => {
		game("rock");
		});

	paper.addEventListener("click", () => {
		game("paper");
		});

	scissors.addEventListener("click", () => {
		game("scissors");
		});
function game (playerSelection){
	const choices = ["rock", "paper", "scissors"];
	let computerSelection = choices[Math.floor(Math.random() * choices.length)];
//Win text V
	let win = `You win, ${playerSelection} beats ${computerSelection}!`;
	if (playerSelection == computerSelection){
	//TIE RESULT
	ansArea.innerText = `It's a tie! You both picked ${playerSelection}!`;
	ansArea.setAttribute("id", "");
	}else if(playerSelection == "rock" && computerSelection == "scissors"){
	//WIN 1
	ansArea.innerText = win;
	ansArea.setAttribute("id", "victory");
	}else if(playerSelection == "paper" && computerSelection == "rock"){
	//WIN 2
	ansArea.innerText = win;
	ansArea.setAttribute("id", "victory");
	}else if(playerSelection == "scissors" && computerSelection == "paper"){
	//WIN 3
	ansArea.innerText = win;
	ansArea.setAttribute("id", "victory");
	}else{
	//Loss
	ansArea.innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
	ansArea.setAttribute("id", "defeat");
	};
}
