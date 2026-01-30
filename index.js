const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn  = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const  winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6], 
    [0,3,6 ]

];

function initGame(){
currentPlayer = "X"
gameGrid = ["","","","","","","","",""]

//ui empty kre

boxes.forEach((box, index)=>{
    box.innerHTML= "";
    boxes[index].style.pointerEvents="all";

})

newGameBtn.classList.remove("active");
gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


initGame();  


function checkGmaeOver(){
    let answer  = "";
    
}
 
function swapTurn(){
    if(currentPlayer =="X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }

    //UI update
    gameInfo.innerText = `current player - ${currentPlayer}`;

}


function handleClick(index){
    if(gameGrid[index]== ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index]= currentPlayer;

        boxes[index].style.pointerEvents = "none";
        //swap 
        swapTurn();
        //check ifwin 
        checkGmaeOver();

    }
}

boxes.forEach((box, index) =>{
      box.addEventListener("click", ()=>{
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);

