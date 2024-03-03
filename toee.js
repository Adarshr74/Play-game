let hidden = document.getElementById("hidden");
let buttons = document.querySelectorAll(".buttons");
let value = "O";
buttons.forEach(button => {
    button.addEventListener(("click"), () => {
        if (value === "X") {
            button.innerText = "O";
            value = "O";
            button.disabled = true;
            check();
        }
        else if (value === "O") {
            button.innerText = "X";
            value = "X";
            button.disabled = true;
            check();
        }
    })
});
let winstreak = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];


function check() {
    for (let position of winstreak) {
        let val1 = buttons[position[0]].innerText;
        let val2 = buttons[position[1]].innerText;
        let val3 = buttons[position[2]].innerText;
        console.log(val1);
        if (val1 != "" || val2 != "" || val3 != "") {
            if (val1 === val2 && val2 === val3) {
                hidden.style.visibility = "visible";
                visible="true";
                hidden.innerText = `congratulations! ${val1} is the winner`;
                buttons.forEach(button => {
                    button.disabled=true;
                }
                )
                let container = document.querySelector(".container2");
                // console.log(container);
                
                container.style.filter = "blur(16px)";
                let restart = document.getElementById("restart");
                restart.style.position = "relative";
                restart.style.top = "-250px";
                restart.innerText="New Game";
                restart.style.transitionDuration = ".7s"
                restart.style.transitionTimingFunction = "ease-out";
                innertext();
            }
            
        }
        
    }
}
let restart = document.getElementById("restart");
restart.addEventListener(("click"), () => {
    if(visible){
        value = "O";
        let container = document.querySelector(".container2");
        // console.log(container);
        container.style.filter = "blur(0px)";
        restart.style.position = "relative";
        restart.style.top = "-100px";
        restart.style.transitionDuration = ".2s"
        restart.style.transitionTimingFunction = "ease-out";
        restart.innerText="Restart";
    hidden.style.visibility="hidden";
    console.log("Restarted!");
    innertext();
    }

})
function innertext(){
    buttons.forEach(button => {
        button.innerText="";
    }
    )
    return;
}
function enablebutton(){
    buttons.forEach(button => {
        button.disabled=false;
    }
    ) 
    return;
}
restart.addEventListener(("click"),()=>{

    innertext();
    enablebutton();
})

