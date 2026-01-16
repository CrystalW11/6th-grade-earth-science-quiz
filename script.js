// ----- All questions (Full List) -----
const questionsMaster = [
  { text: "This is the color of the mineral’s powder. Although the color of a mineral can vary, this will not vary.", choices: ["streak", "color", "luster", "density"], answer: 0 },
  { text: "Each mineral is characterized by the mass / volume.", choices: ["Density", "Crystal structure", "Cleavage of fracture", "Luster"], answer: 0 },
  { text: "Moh’s Scale measures a mineral’s ________.", choices: ["hardness", "streak", "crystal structure", "color intensity"], answer: 0 },
  { text: "When describing how light reflects the surface of a mineral as metallic, glassy, earthy, silky, waxy, or pearly, this describes which mineral property?", choices: ["Color", "Luster", "Streak", "Crystal structure"], answer: 1 },
  { text: "Minerals can form two ways. Those ways are:", choices: ["Chemical or mechanical weathering", "Solutions or cooling of lava/magma", "Evaporation or condensation", "Organic or inorganic"], answer: 1 },
  { text: "Which two minerals will scratch topaz?", choices: ["Diamond", "Corundum", "Quartz", "Orthoclase"], answer: [0, 1] },
  { text: "Which two common objects will scratch Fluorite?", choices: ["Steel nail", "Glass", "Copper penny", "Fingernail"], answer: [0, 1] },
  { text: "One example of indirect evidence Geologists use to learn about Earth’s interior is:", choices: ["rock samples from drilling.", "Data gathered from ice cores.", "Seismic waves from earthquakes.", "Volcanic eruptions."], answer: 2 },
  { text: "Which two minerals can your fingernail scratch?", choices: ["Talc", "Gypsum", "Quartz", "Topaz"], answer: [0, 1] },
  { text: "One example of direct evidence geologists use to learn about Earth’s interior is:", choices: ["Rock samples from drilling.", "Lab experiments.", "Seismic waves.", "Computer models."], answer: 0 },
  { text: "Which mineral can be scratched by a steel nail, but not glass?", choices: ["Gypsum", "Quartz", "Orthoclase", "Topaz"], answer: 2 },
  { text: "Which mineral is softer than glass, but harder than a copper penny?", choices: ["Fluorite", "Gypsum", "Quartz", "Topaz"], answer: 0 },
  { text: "Which mineral is harder than a steel nail?", choices: ["Calcite", "Talc", "Apatite", "Corundum"], answer: 3 },
  { text: "Which mineral can scratch quartz?", choices: ["Apatite", "Gypsum", "Topaz", "Talc"], answer: 2 },
  { text: "Which mineral can be scratched by glass?", choices: ["Quartz", "Corundum", "Apatite", "Orthoclase"], answer: 2 },
  { text: "XC – Colorado’s state mineral is:", choices: ["Rhodochrosite", "Gold", "Sulfur", "Gypsum"], answer: 0 },
  { text: "XC – Colorado’s State Gem is:", choices: ["Aquamarine", "Diamond", "Molybdenum", "Gold"], answer: 0 },
  { text: "XC – Which mineral is used to manufacture explosives, fungicides, and fertilizers?", choices: ["Lead", "Sulfur", "Potassium", "Phosphorous"], answer: 1 },
  { text: "Rock layers and fossils help scientists learn about:", choices: ["The future of Earth","The order of events in Earth’s history","Weather patterns","Earth’s temperature"], answer: 1 },
  { text: "Shiprock is:", choices: ["A sand dune","A fossil","The hardened center of an ancient volcano","A glacier"], answer: 2 },
  { text: "What shaped Shiprock into its current form?", choices: ["Earthquakes","Wind and water erosion","Human activity","Flooding"], answer: 1 },
  { text: "Scientists learn about Earth’s interior by studying:", choices: ["Fossils","Seismic waves","Clouds","Plants"], answer: 1 },
  { text: "The main elements in Earth’s crust are:", choices: ["Iron and nickel","Oxygen and silicon","Magnesium and gold","Carbon and calcium"], answer: 1 },
  { text: "As you go deeper into Earth:", choices: ["It gets colder","Pressure and temperature increase","Gravity stops","Rocks disappear"], answer: 1 },
  { text: "Which wave travels through solids AND liquids?", choices: ["S-waves","P-waves"], answer: 1 },
  { text: "Which wave travels through solids ONLY?", choices: ["P-waves","S-waves"], answer: 1 },
  { text: "A mineral is:", choices: ["Made by people","A solid formed naturally with a crystal structure","Always a rock","Living"], answer: 1 },
  { text: "Which property describes how light reflects off a mineral?", choices: ["Streak","Luster","Density","Hardness"], answer: 1 },
  { text: "Which tool is used to test mineral hardness?", choices: ["Thermometer","Mohs Hardness Scale","Ruler","Balance"], answer: 1 },
  { text: "The hardest mineral on the Mohs scale is:", choices: ["Quartz","Topaz","Diamond","Calcite"], answer: 2 },
  { text: "A rock is made of:", choices: ["One fossil","One mineral only","One or more minerals","Water"], answer: 2 },
  { text: "Granite is:", choices: ["A mineral","A rock made of many minerals","Lava","A fossil"], answer: 1 },
  { text: "Igneous rocks form from:", choices: ["Sediment","Heat and pressure","Magma or lava","Fossils"], answer: 2 },
  { text: "Basalt forms when lava cools:", choices: ["Slowly underground","Quickly at Earth’s surface","Inside the core","Under glaciers"], answer: 1 },
  { text: "Rock strata and fossils help scientists determine:", choices: ["How tall mountains are","The relative order of major historical events","The color of rocks","How deep the oceans are"], answer: 1 },
  { text: "Scientists study Earth’s interior directly by:", choices: ["Examining rock samples from drilling","Using satellite images","Measuring temperature at the surface","Observing plants"], answer: 0 },
  { text: "Scientists study Earth’s interior indirectly by:", choices: ["Measuring ocean currents","Using seismic waves from earthquakes","Counting fossils","Watching volcanic eruptions"], answer: 1 },
  { text: "Main elements in Earth’s mantle are:", choices: ["Oxygen and silicon","Iron and magnesium","Iron and nickel","Hydrogen and helium"], answer: 1 },
  { text: "Convection currents in the mantle:", choices: ["Move rocks and minerals at the surface","Create earthquakes only","Keep the core cold","Change the Moon’s orbit"], answer: 0 },
  { text: "S-waves can travel through:", choices: ["Solids only","Liquids only","Solids and liquids","Gas"], answer: 0 },
  { text: "A mineral’s streak is:", choices: ["The color of its powdered form","Its shiny surface","Its weight","Its smell"], answer: 0 },
  { text: "Gypsum is a mineral formed by:", choices: ["Water evaporation (precipitate)","Lava cooling","Plants","Animals"], answer: 0 },
  { text: "Coarse-grained rocks have:", choices: ["Large visible grains","Tiny grains only seen under microscope","No minerals","Only fossils"], answer: 0 },
  { text: "Extrusive igneous rocks form:", choices: ["Slowly underground","Rapidly on the surface","In the mantle","From fossils"], answer: 1 },
  { text: "Granite is an example of:", choices: ["Intrusive igneous rock","Extrusive igneous rock","Sedimentary rock","Metamorphic rock"], answer: 0 }
];

