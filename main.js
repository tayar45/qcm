import qcm from "./qcm.js"
var nb=0

var score=0

var next =document.getElementById("next")

var question=document.getElementById("question")

var nbQs=document.getElementById("nbQs")

var oprion1=document.querySelector("#option1 span")

var oprion2=document.querySelector("#option2 span")

var oprion3=document.querySelector("#option3 span")

var oprion4=document.querySelector("#option4 span")

var correct_option=qcm[nb].correct_option

nbQs.innerText="السؤال رقم "+(nb+1)
question.innerText= qcm[nb].question
oprion1.innerHTML=qcm[nb].options[0]
oprion2.innerHTML=qcm[nb].options[1]
oprion3.innerHTML=qcm[nb].options[2]
oprion4.innerHTML=qcm[nb].options[3]


next.onclick=()=> {
  
var radioButtons= document.getElementsByName("option")
var selectedOption = 5;

// Loop through the radio buttons to find the selected one
for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        selectedOption = i;
        break; 
    }
    
}
if (selectedOption==correct_option) {
  score++
}
console.log(score)
nb++

if (qcm[nb]==undefined) {
  
endQcm(score)
}
else{
correct_option=qcm[nb].correct_option
nbQs.innerText="السؤال رقم "+(nb+1)
question.innerText= qcm[nb].question
oprion1.innerHTML=qcm[nb].options[0]
oprion2.innerHTML=qcm[nb].options[1]
oprion3.innerHTML=qcm[nb].options[2]
oprion4.innerHTML=qcm[nb].options[3]
}

}




function endQcm(score) {
  
  var container=document.getElementById("card")
  var text;




if (score<10) {
  text="Sir awld l9a7ba t9ra 3la karak"
}
else{
  text="Habibi ma 3lakch"
}

container.innerHTML=`
  <h2>End QCM</h2>
  <br/>
  <hr/>
  <br/
  <h2>Score :${score}</h2>
  <p width="200px">${text}</p>
  <br/><br/><br/><br/>
  <button id="replay">Replay</button>
  
`
var replay = document.getElementById("replay")
replay.onclick=function (){
  location.reload()
  
}

  
}





