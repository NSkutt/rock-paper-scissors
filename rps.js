let win
//Start game
function game() {
  win=0
    for (var i=1; i<=5; i++) {
    console.log("round " + i)
      playRound()
      if (+playerSelection == 0) {i=6; win=undefined}
      }
	function playRound() {
//Receive input
		playerSelection = prompt(`Round ${i}: Rock, paper, or scissors?`)
		if (+playerSelection == 0){alert("Canceled!")} 
		else{
//make sure input is either rock, paper, or scissors
		let rock = playerSelection.match(/^rock$/i)
		let paper = playerSelection.match(/^paper$/i)
		let scissors = playerSelection.match(/^scissors$/i)
			if (playerSelection == rock || paper || scissors){
			//console.log(playerSelection)
//Randomly choose rock, paper, or scissors for AI
				const choices = ["rock", "paper", "scissors"]
				let computerSelection = choices[Math.floor(Math.random() * choices.length)]
				//console.log(computerSelection)
//Compare AI choice with player choice
//figure out how to make rock beat paper beat scissors beat rock
//Declare winner
				if (playerSelection==rock && computerSelection == "scissors"){
					console.log("%cRock beats scisssors! You win!", "font-size:15px; background:gold"); win++
				console.log(win)	}else if (playerSelection==rock && computerSelection=="paper"){
					console.log("%cPaper beats rock! You lose!", "font-size:15px; background:red; color:#bada55"); win--;
				console.log(win)	}else if(playerSelection==rock && computerSelection=="rock"){
					console.log("%cYou both picked rock! It's a tie!", "background:green; font-size:15px; color:#ffdead");
			console.log(win)		}else if(playerSelection==paper && computerSelection=="rock"){
     					console.log("%c Paper beats rock! You win!", "font-size:15px; background:gold"); win++
			console.log(win)		}else if(playerSelection==paper && computerSelection=="scissors"){
					console.log("%c Scissors beat paper! You lose!", "font-size:15px; background:red; color:#bada55"); win--;
			console.log(win)		}else if(playerSelection==paper && computerSelection=="paper"){
					console.log("%cYou both chose paper! It's a tie!", "font-size:15px; background:green; color:#ffdead");
			console.log(win)		}else if(playerSelection==scissors && computerSelection=="paper"){
					console.log("%c Scissors beat paper! You win!", "font-size:15px; background:gold"); win++;
			console.log(win)		}else if(playerSelection==scissors && computerSelection=="rock"){
					console.log("%c Rock beats scissors! You lose!", "font-size:15px; background:red; color:#bada55"); win--;
			console.log(win)		}else if(playerSelection==scissors && computerSelection=="scissors"){
				;	console.log("%cYou both picked scissors! It's a tie!", "font-size:15px; background:green; color:#ffdead")
			console.log(win)		}else {console.log("%c Unknown error! Abort! Abort!", "font-size:30px; background:red")} 
//Mark Round winner


//exit (empty string/cancel)
			} else {
			alert("Invalid entry! Please pick rock, paper, or scissors!"); i--
			}
		}
   }
console.log("%c End of loop", "background:red; font-size:15px")
//Declare Game winner
if (win >= 1){console.log("%c You win!", "font-size:20px; color:gold")}
else if(win===0){console.log("%c It's a tie!", "font-size:20px; color: green")}
else if(win == undefined){console.log("Exited")}
else {console.log("%c You lost, better luck next time", "font-size:20px; background: red; color:gold")}
}
