// Configuración de los 3 Equipos
const teams = [
  { name: "🔴 Equipo Rojo", color: "red", bg: "#ff4757", pos: 1, score: 0 },
  { name: "🔵 Equipo Azul", color: "blue", bg: "#1e90ff", pos: 1, score: 0 },
  { name: "🟢 Equipo Verde", color: "green", bg: "#2ed573", pos: 1, score: 0 }
];

let currentTeamIdx = 0;
let lastDiceRoll = 0;
let currentQuestion = null;

// Tablero de 40 casillas
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
      <span style="font-size:8px; margin-top:8px;">${label}</span>
      <div class="tokens-container" id="tokens-cell-${i}"></div>
    `;
    boardEl.appendChild(cell);
  }
  updateTokensAndScore();
}

function updateTokensAndScore() {
  // Limpiar tokens anteriores
  document.querySelectorAll('.tokens-container').forEach(c => c.innerHTML = '');

  // Colocar token de cada equipo en su casilla
  teams.forEach((t, idx) => {
    const slot = document.getElementById(`tokens-cell-${t.pos}`);
    if (slot) {
      const tokenEl = document.createElement('div');
      tokenEl.className = `token ${t.color}`;
      tokenEl.title = t.name;
      slot.appendChild(tokenEl);
    }

    // Actualizar marcadores individuales
    document.getElementById(`pos-${idx}`).innerText = t.pos;
    document.getElementById(`score-${idx}`).innerText = t.score;
  });

  // Actualizar indicador de turno
  const currentTeam = teams[currentTeamIdx];
  const turnBar = document.getElementById('team-turn-bar');
  turnBar.innerText = `Turno de: ${currentTeam.name}`;
  turnBar.style.background = currentTeam.bg;
}

function rollDice() {
  const diceBtn = document.querySelector('.dice-btn');
  diceBtn.disabled = true;

  lastDiceRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-result').innerText = `🎲 ${lastDiceRoll}`;

  setTimeout(() => {
    const currentTeam = teams[currentTeamIdx];
    currentTeam.pos += lastDiceRoll;

    if (currentTeam.pos >= 40) {
      currentTeam.pos = 40;
      updateTokensAndScore();
      finishGame(currentTeam);
      return;
    }

    updateTokensAndScore();

    // Determinar casilla
    if (penaltyCells.includes(currentTeam.pos)) {
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
  document.getElementById('penalty-text').innerText = `${teams[currentTeamIdx].name}: ${randomPenalty}`;
}

function completePenalty() {
  document.getElementById('penalty-card').classList.add('hidden');
  nextTurn();
}

function triggerQuestion() {
  document.getElementById('dice-area').classList.add('hidden');
  document.getElementById('penalty-card').classList.add('hidden');
  document.getElementById('question-card').classList.remove('hidden');

  const randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex];

  document.getElementById('q-title').innerText = `${teams[currentTeamIdx].name} — ${currentQuestion.question}`;
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

  const currentTeam = teams[currentTeamIdx];

  if (selectedIdx === currentQuestion.answer) {
    currentTeam.score++;
    feedbackEl.className = 'feedback correct';
    feedbackEl.innerHTML = `<strong>¡Respuesta Correcta!</strong> ${currentQuestion.explanation}`;

    if (ladders[currentTeam.pos]) {
      const newPos = ladders[currentTeam.pos];
      feedbackEl.innerHTML += `<br><strong>🪜 ¡Genial! Suben a la casilla ${newPos}.</strong>`;
      currentTeam.pos = newPos;
    }
  } else {
    feedbackEl.className = 'feedback wrong';
    feedbackEl.innerHTML = `<strong>Incorrecto.</strong> ${currentQuestion.explanation}`;

    if (snakes[currentTeam.pos]) {
      const newPos = snakes[currentTeam.pos];
      feedbackEl.innerHTML += `<br><strong>🐍 ¡Cuidado! Caen a la casilla ${newPos}.</strong>`;
      currentTeam.pos = newPos;
    }
  }

  updateTokensAndScore();
  document.getElementById('next-btn').classList.remove('hidden');
}

function continueGame() {
  document.getElementById('question-card').classList.add('hidden');
  nextTurn();
}

function nextTurn() {
  currentTeamIdx = (currentTeamIdx + 1) % teams.length;
  updateTokensAndScore();

  document.getElementById('dice-area').classList.remove('hidden');
  document.querySelector('.dice-btn').disabled = false;
  document.getElementById('dice-result').innerText = '';
}

function finishGame(winner) {
  document.getElementById('dice-area').classList.add('hidden');
  document.getElementById('question-card').classList.add('hidden');
  document.getElementById('penalty-card').classList.add('hidden');
  document.getElementById('victory-card').classList.remove('hidden');

  document.getElementById('final-stats').innerText = 
    `🏆 ¡El ${winner.name} ha alcanzado la casilla 40 y ganado la sesión con ${winner.score} aciertos!`;
}

window.onload = buildBoard;
