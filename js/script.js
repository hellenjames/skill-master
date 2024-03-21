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
    A: {
      choice: "It's a markup language for creating web pages",
      correct: true,
    },
    B: { choice: "It's a closing tag", correct: false },
    C: { choice: "The interrractivity", correct: false },
    D: { choice: "The closing element", correct: false },
  },
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
      <p><input type="radio" name="quiz"> <label>${currentQuestion.A.choice}</label></p>
     <p> <input type="radio" name="quiz"> <label>${currentQuestion.B.choice}</label></p>
     <p> <input type="radio" name="quiz"> <label>${currentQuestion.C.choice}</label></p>
     <p> <input type="radio" name="quiz"> <label>${currentQuestion.D.choice}</label></p>
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


const startMinutes = 4;
let time = startMinutes * 60;

const countdownEl = document.getElementById("countdown");
const timer = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `
${minutes}:${seconds}`;
  time--;
  if (minutes === 0 && seconds === "00") {
    clearInterval(timer);
  }
}
// console.log(countdownEl)
quizButton.addEventListener("click", (e) => {
  questions.innerHTML = "";
  if (currentIndex === htmlCss.length - 1) {
    document.querySelector(".button").style.display = "block";
    quizButton.style.display = "none";
  }
  renderQuestion();

  selectQuestion();
});
document.querySelector(".button").addEventListener("click", () => {
  selectQuestion()
  // alert("done")
  location.replace("http://127.0.0.1:5500/score.html");
});

const selectQuestion = () => {
  const radioButtons = document.querySelectorAll("input[type=radio]");

  radioButtons.forEach((radio) => {
    radio.addEventListener("click", (e) => {
      const questionName =
        e.target.parentElement.parentElement.children[0].textContent;
      const selectedAnswer = e.target.nextElementSibling.textContent;
      // console.log(e.target.nextElementSibling.textContent);

      htmlCss.find((quiz) => {
        if (quiz.question === questionName) {
          for (property in quiz) {
            if (property !== "question") {
              console.log(quiz[property])
              delete quiz[property].selected
              if (quiz[property].choice === selectedAnswer) {
                quiz[property]["selected"] = true;

                console.log(quiz[property]);
              }
            }
          }
        }
      });
    });
  });

  console.log(htmlCss)
  console.log(radioButtons);
};

document.addEventListener("DOMContentLoaded", () => {
  selectQuestion();
});


htmlCss.map((item)=>{
    const output=document.createElement("div");
  output.classList.add("output");
  output.innerHTML=`
  <div>
  <div>
      <p>${currentQuestion.question}</p>
      <p><input type="radio" name="quiz"> <label>${currentQuestion.A.choice}</label></p>
     <p> <input type="radio" name="quiz"> <label>${currentQuestion.B.choice}</label></p>
     <p> <input type="radio" name="quiz"> <label>${currentQuestion.C.choice}</label></p>
     <p> <input type="radio" name="quiz"> <label>${currentQuestion.D.choice}</label></p>
      </div> 
  `;
  output.append(output);
  });
  