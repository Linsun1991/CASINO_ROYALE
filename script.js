//Variable declaration------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Grab the buttons
let gameButton      =      document.querySelector("#gamebutton")
let playButton1     =      document.querySelector("#gameplaybtnTop");
let playButton2     =      document.querySelector("#gameplaybtnMid");
let playButton3     =      document.querySelector("#gameplaybtnLow");
let startButton     =      document.querySelector("#strtgmebtn");
let returnButton    =      document.querySelector("#returnbtn");
let exitButton      =      document.querySelector("#exitgmebtn");
let gmeInstrnButton =      document.querySelector("#gmeinstrn");
let musicButton     =      document.querySelector(".musicBtn");
let pauseButton     =      document.querySelector("#stopplay")

//return the slotreel images in a node array
let slotreels = document.querySelectorAll(".slotreels");

//grab the slots where imges need to be displayed
let slot1 = document.querySelector("#slotimg1");
let slot2 = document.querySelector("#slotimg2");
let slot3 = document.querySelector("#slotimg3");

let score = document.querySelector("#score");
let sum = 100;
score.innerHTML=`You earned ${sum}`;

//music array to access the music tracks
let musiclist = document.getElementsByClassName("audio");
let playSong = 0;

//functions------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const playMusic  = ()=>{
   if (playSong ===0){
    playSong = musiclist[Math.floor(Math.random()*musiclist.length)];
    playSong.play();
    playSong.addEventListener("ended", nextSong) 
   }
    
}

const nextSong =()=>{
    playSong.removeEventListener("ended", nextSong)
    playSong=0;
    playMusic();  
}

const stopMusic = ()=>{
   if(playSong!=0){
    playSong.pause();
    playSong.currentTime = 0;
    console.log(playSong);
    playSong=0;
   }
}

const gameON = ()=>{
    modal.style.display = "block";
    strtscreen.style.display="block";
    logic.style.display = "none";
    loser.style.display = "none";
    winner.style.display = "none";
    modallevel1.style.display = "none";
    playMusic();
    startplay.style.display = "none";
    stopplay.style.display = "inline";
}

const startGame=()=>{
    modallevel1.style.display="block";
    strtscreen.style.display="none";
    betButtons.style.display = "inline";
    slots.style.display = "flex";
    logic.style.display = "none";
    let score = document.querySelector("#score");
    sum = 100;
    score.innerHTML=`You earned $${sum}`;
}

const gmeInstructions = ()=>{
    modal.style.display = "block";
    strtscreen.style.display="none";
    logic.style.display = "block";
    loser.style.display = "none";
    winner.style.display = "none";
    modallevel1.style.display = "none";
}

const gamePlay = (event)=>{
    let randomImage1 = slotreels[Math.floor(Math.random()*slotreels.length)];  //grab the random images from the node array returned to slotreels
    let randomImage2 = slotreels[Math.floor(Math.random()*slotreels.length)];
    let randomImage3 = slotreels[Math.floor(Math.random()*slotreels.length)];
    
    let randomImage1Link=randomImage1.src;
    let randomImage2Link=randomImage2.src;
    let randomImage3Link=randomImage3.src;

    slot1.src=randomImage1Link;
    slot2.src=randomImage2Link;
    slot3.src=randomImage3Link;
    

    if (event.target==playButton1){
        
        if(slot1.src===slot2.src&&slot2.src===slot3.src){
        sum += 100;
        } else if (slot1.src === slot2.src||slot1.src === slot3.src||slot2.src === slot3.src){
            sum += 50;
        }else{
            sum -= 100;
        }

        if (sum <= 0){
        Leveltitle.style.display = "none";
        betButtons.style.display = "none";
        slots.style.display = "none";
        loser.style.display = "block";
        score.innerHTML=`You earned $${sum}`;
        return false;
        }else if (sum>=1000){
            winner.style.display="block";
            score.innerHTML=`You earned $${sum}`;
            betButtons.style.display = "none";
            slots.style.display = "none";
            Leveltitle.style.display = "none";
            return false;
        }else{
            score.innerHTML=`You earned $${sum}`;
            return true;
        }
    }  
    else if(event.target==playButton2){
        if(slot1.src===slot2.src&&slot2.src===slot3.src){
            sum += 50;        
        } else if (slot1.src === slot2.src||slot1.src === slot3.src||slot2.src === slot3.src){
            sum += 25;
        }else{
            sum -= 50;
        }
    
        if (sum <= 0){
            Leveltitle.style.display = "none";
            betButtons.style.display = "none";
            slots.style.display = "none";
            loser.style.display = "block";
            score.innerHTML=`You earned $${sum}`;
            return false;
        }else if (sum>=1000){
            winner.style.display="block";
            score.innerHTML=`You earned $${sum}`;
            betButtons.style.display = "none";
            slots.style.display = "none";
            Leveltitle.style.display = "none";
            return false;
        }else{
            score.innerHTML=`You earned $${sum}`;
            return true;
        }
    }  
    else if (event.target==playButton3){
        if(slot1.src===slot2.src&&slot2.src===slot3.src){
            sum += 25;
            
        } else if (slot1.src === slot2.src||slot1.src === slot3.src||slot2.src === slot3.src){
            sum += 13;
        }else{
            sum -= 25;
        }
    
        if (sum <= 0){
            Leveltitle.style.display = "none";
            betButtons.style.display = "none";
            slots.style.display = "none";
            loser.style.display = "block";
            score.innerHTML=`You earned $${sum}`;
            return false;
        }else if (sum>=1000){
            winner.style.display="block";
            score.innerHTML=`You earned $${sum}`;
            betButtons.style.display = "none";
            slots.style.display = "none";
            Leveltitle.style.display = "none";
            return false;
        }else{
            score.innerHTML=`You earned $${sum}`;
            return true;
        }
    }
    
}

const returnToGame = ()=>{
    gameON();
}

const exit = ()=>{
    modal.style.display = "none";
    startplay.style.display = "none";
    stopplay.style.display = "none";
    stopMusic();
}



//EventListner------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
gameButton.addEventListener("click", gameON);
startButton.addEventListener("click",startGame)
playButton1.addEventListener("click", gamePlay);
playButton2.addEventListener("click", gamePlay);
playButton3.addEventListener("click", gamePlay);
exitButton.addEventListener("click", exit);
returnButton.addEventListener("click", returnToGame);
gmeInstrnButton.addEventListener("click", gmeInstructions);
musicButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", stopMusic);




// API
