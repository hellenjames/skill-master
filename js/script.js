const htmlCss = [
  {
    question: "What is html?",
    A: { choice: "It's a programing language", correct: false },
    B: { choice: "It's a human language", correct: false },
    C: { choice: "It's a markup language", correct: true },
    D: { choice: "None of the above", correct: false }
  },
  {
    question: "What is css?",
    A: { choice: "None of the above", correct: false },
    B: { choice: "It's the coloring of colors", correct: false },
    C: { choice: "It's making web look smart", correct: false },
    D: { choice: "It's a cascading stylesheet", correct: true }
  },
  {
    question: "What is HTML tags?",
    A: { choice: "It's ", correct: true },
    B: { choice: "It's a closing tag", correct: false },
    C: { choice: "The interrractivity", correct: false },
    D: { choice: "The closing element", correct: false }
  }
];
let currentInBox = 0;
let currentQuestion = htmlCss[0];
console.log(currentQuestion)
const question = document.createElement("div");
question.innerHTML = `
<div class=questions-container>
    <p>multiplechoices</p>
    <p class="result"></p>
    </div> 
`;
// question.append(question);
// question.append(multiplechoices)

// updateQuestio();
// updateMultipleChoices();
// console.log(question);


// let button=document.querySelector(".btn");
// button.addEventListener("click",()=>{
// let
// });
