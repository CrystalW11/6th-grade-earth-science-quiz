// ----- Quiz 1: Rocks & Minerals (Original List) -----
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

// ----- Quiz 2: Igneous Rocks -----
const igneousQuestions = [
    { text: "Rocks are divided into three groups based on:", choices: ["Color", "How they form", "Weight", "Age"], answer: 1 },
    { text: "Which rock group is divided into Intrusive and Extrusive?", choices: ["Metamorphic", "Sedimentary", "Igneous", "Clastic"], answer: 2 },
    { text: "Sedimentary rocks are divided into which two sub-groups?", choices: ["Foliated/Non-foliated", "Intrusive/Extrusive", "Clastic/Non-Clastic", "Felsic/Mafic"], answer: 2 },
    { text: "Metamorphic rocks are divided into which two sub-groups?", choices: ["Clastic/Non-Clastic", "Foliated/Non-Foliated", "Intrusive/Extrusive", "Felsic/Mafic"], answer: 1 },
    { text: "Igneous rocks are formed when what materials cool and turn to solids?", choices: ["Sand and mud", "Magma and lava", "Dead plants", "Shells"], answer: 1 },
    { text: "Igneous rocks that form on the surface are called __________, while those that form underground are called __________.", choices: ["Intrusive / Extrusive", "Extrusive / Intrusive", "Volcanic / Clastic", "Plutonic / Volcanic"], answer: 1 },
    { text: "What is another name for Extrusive rocks?", choices: ["Plutonic", "Volcanic", "Clastic", "Non-foliated"], answer: 1 },
    { text: "What is another name for Intrusive rocks?", choices: ["Volcanic", "Plutonic", "Non-clastic", "Foliated"], answer: 1 },
    { text: "Which two elements are the most common in Earth's crust and igneous rocks?", choices: ["Gold and Silver", "Oxygen and Silicon", "Iron and Magnesium", "Carbon and Nitrogen"], answer: 1 },
    { text: "Which of these is NOT one of the 8 most common elements in igneous rocks?", choices: ["Aluminum", "Calcium", "Potassium", "Silver"], answer: 3 },
    { text: "Igneous rocks are classified according to origin, mineral composition, and _______.", choices: ["Weight", "Texture", "Smell", "Age"], answer: 1 },
    { text: "How does magma cool to form Intrusive rocks, and what size crystals result?", choices: ["Slowly / Large crystals", "Rapidly / Fine-grained", "Instantly / Glassy", "Slowly / No crystals"], answer: 0 },
    { text: "How do unpolished Intrusive rocks typically feel to the touch?", choices: ["Smooth", "Rough", "Glassy", "Soft"], answer: 1 },
    { text: "Which rock is the primary makeup of Earth's continental crust?", choices: ["Basalt", "Granite", "Obsidian", "Pumice"], answer: 1 },
    { text: "When lava cools rapidly on the surface, what crystal size usually forms?", choices: ["Large grain", "Fine-grained", "Huge", "Visible from far away"], answer: 1 },
    { text: "Which rock is the primary makeup of the oceanic crust?", choices: ["Granite", "Basalt", "Rhyolite", "Gabbro"], answer: 1 },
    { text: "Why is granite a popular choice for building materials?", choices: ["It is soft and easy to carve", "It is hard, dense, and durable", "It is very lightweight", "It dissolves easily in water"], answer: 1 },
    { text: "Which rock is crushed to make gravel for construction?", choices: ["Granite", "Pumice", "Basalt", "Obsidian"], answer: 2 },
    { text: "Which rock's rough surface makes it a good abrasive for cleaning and polishing?", choices: ["Granite", "Pumice", "Basalt", "Gabbro"], answer: 1 },
    { text: "Perlite, often mixed with vegetable starting seeds, comes from which rock?", choices: ["Granite", "Obsidian", "Basalt", "Rhyolite"], answer: 1 },
    { text: "Felsic rocks are characterized by having the highest content of:", choices: ["Iron", "Silicon", "Magnesium", "Calcium"], answer: 1 },
    { text: "What color and density do Felsic rocks usually have?", choices: ["Dark / High density", "Light / Lower density", "Green / High density", "Transparent / No density"], answer: 1 },
    { text: "Which of these is a classic example of a Felsic rock?", choices: ["Basalt", "Gabbro", "Granite", "Scoria"], answer: 2 },
    { text: "Mafic rocks are higher in which two elements?", choices: ["Silicon and Oxygen", "Aluminum and Potassium", "Magnesium and Iron", "Sodium and Calcium"], answer: 2 },
    { text: "What color and density do Mafic rocks usually have?", choices: ["Light / Lower density", "Dark / Higher density", "White / High density", "Pink / Lower density"], answer: 1 },
    { text: "Which of these is a classic example of a Mafic rock?", choices: ["Granite", "Rhyolite", "Basalt", "Pumice"], answer: 2 },
    { text: "Intrusive rocks often have more __________ than extrusive rocks.", choices: ["Water content", "Colors", "Gas bubbles", "Sand grains"], answer: 1 },
    { text: "Which rock is an example of an Extrusive rock?", choices: ["Granite", "Basalt", "Gabbro", "Diorite"], answer: 1 },
    { text: "What is the elemental origin of Felsic rocks?", choices: ["Mg and Fe", "Si, O, Al, Na, K", "Pure Carbon", "Oxygen only"], answer: 1 },
    { text: "Rhyolite is an example of a _____ rock.", choices: ["Felsic", "Mafic", "Intrusive", "Sedimentary"], answer: 0 },
    { text: "Gabbro is an example of a _____ rock.", choices: ["Felsic", "Mafic", "Extrusive", "Clastic"], answer: 1 },
    { text: "The texture of an igneous rock is primarily determined by the size of its _____.", choices: ["Weight", "Crystals", "Bubbles", "Layers"], answer: 1 },
    { text: "Where do Plutonic rocks form?", choices: ["On the surface", "Deep underground", "In the ocean", "In the clouds"], answer: 1 },
    { text: "Where do Volcanic rocks form?", choices: ["On the surface", "Inside the mantle", "Underground", "Slowly"], answer: 0 },
    { text: "Which list contains only igneous rocks?", choices: ["Granite, Basalt, Obsidian", "Sandstone, Shale, Coal", "Marble, Slate, Quartzite", "Granite, Limestone, Gneiss"], answer: 0 },
    { text: "Why does pumice have a rough, 'holey' surface?", choices: ["Because of large crystals", "Because of gas bubbles trapped during cooling", "Because it was carved by wind", "Because it is very old"], answer: 1 },
    { text: "Which of these pairs is correct?", choices: ["Granite: Extrusive", "Basalt: Intrusive", "Granite: Intrusive", "Obsidian: Plutonic"], answer: 2 },
    { text: "Which element is the most abundant in the Earth's crust?", choices: ["Silicon", "Oxygen", "Iron", "Aluminum"], answer: 1 },
    { text: "Felsic rocks have a __________ silicon content than Mafic rocks.", choices: ["Higher", "Lower", "Identical", "Zero"], answer: 0 },
    { text: "Slow cooling results in __________ crystals, while rapid cooling results in __________ crystals.", choices: ["Smaller / Larger", "Larger / Smaller", "No / Glassy", "Larger / Large"], answer: 1 }
];

