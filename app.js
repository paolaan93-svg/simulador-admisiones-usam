let currentPos = 1;
let score = 0;
let lastDiceRoll = 0;
let currentQuestion = null;

// Tablero de 30 casillas con Escaleras (avanzan) y Trampas/Serpientes (retroceden)
const ladders = { 3: 11, 8: 16, 14: 22, 19: 25 };
const snakes = { 12: 5, 18: 10, 24: 15, 28: 20 };

// Generar tablero dinámico
function buildBoard() {
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';

  for (let i = 30; i >= 1; i--) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell-${i}`;

    let label = '';
    if (i === 1) { cell.classList.add('start'); label = '🚀 INICIO'; }
    else if (i === 30) { cell.classList.add('finish'); label = '🏆 META'; }
    else if (ladders[i]) { cell.classList.add('ladder'); label = `🪜 +${ladders[i] - i}`; }
    else if (snakes[i]) { cell.classList.add('snake'); label = `🐍 -${i - snakes[i]}`; }

    cell.innerHTML = `
      <span class="cell-num">${i}</span>
      <span style="font-size:10px; margin-top:12px;">${label}</span>
      <div id="token-${i}"></div>
    `;
    boardEl.appendChild(cell);
  }
  updateTokenPosition();
}

function updateTokenPosition() {
  document.querySelectorAll('.token').forEach(el => el.remove());
  const targetSlot = document.getElementById(`token-${currentPos}`);
  if (targetSlot) {
    const token = document.createElement('div');
    token.className = 'token';
    targetSlot.appendChild(token);
  }
  document.getElementById('pos-display').innerText = currentPos;
  document.getElementById('score-display').innerText = score;
}

function rollDice() {
  const diceBtn = document.querySelector('.dice-btn');
  diceBtn.disabled = true;
  
  lastDiceRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-result').innerText = `🎲 ${lastDiceRoll}`;

  setTimeout(() => {
    currentPos += lastDiceRoll;
    if (currentPos >= 30) {
      currentPos = 30;
      updateTokenPosition();
      finishGame();
      return;
    }
    updateTokenPosition();
    triggerQuestion();
  }, 600);
}

function triggerQuestion() {
  document.getElementById('dice-area').classList.add('hidden');
  document.getElementById('question-card').classList.remove('hidden');

  // Seleccionar pregunta aleatoria
  const randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex];

  document.getElementById('q-title').innerText = currentQuestion.question;
  const optsContainer = document.getElementById('opts-container');
  optsContainer.innerHTML = '';
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('next-btn').classList.add('hidden');

  currentQuestion.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerText = opt;
    btn.onclick = () => answerQuestion(idx);
    optsContainer.appendChild(btn);
  });
}

function answerQuestion(selectedIdx) {
  const buttons = document.querySelectorAll('.opt-btn');
  buttons.forEach(b => b.disabled = true);

  const feedbackEl = document.getElementById('feedback');
  feedbackEl.style.display = 'block';

  if (selectedIdx === currentQuestion.answer) {
    score++;
    feedbackEl.className = 'feedback correct';
    feedbackEl.innerHTML = `<strong>¡Respuesta Correcta!</strong> ${currentQuestion.explanation}`;
    
    // Verificar si cayó en una escalera
    if (ladders[currentPos]) {
      const newPos = ladders[currentPos];
      feedbackEl.innerHTML += `<br><strong>🪜 ¡Genial! Subes a la casilla ${newPos} por responder acertadamente.</strong>`;
      currentPos = newPos;
    }
  } else {
    feedbackEl.className = 'feedback wrong';
    feedbackEl.innerHTML = `<strong>Incorrecto.</strong> ${currentQuestion.explanation}`;
    
    // Verificar si cayó en una serpiente/trampa
    if (snakes[currentPos]) {
      const newPos = snakes[currentPos];
      feedbackEl.innerHTML += `<br><strong>🐍 ¡Cuidado! Caes a la casilla ${newPos}.</strong>`;
      currentPos = newPos;
    }
  }

  updateTokenPosition();
  document.getElementById('next-btn').classList.remove('hidden');
}

function continueGame() {
  document.getElementById('question-card').classList.add('hidden');
  document.getElementById('dice-area').classList.remove('hidden');
  document.querySelector('.dice-btn').disabled = false;
  document.getElementById('dice-result').innerText = '';

  if (currentPos >= 30) {
    finishGame();
  }
}

function finishGame() {
  document.getElementById('dice-area').classList.add('hidden');
  document.getElementById('question-card').classList.add('hidden');
  document.getElementById('victory-card').classList.remove('hidden');

  document.getElementById('final-stats').innerText = 
    `Llegaste a la meta acumulando ${score} aciertos durante el recorrido.`;
}

// Inicializar al cargar
window.onload = buildBoard;
