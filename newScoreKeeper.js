

const p1 ={
    score: 0,
    button: document.querySelector('#player1Score'),
    display: document.querySelector('#player1Display')
}
const p2 ={
    score: 0,
    button: document.querySelector('#player2Score'),
    display: document.querySelector('#player2Display')
}
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')

let winningscore;
let isGameOver = false;
function updateScores(player,opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score === winningscore){
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;  
              
            
            

        }
        player.display.textContent = player.score;

    }

}

p1.button.addEventListener('click', function(){
    updateScores(p1,p2);
     
})
p2.button.addEventListener('click', function(){
    updateScores(p2,p1)
})
winningScoreSelect.addEventListener('change', function(){
    winningscore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click', reset)



    function reset(){
        isGameOver = false;
        for(let p of [p1,p2]){
            p.score = 0;
            p.display.textContent = 0;
            p.button.disabled = false;
            p.display.classList.remove('has-text-success','has-text-danger')
        }
    }
    