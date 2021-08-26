let score =[0,1];
    var turn;

    //team details
    var team1 = {
        name: "Argentina",
        goals: [],
        score: 0,
    }
    //team details
    var team2 = {
        name: "Portugal",
        goals: [],
        score: 0,
    }
    window.onload = () => {
        // decide who is gonna shoot first
        selectTurn();
        //update the text on the button
        updateButtonText();
        //update the initial score
        updateScore();
        //update team names
        updateNames();
    }
    let selectTurn = () => {
        turn = Math.round(Math.random())+1;
      
   }
   let updateButtonText = () => {
    var button = document.getElementById("Strike-button");
    var result = document.getElementById("result");
    result.style.visibility = "";
    // check if the game is over or not
    if(team1.goals.length == 3 && team2.goals.length == 3){
        button.remove();
    // check who wins?
    result.textContent = team1.score === team2.score ? `Match Draw` : `${team1.score>team2.score? team1.name: team2.name} Wins`;
    }
    else {
        turn = team1.goals.length === 3? 2: team2.goals.length === 3? 1: turn;
        button.textContent = `${turn === 1 ? team1.name : team2.name} Shoot`;
    }
}
let updateScore = () => {
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns();
}
let updateNames = () => {
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;

}
var ButtonClick = () => {
    var goals = score[Math.floor(Math.random()*score.length)];

    if(turn === 1){
        team1.goals.push(goals);
        team1.score = calculateScore(team1.goals);
    }
    else{
        team2.goals.push(goals);
        team2.score = calculateScore(team2.goals);
    }
    updateButtonText();
    updateScore();

    }
    var calculateScore = (goals) => {
        return goals.map(num => { return num =='0'? 0: num;     
        }).reduce((total,num) => total+num);

    } 
    var updateRuns = () => {
        var teamOne = document.getElementById("team-1-round-scores").children;
        var teamTwo = document.getElementById("team-2-round-scores").children;
        team1.goals.forEach((goals,index) => {
           teamOne[index].textContent = goals;    

        })
        team2.goals.forEach((goals,index) => {
            teamTwo[index].textContent = goals;    
  

         })

    }