const correctSound = new Audio('https://www.myinstants.com/media/sounds/mlg-airhorn.mp3');
const incorrectSound = new Audio('https://freesound.org/data/previews/142/142608_1840739-lq.mp3'); 

let questions = [...questionsMaster];
let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;
let timer;
let seconds = 0;
let isMuted = false;
let currentQuestionAlreadyWrong = false;
let missedOnFirstTry = [];

// --- Review Link Interaction ---
document.getElementById("review-link").onclick = (e) => {
    e.preventDefault();
    const missedList = document.getElementById("missed-list");
    missedList.innerHTML = "";
    
    // Add the running total at the top of the list
    const totalCountHeader = document.createElement("div");
    totalCountHeader.style.padding = "10px";
    totalCountHeader.style.fontWeight = "bold";
    totalCountHeader.style.color = "#333";
    totalCountHeader.style.borderBottom = "2px solid #ddd";
    totalCountHeader.style.marginBottom = "15px";
    totalCountHeader.innerHTML = `Running Total of Missed Questions: ${missedOnFirstTry.length}`;
    missedList.appendChild(totalCountHeader);

    // Create a scrollable container for the entries
    const scrollContainer = document.createElement("div");
    scrollContainer.style.maxHeight = "400px";
    scrollContainer.style.overflowY = "auto";
    scrollContainer.style.paddingRight = "5px";

    if (missedOnFirstTry.length === 0) {
        scrollContainer.innerHTML = "<p style='color: #333; padding: 10px;'>No mistakes yet! Keep up the good work.</p>";
    } else {
        missedOnFirstTry.forEach((entry) => {
            const div = document.createElement("div");
            div.style.background = "#f9f9f9";
            div.style.padding = "15px";
            div.style.marginBottom = "15px";
            div.style.borderRadius = "8px";
            div.style.borderLeft = "5px solid #d9534f";
            div.style.color = "#333";

            div.innerHTML = `
                <div style="word-wrap: break-word;">
                    <strong style="color: #0000FF; display: block; margin-bottom: 5px; font-size: 1.1rem;">
                        Question: ${entry.questionText}
                    </strong>
                    <div style="margin-top: 10px;">
                        <span style="color: #d9534f;"><strong>Your First Choice:</strong> ${entry.wrongAnswer}</span><br>
                        <span style="color: #2e7d32;"><strong>The Correct Answer:</strong> ${entry.correctAnswer}</span>
                    </div>
                </div>`;
            scrollContainer.appendChild(div);
        });
    }
    missedList.appendChild(scrollContainer);
    document.getElementById("review-modal").style.display = "block";
};

