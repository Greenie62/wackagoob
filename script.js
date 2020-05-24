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

var hitSounds=[new Audio("./assets/success.wav"), new Audio("./assets/success2.wav")];
var missSounds=[new Audio("./assets/horn1.wav"), new Audio("./assets/horn2.wav")];
var buzzer=new Audio("./assets/buzzer.wav")
var tick=new Audio("./assets/click.wav")


candidateSelectBtns.forEach((btn,idx)=>{
    btn.onclick=()=>chooseCandidate(idx);
})


function chooseCandidate(arg){
    switch(arg){

        case 0:
            overlayImg.setAttribute("src",bidenPics[Math.random() * bidenPics.length | 0])
            candidateCard.classList.add("hide-candidateCard")
            candidateDOM.innerHTML='Biden'
           gameInterval=setInterval(()=>molePop(bidenPics),2500)
         
           runTimer()
        break;

        case 1:
            overlayImg.setAttribute("src",trumpPics[Math.random() * trumpPics.length | 0])
            candidateCard.classList.add("hide-candidateCard")
            candidateDOM.innerHTML="Trump"
            gameInterval=setInterval(()=>molePop(trumpPics),2500)
      
            runTimer()



        break;

    }
}


function molePop(pics){
    let moleHole=Math.random() * squares.length |0
    

    if(timer < 20){
        let moleHoleTwo=Math.random() * squares.length |0
         squares[moleHoleTwo].innerHTML=`<img src=${pics[pics.length * Math.random() | 0]} class="mole">`

         setTimeout(()=>{
            squares[moleHoleTwo].innerHTML=""


         },2000)
        }

         if(timer < 10){
            let moleHoleThree=Math.random() * squares.length |0
             squares[moleHoleThree].innerHTML=`<img src=${pics[pics.length * Math.random() | 0]} class="mole">`
    
             setTimeout(()=>{
                squares[moleHoleThree].innerHTML=""
    
    
             },2000)

}
 
    squares[moleHole].innerHTML=`<img src=${pics[pics.length * Math.random() | 0]} class="mole">`
    console.log("wtf?")

    setTimeout(()=>{
        squares[moleHole].innerHTML=""

    },2000)
}


function runTimer(){
 
    // if(!isRunning){
    //  isRunning=true;

     if(timer <= 0){
        console.log("Game over!!")
        clearInterval(gameInterval)
        buzzer.play()
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
           
    }
    else{
        console.log("you already scored off that!")
        missSounds[1].play()
    }

}