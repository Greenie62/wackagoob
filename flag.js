var starsDOM=document.querySelector(".stars");
var topStripesDOM=document.querySelector(".topstripes");
var bottomStripesDOM=document.querySelector(".bottomstripes");
var html=""
for(let i=0;i<4;i++){
    for(let j=0;j<11;j++){
            html += `✡ `
    }
    html += '<br>'
}

starsDOM.innerHTML=html


let stripesHTML
for(let i=0;i<5;i++){
    if(i%2 == 0){
        topStripesDOM.innerHTML += `<div class='red'></div>`
        bottomStripesDOM.innerHTML += `<div class='white'></div>`
    }
    else{
        topStripesDOM.innerHTML += `<div class='white'></div>`
        bottomStripesDOM.innerHTML += `<div class='red'></div>`
    }
}