document.getElementById("close-review").onclick = () => {
    document.getElementById("review-modal").style.display = "none";
};

// --- Mute Button ---
document.getElementById("mute-btn").onclick = () => {
    isMuted = !isMuted;
    document.getElementById("mute-btn").textContent = isMuted ? "🔇" : "🔊";
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startTimer() {
  clearInterval(timer);
  seconds = 0;
  document.getElementById("timer").textContent = `Time: ${seconds}s`;
  timer = setInterval(() => {
    seconds++;
    document.getElementById("timer").textContent = `Time: ${seconds}s`;
  }, 1000);
}

function loadQuestion() {
  if (currentQuestion >= questions.length) return;
  currentQuestionAlreadyWrong = false;
  const q = questions[currentQuestion];
  const isMulti = Array.isArray(q.answer);
  
  const progressPercent = (currentQuestion / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progressPercent + "%";
  
  document.getElementById("progress").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("question-text").textContent = q.text + (isMulti ? " (Select all correct)" : "");
  document.getElementById("answers").innerHTML = "";
  document.getElementById("feedback").textContent = "";

  q.choices.forEach((choice, index) => {
    const type = isMulti ? "checkbox" : "radio";
    const label = document.createElement("label");
    label.innerHTML = `<input type="${type}" name="answer" value="${index}"> ${choice}`;
    document.getElementById("answers").appendChild(label);
  });

  document.getElementById("next-btn").style.display = "none";
  document.getElementById("submit-btn").style.display = "none";
  startTimer();
}

document.getElementById("answers").addEventListener("change", (e) => {
  const q = questions[currentQuestion];
  const checkedIndices = Array.from(document.querySelectorAll('input:checked')).map(i => Number(i.value));
  
  if (Array.isArray(q.answer)) {
    if (checkedIndices.length === q.answer.length) {
      checkResult(checkedIndices.every(v => q.answer.includes(v)), checkedIndices);
    }
  } else {
    checkResult(checkedIndices[0] === q.answer, checkedIndices);
  }
});

function checkResult(isCorrect, checkedIndices) {
  const fb = document.getElementById("feedback");
  const q = questions[currentQuestion];

  if (isCorrect) {
    clearInterval(timer);
    if (!isMuted) {
      correctSound.currentTime = 0;
      correctSound.play().catch(e => console.log("Audio blocked"));
    }
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    fb.textContent = "✅ Correct!";
    fb.className = "correct";
    
    if (currentQuestionAlreadyWrong) {
        if (incorrectCount > 0) incorrectCount--;
    }
    correctCount++;

    if (currentQuestion === questions.length - 1) {
        document.getElementById("submit-btn").style.display = "inline-block";
    } else {
        document.getElementById("next-btn").style.display = "inline-block";
    }

  } else {
    if (!isMuted) {
      incorrectSound.currentTime = 0;
      incorrectSound.play().catch(e => console.log("Audio blocked"));
    }
    
    if (!currentQuestionAlreadyWrong) {
        incorrectCount++;
        currentQuestionAlreadyWrong = true;
        
        const wrongChoiceNames = checkedIndices.map(i => q.choices[i]).join(" & ");
        const correctChoiceNames = Array.isArray(q.answer) ? q.answer.map(i => q.choices[i]).join(" & ") : q.choices[q.answer];

        missedOnFirstTry.push({
            questionText: q.text,
            wrongAnswer: wrongChoiceNames,
            correctAnswer: correctChoiceNames
        });
    }
    
    fb.textContent = `❌ Not quite. Keep going!`;
    fb.className = "incorrect";
  }
  
  document.getElementById("score").textContent = `✅: ${correctCount} | ❌: ${incorrectCount}`;
}

document.getElementById("next-btn").onclick = () => { currentQuestion++; loadQuestion(); };
document.getElementById("submit-btn").onclick = () => { 
  clearInterval(timer); 
  document.getElementById("result").textContent = "All Done! Check 'Review Progress' for your final study list.";
};

shuffleArray(questions);
loadQuestion();