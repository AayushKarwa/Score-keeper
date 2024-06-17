const player1Display = document.querySelector('#player1Display')
const player2Display = document.querySelector('#player2Display')
const player1Button = document.querySelector('#player1Score')
const player2Button = document.querySelector('#player2Score')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')
let p1score = 0;
let p2score = 0;
let winningscore;
let isGameOver = false;
player1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1score+=1
        if(p1score === winningscore){ 
    
            isGameOver = true;
            player1Display.classList.add('has-text-success')
            player2Display.classList.add('has-text-danger')
            player1Button.disabled = true;
            player2Button.disabled = true;
            
        }
        player1Display.textContent = p1score;

     }
    
})
player2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2score+=1
        if(p2score === winningscore){ 
    
            isGameOver = true;
            player2Display.classList.add('has-text-success')
            player1Display.classList.add('has-text-danger')
            player1Button.disabled = true;
            player2Button.disabled = true;

            }
            player2Display.textContent = p2score;

     }
})
winningScoreSelect.addEventListener('change', function(){
    winningscore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click', reset)

    function reset(){
        isGameOver = false;
        p1score = 0;
        p2score = 0;
        player1Display.textContent = p1score;
        player2Display.textContent = p2score;
        player1Display.classList.remove('has-text-success','has-text-danger')
        player2Display.classList.remove('has-text-danger','has-text-success')
        player1Button.disabled = false;
        player2Button.disabled = false;
    }