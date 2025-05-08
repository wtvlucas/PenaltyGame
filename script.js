let score = 0;
const ball = document.getElementById('ball');
const keeper = document.getElementById('keeper');
const statusEl = document.getElementById('status');
const scoreEl = document.getElementById('score');

const targets = {
  'top-left':  { top: '10%', left: '34%', keeper: 'left' }, 
  'top-right': { top: '10%', left: '62%', keeper: 'right' }, 
  'center':    { top: '25%', left: '48%', keeper: 'center' },
  'bottom-left': { top: '32%', left: '34%', keeper: 'left' }, 
  'bottom-right': { top: '32%', left: '62%', keeper: 'right' } 
};

const keeperSprites = {
  left: 'assets/keeper_idle.png',
  right: 'assets/keeper_idle.png',
  center: 'assets/keeper_idle.png'
};

function shoot(position) {
  const dest = targets[position];
  const randomIndex = Math.floor(Math.random() * Object.keys(targets).length);
  const keeperChoice = Object.values(targets)[randomIndex];


  keeper.src = keeperSprites[keeperChoice.keeper];
  keeper.style.left = keeperChoice.left;
  keeper.style.top = keeperChoice.top;


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


    setTimeout(() => {
      ball.style.top = '85%';
      ball.style.left = '49%';
      keeper.src = 'assets/keeper_idle.png';
      keeper.style.top = '23%';
      keeper.style.left = '45%';
    }, 1000);
  }, 700);
}
