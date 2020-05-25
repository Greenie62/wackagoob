var bidenPics=['./assets/biden1.jpeg','./assets/biden2.jpeg',"./assets/biden3.jpg","./assets/biden4.jpg"]
var trumpPics=["./assets/trump.jpeg","./assets/trump2.jpg","./assets/trump3.jpg", "./assets/trump3.jpg"];
var overlayImg=document.querySelector(".overlayimg");
var candidateDOM=document.querySelector(".candidate")

var candidateSelectBtns=document.querySelectorAll('.selectDivBtn');
var candidateCard=document.querySelector(".candidateCard")
var squares=document.querySelectorAll(".square")
var gameInterval="";
var timer=30;
var score=0;
var scoreDOM=document.querySelector(".score");
var timerDOM=document.querySelector(".time");
var isRunning=false;

var hitBiden="./assets/bidenhit.jpg"
var hitTrump="./assets/trumphit.jpg"
var isTrump=false;

var gameOverCard=document.querySelector('.gameoverCard');
var gooberDOM=document.querySelector('.goober');
var scoreTotal=document.querySelector(".scoreTotal")
var refreshBtn=document.querySelector(".refreshBtn")


var hitSounds=[new Audio("./assets/success.wav"), new Audio("./assets/success2.wav")];
var missSounds=[new Audio("./assets/horn.wav"), new Audio("./assets/horn2.wav")];
var buzzer=new Audio("./assets/buzzer.wav")
var tick=new Audio("./assets/click.wav");
var mallets=document.querySelectorAll(".malletDiv");
var redX=document.querySelectorAll('.redX')

candidateSelectBtns.forEach((btn,idx)=>{
    btn.onclick=()=>chooseCandidate(idx);
})


function chooseCandidate(arg){
    switch(arg){

        case 0:
            overlayImg.setAttribute("src",bidenPics[Math.random() * bidenPics.length | 0])
            candidateCard.classList.add("hide-candidateCard")
            candidateDOM.innerHTML='Biden'
            gooberDOM.innerHTML="Biden"
           gameInterval=setInterval(()=>molePop(bidenPics),2500)
         
           runTimer()
        break;

        case 1:
            overlayImg.setAttribute("src",trumpPics[Math.random() * trumpPics.length | 0])
            candidateCard.classList.add("hide-candidateCard")
            candidateDOM.innerHTML="Trump"
            gooberDOM.innerHTML="Trump"
            gameInterval=setInterval(()=>molePop(trumpPics),2500)
            isTrump=true;
            runTimer()



        break;

    }
}


function molePop(pics){
    let moleHole=Math.random() * squares.length |0
    let moleHoleTwo=Math.random() * squares.length |0
    let moleHoleThree=Math.random() * squares.length |0
    
    squares[moleHole].innerHTML=`<img src=${pics[pics.length * Math.random() | 0]} class="mole">`
    squares[moleHoleTwo].innerHTML=`<img src=${pics[pics.length * Math.random() | 0]} class="mole">`
   squares[moleHoleThree].innerHTML=`<img src=${pics[pics.length * Math.random() | 0]} class="mole">`
    
             setTimeout(()=>{
                squares[moleHole].innerHTML=""
                squares[moleHoleTwo].innerHTML=""
                squares[moleHoleThree].innerHTML=""
                    },2000)

}


function runTimer(){
 
    // if(!isRunning){
    //  isRunning=true;

     if(timer <= 0){
        console.log("Game over!!")
        timerDOM.innerHTML=0;
        clearInterval(gameInterval)
        buzzer.play()
        scoreTotal.innerHTML=score;
        gameOverCard.classList.add('show-gameover')
        return;
    }

    else{
    timerDOM.innerHTML=timer;
    timer--;
    tick.play()
    setTimeout(runTimer,1000)
   // }
}
}


squares.forEach((s,idx)=>{
    s.onclick=()=>checkSquare(idx);
})

    let moleId=""

    function checkSquare(idx){
    console.log(squares[idx].children.length)

  
     
        if(squares[idx].children.length === 1 && moleId !== idx){
            score+=100;
            scoreDOM.innerHTML=score;
            moleId=idx;
            hitSounds[0].play()
            if(!isTrump){
             Array.from(squares[idx].children)[0].setAttribute("src",hitBiden)
            }
            else{
                Array.from(squares[idx].children)[0].setAttribute("src",hitTrump)

            }
         
                redX[idx].style.opacity=1;
            
            // let malletDiv=document.createElement("div");
            // malletDiv.className='malletDiv';
            // let mallet=document.createElement("div");
            // mallet.className="mallet"
            // let handle=document.createElement("div");
            // handle.className="handle"
            // malletDiv.appendChild(handle)
            // malletDiv.appendChild(mallet)
            // squares[idx].appendChild(malletDiv)
           
    }
    else{
        console.log("you already scored off that!")
        missSounds[1].play()
    }

    setTimeout(()=>{
      
        redX[idx].style.opacity=0;
       
        

    },1500)

}



refreshBtn.onclick=()=>{
    window.location.reload()
}

