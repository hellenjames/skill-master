const htmlCss = [
  {
    question: "What is html?",
    A: { choice: "It's a programing language", correct: false },
    B: { choice: "It's a human language", correct: false },
    C: { choice: "It's a markup language", correct: true },
    D: { choice: "None of the above", correct: false },
  },
  {
    question: "What is css?",
    A: { choice: "None of the above", correct: false },
    B: { choice: "It's the coloring of colors", correct: false },
    C: { choice: "It's making web look smart", correct: false },
    D: { choice: "It's a cascading stylesheet", correct: true },
  },
  {
    question: "What is HTML tags?",
    A: { choice: "It's a markup language for creating web pages", correct: true },
    B: { choice: "It's a closing tag", correct: false },
    C: { choice: "The interrractivity", correct: false },
    D: { choice: "The closing element", correct: false },
  }
];

let questions = document.querySelector(".quizes");

const quizButton = document.querySelector(".btn");

let currentIndex = 0;
const renderQuestion = () => {
  let currentQuestion = htmlCss[currentIndex];
  const question = document.createElement("div");

  question.innerHTML = `
  <div>
      <p>${currentQuestion.question}</p>
      <p><input type="radio" name="quiz"> ${currentQuestion.A.choice}</p>
     <p> <input type="radio" name="quiz"> ${currentQuestion.B.choice}</p>
     <p> <input type="radio" name="quiz"> ${currentQuestion.C.choice}</p>
     <p> <input type="radio" name="quiz"> ${currentQuestion.D.choice}</p>
      </div> 
  `;
  questions.append(question);

  currentIndex += 1;

  console.log(currentQuestion);
  console.log(currentIndex);
};

document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});

quizButton.addEventListener("click", () => {
  questions.innerHTML = "";
  if (currentIndex === (htmlCss.length-1)) {
    quizButton.textContent = "Finish";
  }
  
  renderQuestion();

});
const startMinutes=4;
let time=startMinutes * 60;

const countdownEl=document.getElementById("countdown");
const timer= setInterval(updateCountdown,1000);
function updateCountdown(){
const minutes=Math.floor(time/60);
let seconds=time % 60;
seconds=seconds<10 ? "0" + seconds: seconds;
countdownEl.innerHTML=`
${minutes}:${seconds}`;
time--;

console.log(seconds)
  if(minutes===0 && seconds==="00"){
    clearInterval(timer);
  }
}



console.log(countdownEl)



// question.append(multiplechoices)

// updateQuestio();
// updateMultipleChoices();
// console.log(question);

// let button=document.querySelector(".btn");
// button.addEventListener("click",()=>{
// let
// });
