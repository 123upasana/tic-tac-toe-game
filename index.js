let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new");
let msg=document.querySelector("#msg");
let turno = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
const resetgame = ()=>{
    turno=true;
    enable();
    newgame.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = 'O';
            turno = false;
        }
        else {
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;

        checkwinner();
    });
});
const disable = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enable =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulation ${winner} is the winner`;
    newgame.classList.remove("hide");
    disable();
};
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let patval1 = boxes[pattern[0]].innerText;
        let patval2 = boxes[pattern[1]].innerText;
        let patval3 = boxes[pattern[2]].innerText;

        if (patval1 != "" && patval2 != "" && patval3 != "") {
            if (patval1 === patval2 && patval2 === patval3) {
                showwinner(patval1);
            }
        }
    }
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);