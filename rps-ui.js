let wins;
let losses;
const start = document.querySelector("#starter");
	start.addEventListener("click", () => {
		play("playing");
		});
												
function play(newClass){
	wins = 0;
	losses=0;
	const cover = document.querySelector("#starter");
	cover.setAttribute("class", `${newClass}`);
	
	const counter = document.querySelector("#round");
	counter.innerText = `Win: ${wins} Loss:${losses}`;
	
const endgame = document.querySelector("#replay");	

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
	wins++;
	}else if(playerSelection == "paper" && computerSelection == "rock"){
	//WIN 2
	ansArea.innerText = win;
	ansArea.setAttribute("id", "victory");
	wins++;
	}else if(playerSelection == "scissors" && computerSelection == "paper"){
	//WIN 3
	ansArea.innerText = win;
	ansArea.setAttribute("id", "victory");
	wins++
	}else{
	//Loss
	ansArea.innerText = `You lose! ${computerSelection} beats ${playerSelection}!`;
	ansArea.setAttribute("id", "defeat");
	losses++;
	};
		counter.innerText = `Win: ${wins} Loss:${losses}`;

function final(){
	rock.setAttribute("class", "end");
	paper.setAttribute("class", "end");
	scissors.setAttribute("class", "end");
	//HAHAAAAAAaaaaaa Finally got the bugs worked out
	cover.setAttribute("class", "cover end");
	setTimeout(function(){
	endgame.setAttribute("class","cover");
	cover.setAttribute("class", "playing");
	}, 1750);
};
	if(losses == 5){
	cover.innerText = "You lose! Better luck next time. Try again?"
	final();
	};
	if(wins == 5){
	cover.innerText = "Congratulations, you win! Play Again?";
	final();
	};
	const again = document.getElementById("yes");
	again.addEventListener("click", reload);
	function reload(){location.reload()};
	const quit = document.getElementById("no");
	quit.addEventListener("click", leave);
	function leave(){
	cover.innerText = "Come back soon!";
	endgame.setAttribute("class", "playing");
	cover.setAttribute("class", "cover end");
	};
	
	};
}
