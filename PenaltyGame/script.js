let score = 0;
const ball = document.getElementById('ball');
const keeper = document.getElementById('keeper');
const statusEl = document.getElementById('status');
const scoreEl = document.getElementById('score');

const targets = {
  'top-left':  { top: '13%', left: '25%', keeper: 'left', pivot: '20% 30%' }, 
  'top-right': { top: '13%', left: '75%', keeper: 'right', pivot: '80% 30%' }, 
  'center':    { top: '25%', left: '50%', keeper: 'center', pivot: '50% 50%' },
  'bottom-left': { top: '38%', left: '25%', keeper: 'left', pivot: '20% 70%' }, 
  'bottom-right': { top: '38%', left: '75%', keeper: 'right', pivot: '80% 70%' } 
};

const keeperSprites = {
  left: 'assets/keeper_left.png',
  right: 'assets/keeper_right.png',
  center: 'assets/keeper_idle.png',
  middle: 'assets/keeper_middle.png'
};

function shoot(position) {
  const dest = targets[position];
  const randomIndex = Math.floor(Math.random() * Object.keys(targets).length);
  const keeperChoice = Object.values(targets)[randomIndex];

  // Define a sprite do goleiro com base na escolha
  if (keeperChoice.keeper === 'center') {
    keeper.src = keeperSprites.middle;
  } else {
    keeper.src = keeperSprites[keeperChoice.keeper];
  }

  // Ajusta a posição e o pivô do goleiro
  keeper.style.left = keeperChoice.left;
  keeper.style.top = keeperChoice.top;
  keeper.style.transformOrigin = keeperChoice.pivot; // Define o pivô na luva

  // Move a bola para o destino
  ball.style.left = dest.left;
  ball.style.top = dest.top;

  setTimeout(() => {
    if (dest.left === keeperChoice.left && dest.top === keeperChoice.top) {
      statusEl.textContent = "❌ Ohhh! Start again!";
      score = 0;
    } else {
      score += 10;
      statusEl.textContent = "✅ Goal!";
      if (score >= 100) {
        statusEl.textContent = "🎉 You got the some item for free!";
      }
    }
    scoreEl.textContent = `Score: ${score}%`;

    // Reseta a posição do goleiro e da bola
    setTimeout(() => {
      ball.style.top = '85%';
      ball.style.left = '49%';
      keeper.src = 'assets/keeper_idle.png';
      keeper.style.top = '35%';
      keeper.style.left = '50%';
      keeper.style.transformOrigin = '50% 50%';
    }, 1000);
  }, 700);
}