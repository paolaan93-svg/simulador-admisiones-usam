let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  document.getElementById('question-title').innerText = `${currentQuestionIndex + 1}. ${q.question}`;
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('next-btn').classList.add('hidden');

  // Actualizar barra de progreso
  const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'btn option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectOption(idx);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIndex) {
  const q = questions[currentQuestionIndex];
  const feedbackEl = document.getElementById('feedback');
  const buttons = document.querySelectorAll('.option-btn');
  
  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === q.answer) {
    score++;
    feedbackEl.className = 'feedback correct';
    feedbackEl.innerHTML = `<strong>¡Correcto!</strong> ${q.explanation}`;
  } else {
    feedbackEl.className = 'feedback incorrect';
    feedbackEl.innerHTML = `<strong>Incorrecto.</strong> ${q.explanation}`;
  }
  
  feedbackEl.style.display = 'block';
  document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  
  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById('score-text').innerText = `Puntaje: ${score} / ${questions.length} (${percentage}%)`;
  
  const summary = document.getElementById('feedback-summary');
  if (percentage >= 80) {
    summary.innerText = "¡Excelente desempeño! Demuestras un dominio sólido de los procedimientos académicos y comerciales de admisiones USAM.";
    summary.style.color = "green";
  } else {
    summary.innerText = "Te sugerimos repasar la Base de Conocimiento de Admisiones y Aranceles en el Portal para reforzar los puntos normativos claves.";
    summary.style.color = "#c0392b";
  }
}
