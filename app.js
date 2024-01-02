let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4 ,7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//reset game
const resetGame=()=>{
turn0=true;
enableBoxes();
msgcontainer.classList.add("hide");

};
//perform action on click button
boxes.forEach((box) =>{
box.addEventListener("click", () =>{
    console.log("box was clicked");
    //when clicked on button then we want to print some message
//box.innerText="abcd";
if(turn0){ 
    //player0
    box.innerText="o";
    turn0=false;
}
else{
    //playerX
    box.innerText="X";
    turn0=true;
}
//on clicked button no changes of value then you use disabled
box.disabled=true;
count++;
let isWinner=checkWinner();
if(count===9 && !isWinner){
    gameDraw();
}
});
});

const gameDraw=()=>{
    msg.innerText=`Game was a Draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

//disable the button after winner decleared
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
msg.innerText=`Congratulations, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        /*
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    */
   let pos1val=boxes[pattern[0]].innerText;
   let pos2val=boxes[pattern[1]].innerText;
   let pos3val=boxes[pattern[2]].innerText;

   if(pos1val !="" && pos2val !="" && pos3val !=""){
if(pos1val===pos2val && pos2val===pos3val){
    console.log("winner",pos1val);
    showWinner(pos1val);
    
}
   }

    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
