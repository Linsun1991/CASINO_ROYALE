// const canvas = document.getElementById("clock");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(200, 0, 0)";
//           ctx.fillRect(10, 10, 50, 50);

//           ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//           ctx.fillRect(30, 30, 50, 50);
//Variable declaration

//Grab the buttons
let gameButton  =  document.querySelector("#gamebutton")
let playButton  =  document.querySelector("#gameplaybtn");
let startButton =  document.querySelector("#strtgmebtn");
let returnButton=  document.querySelector("#returnbtn");
let exitButton  =  document.querySelector("#exitgmebtn");

//return the slotreel images in a node array
let slotreels = document.querySelectorAll(".slotreels");
console.log(slotreels)
//grab the slots where imges need to be displayed
let slot1 = document.querySelector("#slotimg1");
let slot2 = document.querySelector("#slotimg2");
let slot3 = document.querySelector("#slotimg3");

//grab the random images from the node array returned to slotreels


//functions
const gameON = ()=>{
    modal.style.display = "block";
    strtscreen.style.display="block";
    tryagain.style.display = "none";
    loser.style.display = "none";
    winner.style.display = "none";
    modallevel1.style.display = "none";

}

const startGame=()=>{
    modallevel1.style.display="block";
    strtscreen.style.display="none";
    gameplaybtn.style.display = "inline";
}

const gamePlay = ()=>{
    console.log("gameplay started");
    let randomImage1 = slotreels[Math.floor(Math.random()*slotreels.length)];
    let randomImage2 = slotreels[Math.floor(Math.random()*slotreels.length)];
    let randomImage3 = slotreels[Math.floor(Math.random()*slotreels.length)];
    console.log("random Image is", randomImage1.src)
    let randomImage1Link=randomImage1.src;
    let randomImage2Link=randomImage2.src;
    let randomImage3Link=randomImage3.src;

    slot1.src=randomImage1Link;
    slot2.src=randomImage2Link;
    slot3.src=randomImage3Link;
    let finalimg1=slot1.src;
    let finalimg2=slot2.src;
    let finalimg3=slot3.src;

    let score = document.querySelector("#score");
    let sum=100;
    score.innerHTML=`You earned ${sum}`;
    let game=true;
    
do {
    if(slot1.src===slot2.src&&slot2.src===slot3.src){
        console.log("condtion 1");
        sum+=100;
        score.innerHTML=`You earned ${sum}`;
        
        if(sum===1000){
            winner.style.display="block";
            game=false;
        }
    }else if(slot1.src===slot2.src||slot1.src===slot3.src||slot2.src===slot3.src){
        console.log("condtion 2");
        sum-=20;
        score.innerHTML=`You earned ${sum}`;
        playButton.addEventListener("click", gamePlay);
        game=false;
    }else if(slot1.src!=slot2.src&&slot1.src!=slot3.src&&slot2.src===slot3.src){
        console.log("condtion 4");
        sum-=20;
        score.innerHTML=`You earned ${sum}`;
        game=false; 
         if (sum===0){
            console.log("condtion 3");
            Leveltitle.style.display = "none";
            gameplaybtn.style.display = "none";
            slots.style.display="block";
            loser.style.display="block";
            game =false;
        }
    } 
} while (game)
    
}

const returnToGame = ()=>{
    strtscreen.style.display = "none";
    tryagain.style.display = "none";
    loser.style.display = "none";
    winner.style.display = "none";

}

const exit = ()=>{
    modal.style.display = "none";
}

//EventListner
gameButton.addEventListener("click", gameON);
startButton.addEventListener("click",startGame)
playButton.addEventListener("click", gamePlay);
exitButton.addEventListener("click", exit);
returnButton.addEventListener("click", returnToGame);