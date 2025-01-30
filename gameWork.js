let boxes = document.querySelectorAll(".boxs");
let msgCon = document.querySelector(".winner-display");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#newGame");
let resetGame = document.querySelector("#reset");

let turnO = true;
let count = 0;

let winningPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        iswinner = checkWinner();
        count++;
        if(count === 9 && !iswinner){
           gamedraw();
        }
    })
})

const checkWinner = () =>{
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disabledbox();
}

const disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const reset = () =>{
    turnO = true;
    count = 0;
    enablebtn();
    msgCon.classList.add("hide");
}

const gamedraw = () =>{
    msg.innerText = `Game is Draw`;
    msgCon.classList.remove("hide");
    disabledbox();
}

newGame.addEventListener("click",reset);
resetGame.addEventListener("click",reset);