const correctSound = new Audio('https://www.myinstants.com/media/sounds/mlg-airhorn.mp3');
const incorrectSound = new Audio('https://freesound.org/data/previews/142/142608_1840739-lq.mp3'); 

let questions = [...questionsMaster]; // Current active questions
let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;
let timer;
let seconds = 0;
let totalSecondsSpent = 0;
let isMuted = false;
let currentQuestionAlreadyWrong = false;
let missedOnFirstTry = [];

// --- QUIZ SWITCHER LOGIC ---
function switchQuiz(quizKey) {
    // 1. Update Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('nav-' + quizKey).classList.add('active');

    // 2. Setup Questions & UI
    if (quizKey === 'igneous') {
        questions = [...igneousQuestions];
        document.getElementById('quiz-title').textContent = "🌋 Igneous Rock Quiz";
        document.getElementById('reference-sidebar').style.display = 'none';
        document.getElementById('igneous-sidebar').style.display = 'block';
    } else {
        questions = [...questionsMaster];
        document.getElementById('quiz-title').textContent = "🌍 Rocks & Minerals Quiz";
        document.getElementById('reference-sidebar').style.display = 'block';
        document.getElementById('igneous-sidebar').style.display = 'none';
    }

    // 3. Reset All Stats
    currentQuestion = 0;
    correctCount = 0;
    incorrectCount = 0;
    totalSecondsSpent = 0;
    missedOnFirstTry = [];
    currentQuestionAlreadyWrong = false;
    
    document.getElementById("score").textContent = `✅: 0 | ❌: 0`;
    document.getElementById("result").textContent = "";
    document.getElementById("feedback").textContent = "";
    
    shuffleArray(questions);
    loadQuestion();
}

// --- Review Link Interaction ---
document.getElementById("review-link").onclick = (e) => {
    e.preventDefault();
    const missedList = document.getElementById("missed-list");
    missedList.innerHTML = "";
    
    const totalCountHeader = document.createElement("div");
    totalCountHeader.style.padding = "10px";
    totalCountHeader.style.fontWeight = "bold";
    totalCountHeader.style.color = "#333";
    totalCountHeader.style.borderBottom = "2px solid #ddd";
    totalCountHeader.style.marginBottom = "15px";
    totalCountHeader.innerHTML = `Running Total of Missed Questions: ${missedOnFirstTry.length}`;
    missedList.appendChild(totalCountHeader);

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
                        <span style="color: #2e7d32;"><strong>The Correct Answer:</strong> ${entry.correctAnswer}</span><br>
                        <span style="color: #FF0000;"><strong>Time Spent on this Error: ${entry.timeAtMistake} seconds</strong></span>
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
    totalSecondsSpent++; 
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
            correctAnswer: correctChoiceNames,
            timeAtMistake: seconds 
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
  const minutes = Math.floor(totalSecondsSpent / 60);
  const remainingSeconds = totalSecondsSpent % 60;
  const timeString = minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;

  document.getElementById("result").textContent = `All Done! Total Time: ${timeString}. Check 'Review Progress' for your final study list.`;
  alert(`Quiz Completed!\nTotal Time Spent: ${timeString}\nFinal Score: ${correctCount} Correct`);
};

// Start the quiz initially
shuffleArray(questions);
loadQuestion();