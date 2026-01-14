// ----- All questions -----
const questionsMaster = [
  // Original + new questions
  {
    text: "Rock layers and fossils help scientists learn about:",
    choices: ["The future of Earth","The order of events in Earth’s history","Weather patterns","Earth’s temperature"],
    answer: 1
  },
  {
    text: "Shiprock is:",
    choices: ["A sand dune","A fossil","The hardened center of an ancient volcano","A glacier"],
    answer: 2
  },
  {
    text: "What shaped Shiprock into its current form?",
    choices: ["Earthquakes","Wind and water erosion","Human activity","Flooding"],
    answer: 1
  },
  {
    text: "Scientists learn about Earth’s interior by studying:",
    choices: ["Fossils","Seismic waves","Clouds","Plants"],
    answer: 1
  },
  {
    text: "The main elements in Earth’s crust are:",
    choices: ["Iron and nickel","Oxygen and silicon","Magnesium and gold","Carbon and calcium"],
    answer: 1
  },
  {
    text: "As you go deeper into Earth:",
    choices: ["It gets colder","Pressure and temperature increase","Gravity stops","Rocks disappear"],
    answer: 1
  },
  {
    text: "Which wave travels through solids AND liquids?",
    choices: ["S-waves","P-waves"],
    answer: 1
  },
  {
    text: "Which wave travels through solids ONLY?",
    choices: ["P-waves","S-waves"],
    answer: 1
  },
  {
    text: "A mineral is:",
    choices: ["Made by people","A solid formed naturally with a crystal structure","Always a rock","Living"],
    answer: 1
  },
  {
    text: "Which property describes how light reflects off a mineral?",
    choices: ["Streak","Luster","Density","Hardness"],
    answer: 1
  },
  {
    text: "Which tool is used to test mineral hardness?",
    choices: ["Thermometer","Mohs Hardness Scale","Ruler","Balance"],
    answer: 1
  },
  {
    text: "The hardest mineral on the Mohs scale is:",
    choices: ["Quartz","Topaz","Diamond","Calcite"],
    answer: 2
  },
  {
    text: "A rock is made of:",
    choices: ["One fossil","One mineral only","One or more minerals","Water"],
    answer: 2
  },
  {
    text: "Granite is:",
    choices: ["A mineral","A rock made of many minerals","Lava","A fossil"],
    answer: 1
  },
  {
    text: "Igneous rocks form from:",
    choices: ["Sediment","Heat and pressure","Magma or lava","Fossils"],
    answer: 2
  },
  {
    text: "Basalt forms when lava cools:",
    choices: ["Slowly underground","Quickly at Earth’s surface","Inside the core","Under glaciers"],
    answer: 1
  },
  {
    text: "Rock strata and fossils help scientists determine:",
    choices: ["How tall mountains are","The relative order of major historical events","The color of rocks","How deep the oceans are"],
    answer: 1
  },
  {
    text: "Scientists study Earth’s interior directly by:",
    choices: ["Examining rock samples from drilling","Using satellite images","Measuring temperature at the surface","Observing plants"],
    answer: 0
  },
  {
    text: "Scientists study Earth’s interior indirectly by:",
    choices: ["Measuring ocean currents","Using seismic waves from earthquakes","Counting fossils","Watching volcanic eruptions"],
    answer: 1
  },
  {
    text: "Main elements in Earth’s mantle are:",
    choices: ["Oxygen and silicon","Iron and magnesium","Iron and nickel","Hydrogen and helium"],
    answer: 1
  },
  {
    text: "Convection currents in the mantle:",
    choices: ["Move rocks and minerals at the surface","Create earthquakes only","Keep the core cold","Change the Moon’s orbit"],
    answer: 0
  },
  {
    text: "S-waves can travel through:",
    choices: ["Solids only","Liquids only","Solids and liquids","Gas"],
    answer: 0
  },
  {
    text: "A mineral’s streak is:",
    choices: ["The color of its powdered form","Its shiny surface","Its weight","Its smell"],
    answer: 0
  },
  {
    text: "Gypsum is a mineral formed by:",
    choices: ["Water evaporation (precipitate)","Lava cooling","Plants","Animals"],
    answer: 0
  },
  {
    text: "Coarse-grained rocks have:",
    choices: ["Large visible grains","Tiny grains only seen under microscope","No minerals","Only fossils"],
    answer: 0
  },
  {
    text: "Extrusive igneous rocks form:",
    choices: ["Slowly underground","Rapidly on the surface","In the mantle","From fossils"],
    answer: 1
  },
  {
    text: "Granite is an example of:",
    choices: ["Intrusive igneous rock","Extrusive igneous rock","Sedimentary rock","Metamorphic rock"],
    answer: 0
  }
];

// ----- Quiz State -----
let questions = [...questionsMaster];
shuffleArray(questions); // Initial shuffle
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(undefined);
let correctCount = 0;
let incorrectCount = 0;

// ----- DOM Elements -----
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");
const progressText = document.getElementById("progress");
const feedbackText = document.getElementById("feedback");
const scoreText = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");

// ----- Helper Functions -----
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateScore() {
  correctCount = 0;
  incorrectCount = 0;
  userAnswers.forEach((ans, i) => {
    if (ans === questions[i].answer) correctCount++;
    else if (ans !== undefined) incorrectCount++;
  });
  scoreText.textContent = `✅ Correct: ${correctCount}   ❌ Incorrect: ${incorrectCount}`;
}

function loadQuestion() {
  if (currentQuestion >= questions.length) return;

  const q = questions[currentQuestion];
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = q.text;
  answersDiv.innerHTML = "";
  feedbackText.textContent = "";

  q.choices.forEach((choice, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}"
        ${userAnswers[currentQuestion] === index ? "checked" : ""}>
      ${choice}
    `;
    answersDiv.appendChild(label);
  });

  // Show/Hide buttons
  nextBtn.style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";

  updateScore();
}

// ----- Event Listeners -----
answersDiv.addEventListener("change", (e) => {
  const selected = Number(e.target.value);
  userAnswers[currentQuestion] = selected;

  if (selected === questions[currentQuestion].answer) {
    feedbackText.textContent = "✅ Correct!";
    feedbackText.className = "correct";
  } else {
    const correctChoice = questions[currentQuestion].choices[questions[currentQuestion].answer];
    feedbackText.textContent = `❌ Incorrect. Correct: "${correctChoice}"`;
    feedbackText.className = "incorrect";

    // Push this question to end of quiz
    questions.push(questions[currentQuestion]);
    userAnswers.push(undefined);
  }

  updateScore();
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
});

submitBtn.addEventListener("click", () => {
  updateScore();
  result.textContent = `Final Score: ${correctCount} Correct, ${incorrectCount} Incorrect`;

  // Hide Next/Submit buttons
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";

  // Add Restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "🔄 Restart Quiz";
  restartBtn.addEventListener("click", () => {
    questions = [...questionsMaster];
    shuffleArray(questions);
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(undefined);
    result.textContent = "";
    restartBtn.remove();
    loadQuestion();
  });
  quizContainer.appendChild(restartBtn);
});

// ----- Initialize -----
loadQuestion();
