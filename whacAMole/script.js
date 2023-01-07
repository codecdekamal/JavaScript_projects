let score = document.querySelector("#score");
const time = document.querySelector(".time");
const squares = document.querySelectorAll(".square");
let yourScore = 0;
let randomSquare;
let Playtime = 60;
function random(){
    squares.forEach((square)=>{
        square.classList.remove("mover")
    })
     randomSquare = Math.floor(Math.random()*squares.length)
    squares[randomSquare].classList.add("mover")
    
}

const setIntervalId = setInterval(random, 1000);

squares.forEach((square)=>{
    square.addEventListener("click",
        ()=>{
            if(squares[randomSquare].id==square.id){
             yourScore++
             console.log(yourScore);
             score.textContent= yourScore
            }
            
        }
    )
})



function timer(){
    Playtime--
    time.textContent = Playtime;
    if(Playtime===0){
        clearInterval(timerId)
        clearInterval(setIntervalId)
        alert(`your score is ${yourScore}`)
        score.textContent= 0;
        Playtime=60;


    }
}


const timerId =  setInterval(timer, 1000);
    
