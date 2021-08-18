
let ok=0;

function refresh()
{
    location.reload();
}
       function rockSelector()
       {
           let selector = document.getElementById("rock").value;
           document.getElementById("rock").addEventListener("click", playRound("rock",computerSelection), {
          
        });
    }
        
       function paperSelector()
       {
          
           let selector = document.getElementById("paper").value;
           document.getElementById("paper").addEventListener("click", playRound("paper",computerSelection), {
          
        });
           
       }
       function scissorsSelector()
       {
           let selector = document.getElementById("scissors").value;
           console.log("primu",typeof(selector));
           selector.toString();
           console.log("doi",typeof(selector));
           document.getElementById("scissors").addEventListener("click", playRound("scissors",computerSelection), {
          
    });
           
   }
        function computerPlay()
        {
            const array = ["Rock" , "Paper", "Scissors"];
            let selection = array[Math.floor(Math.random()* array.length)];
            return selection;
        }
        let scorePlayer = 0;
        let scoreComputer = 0;
        let round = 0;
        

        function playRound(playerSelection, computerSelection)
        {
        
        const lowerCasePlayer = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        const lowerCaseComputer = computerSelection.toLowerCase();
        
           console.log(playerSelection);
           console.log(computerSelection);
          
           
       
           switch(lowerCasePlayer)
           {
               case "rock":
                   if(lowerCaseComputer == "paper" && ok==0)
                   {
                  
                    document.querySelector("#results").innerHTML = `Congratulations, you won this round. The computer chose ${lowerCaseComputer}`;
                    document.querySelector("#choice-pic").src = "images/download.jpeg";
                    scorePlayer++;
                    document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`;
                    round++;
                    document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                
                    break;
                   }
                    else if(lowerCaseComputer == "rock" && ok==0)
                    {
                
                    document.querySelector("#results").innerHTML = `It's a tie. The computer chose ${lowerCaseComputer}`;
                    document.querySelector("#choice-pic").src = "images/dwayne-the-rock-johnson-gettyimages-1061959920.jpg";
                    document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`;
                    round++;
                    document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                    
                    break;
                    }
                    else if(lowerCaseComputer == "scissors" && ok==0)
                    {
                  
                    document.querySelector("#results").innerHTML = `You lost this round.The computer chose ${lowerCaseComputer}`;
                    document.querySelector("#choice-pic").src = "images/depp.jpg";
                    document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`
                    
                    scoreComputer++;
                    document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`
                    round++;
                    document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                    break;
                    }
                  

                case "paper":
                if(lowerCaseComputer == "rock" && ok==0)
                {
            
                document.querySelector("#results").innerHTML = `Congratulations, you won this round. The computer chose ${lowerCaseComputer}`;
                document.querySelector("#choice-pic").src = "images/dwayne-the-rock-johnson-gettyimages-1061959920.jpg";
                scorePlayer++;
                document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`
                round++;
                document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                break;
                }
                else if(lowerCaseComputer == "paper" && ok==0)
                {
               
                document.querySelector("#results").innerHTML = `It's a tie. The computer chose ${lowerCaseComputer}`;
                document.querySelector("#choice-pic").src = "images/download.jpeg";
                document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`
                round++;
                document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                break;
                }
                else if(lowerCaseComputer == "scissors" && ok==0)
                {
                  
                    document.querySelector("#results").innerHTML = `You lost this round.The computer chose ${lowerCaseComputer}`;
                    document.querySelector("#choice-pic").src = "images/depp.jpg";
                    scoreComputer++;
                    document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`
                    round++;
                    document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                    break;
                }
                 

                case "scissors":
                if(lowerCaseComputer == "paper" && ok==0)
                {
                document.querySelector("#results").innerHTML = `Congratulations, you won this round. The computer chose ${lowerCaseComputer}`;
                document.querySelector("#choice-pic").src = "images/download.jpeg";
                scorePlayer++;
                document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`
                round++;
                document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                break;
                }
                else if(lowerCaseComputer == "scissors"  && ok==0)
                {
                document.querySelector("#results").innerHTML = `It's a tie. The computer chose ${lowerCaseComputer}`;
                document.querySelector("#choice-pic").src = "images/depp.jpg";
                round++;
                document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                break;
                }
                else if(lowerCaseComputer =="rock"  && ok==0)
                {
                    document.querySelector("#results").innerHTML = `You lost this round.The computer chose ${lowerCaseComputer}`;
                    document.querySelector("#choice-pic").src = "images/dwayne-the-rock-johnson-gettyimages-1061959920.jpg";
                    scoreComputer++;
                    document.querySelector("#score").innerHTML =`Score: You ${scorePlayer} Computer ${scoreComputer}`
                    round++;
                    document.querySelector("#rounds").innerHTML =`Round: ${round}`;
                    break;
                }
                
                   
                default: 
                 console.log("Please choose between rock, paper and scissors. Check your spelling");
                 


           }
           if(scorePlayer>=5 || scoreComputer>=5 )
        {
            ok=1;
            document.querySelector("#new-game").style.visibilty="visible";
            if(scorePlayer > scoreComputer)
            document.querySelector("#results").innerHTML =`The overall winner of this 5 game round is the Player with a score of ${scorePlayer} to ${scoreComputer}`;
            else if( scoreComputer > scorePlayer)
            document.querySelector("#results").innerHTML =`The overall winner of this 5 game round is the Computer with a score of ${scoreComputer} to ${scorePlayer}`;
            else
            console.log("It's a tie");
            return;
        }
           console.log("Scorul e: ",scorePlayer," - ",scoreComputer);
          
        }

        let playerSelection;
        let computerSelection;

       
        function game(keepGoing)
        {
        let round =0;
            console.log("Runda ",++round);
            // console.log("Keepgoing e ",keepGoing);
         
        
        if(scoreComputer+scorePlayer>=5)
        {
            if(scorePlayer > scoreComputer)
            console.log(`The overall winner of this 5 game round is the Player with a score of ${scorePlayer} to ${scoreComputer}`);
            else if( scoreComputer > scorePlayer)
            console.log(`The overall winner of this 5 game round is the Computer with a score of ${scoreComputer} to ${scorePlayer}`);
            else
            console.log("It's a tie");
        }
        

        }
        let keepGoing=5;

        // let computerSelection = computerPlay();
         game(keepGoing);
           

        // playRound("RocK","pAPer");

    // playRound(playerSelection,computerSelection);

   
    