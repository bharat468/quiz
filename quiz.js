const data = [
  {
    q: "What is the capital of India?",
    a: "New Delhi",
    opt: ["Jaipur", "New Delhi", "Ajmer", "Mumbai"],
  },
  {
    q: "What is the capital of Pakistan?",
    a: "Islamabad",
    opt: ["Multan", "Karachi", "Rawalpindi", "Islamabad"],
  },
  {
    q: "What is the capital of Afghanistan?",
    a: "Kabul",
    opt: ["Kabul", "Kandhar", "Zaranj", "Sangin"],
  },
  {
    q: "What is the capital of Japan?",
    a: "Tokyo",
    opt: ["Kyoto", "Nagasaki", "Tokyo", "Hiroshima"],
  },
  {
    q: "What is the capital of China?",
    a: "Beijing",
    opt: ["Beijing", "Chengdu", "Shanghai", "Chonginq"],
  },
];
const timerDiv = document.querySelector(".timer");
const questionDiv = document.querySelector(".question");
const optionsDiv = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const score = document.querySelector(".score");
const button = document.querySelector(".button")

var newscore = 0
let count = 5;
let questionNumber = 0;

printQuestionAndOptions();
//PRINTS FIRST QUESTION & OPTIONS

let time = setInterval(() => {
  if (count === 1) {
    if (questionNumber >= data.length - 1) {
      scoreplus()
      return;
    }
    count = 5;
    timerDiv.textContent = 5;
    questionNumber++
    // NEXT QUESTION
    printQuestionAndOptions();



  } else {
    count--;
    timerDiv.textContent = count;
  }
}, 1000);

function printQuestionAndOptions() {

  questionDiv.innerText = data[questionNumber].q;
  options.forEach((option, index) => {
    option.innerText = data[questionNumber].opt[index]
    option.style.backgroundColor = ""
    option.style.pointerEvents = "auto"
  });
}
//   for (let i = 0; i < options.length; i++) {
//     options[i].innerText = data[questionNumber].opt[i];
//   }
options.forEach((e) => {
  e.addEventListener("click", () => {

    options.forEach((e) =>
    (e.style.pointerEvents = "none"
    ))


    if (e.innerText === data[questionNumber].a) {
      e.style.backgroundColor = "green";
      newscore++
      score.textContent = newscore
      console.log(newscore);

    }
    else {
      e.style.backgroundColor = "red"

      options.forEach((o) => {
        if (o.innerText === data[questionNumber].a) {
          o.style.backgroundColor = "green"

        }
      })
    }
  })
})

button.addEventListener("click", () => {
  if (questionNumber >= data.length - 1) {
    scorplus()
    return;
  }
  count = 5;
  timerDiv.textContent = 5
  questionNumber++;
  printQuestionAndOptions();

})



function scorplus() {
  clearInterval(time);
  timerDiv.style.display = "none";
  questionDiv.style.display = "none";
  optionsDiv.style.display = "none";
  score.innerHTML = newscore
}
