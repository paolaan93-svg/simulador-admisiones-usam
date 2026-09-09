let currentPos = 1;
let score = 0;
let lastDiceRoll = 0;
let currentQuestion = null;

// Mapa para tablero de 40 casillas
const ladders = { 4: 14, 10: 22, 18: 30, 26: 36 };
const snakes = { 15: 6, 23: 12, 32: 20, 38: 28 };
const penaltyCells = [7, 13, 21, 29, 35];

function buildBoard() {
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';

  for (let i = 40; i >= 1; i--) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell-${i}`;

    let label = '';
    if (i === 1) { cell.classList.add('start'); label = '🚀 INICIO'; }
    else if (i === 40) { cell.classList.add('finish'); label = '🏆 META'; }
    else if (ladders[i]) { cell.classList.add('ladder'); label = `🪜 +${ladders[i] - i}`; }
    else if (snakes[i]) { cell.classList.add('snake'); label = `🐍 -${i - snakes[i]}`; }
    else if (penaltyCells.includes(i)) { cell.classList.add('penalty'); label = '🎭 RETO'; }

    cell.innerHTML = `
      <span class="cell-num">${i}</span>
      <span style="font-size:9px; margin-top:10px;">${label}</span>
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
    if (currentPos >= 40) {
      currentPos = 40;
      updateTokenPosition();
      finishGame();
      return;
    }
    updateTokenPosition();

    // Evaluar tipo de casilla
    if (penaltyCells.includes(currentPos)) {
      triggerPenalty();
    } else {
      triggerQuestion();
    }
  }, 600);
}

function triggerPenalty() {
  document.getElementById('dice-area').classList.add('hidden');
  document.getElementById('question-card').classList.add('hidden');
  document.getElementById('penalty-card').classList.remove('hidden');

  const randomPenalty = penalties[Math.floor(Math.random() * penalties.length)];
  document.getElementById('penalty-text').innerText = randomPenalty;
}

function completePenalty() {
  document.getElementById('penalty-card').classList.add('hidden');
  document.getElementById('dice-area').classList.remove('hidden');
  document.querySelector('.dice-btn').disabled = false;
  document.getElementById('dice-result').innerText = '';
}

function triggerQuestion() {
  document.getElementById('dice-area').classList.add('hidden');
  document.getElementById('penalty-card').classList.add('hidden');
  document.getElementById('question-card').classList.remove('hidden');

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
    
    if (ladders[currentPos]) {
      const newPos = ladders[currentPos];
      feedbackEl.innerHTML += `<br><strong>🪜 ¡Genial! Subes a la casilla ${newPos}.</strong>`;
      currentPos = newPos;
    }
  } else {
    feedbackEl.className = 'feedback wrong';
    feedbackEl.innerHTML = `<strong>Incorrecto.</strong> ${currentQuestion.explanation}`;
    
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

  if (currentPos >= 40) {
    finishGame();
  }
}

function finishGame() {
  document.getElementById('dice-area').classList.add('hidden');
  document.getElementById('question-card').classList.add('hidden');
  document.getElementById('penalty-card').classList.add('hidden');
  document.getElementById('victory-card').classList.remove('hidden');

  document.getElementById('final-stats').innerText = 
    `¡Completaron el tablero de 40 casillas logrando ${score} aciertos durante la sesión!`;
}

window.onload = buildBoard;
