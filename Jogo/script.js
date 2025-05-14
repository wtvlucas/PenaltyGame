let score = 0;
let shooting = false;
const ball = document.getElementById('ball');
const keeper = document.getElementById('keeper');
const statusEl = document.getElementById('status');
const scoreEl = document.getElementById('score');

const targets = {
  'top-left':  { top: '13%', left: '25%', keeper: 'left', pivot: '20% 30%', rotation: '-45deg' }, 
  'top-right': { top: '13%', left: '75%', keeper: 'right', pivot: '80% 30%', rotation: '45deg' }, 
  'center':    { top: '25%', left: '50%', keeper: 'center', pivot: '50% 50%', rotation: '0deg' },
  'bottom-left': { top: '38%', left: '25%', keeper: 'left', pivot: '20% 70%', rotation: '-90deg' }, 
  'bottom-right': { top: '38%', left: '75%', keeper: 'right', pivot: '80% 70%', rotation: '90deg' } 
};


const keeperTarget = {
  'top-left':  { top: '7%', left: '29%', keeper: 'left', pivot: '50% 50%', rotation: '-45deg' }, 
  'top-right': { top: '23%', left: '60%', keeper: 'right', pivot: '50% 50%', rotation: '45deg' }, 
  'center':    { top: '30%', left: '50%', keeper: 'center', pivot: '50% 50%', rotation: '0deg' },
  'bottom-left': { top: '10%', left: '30%', keeper: 'left', pivot: '50% 50%', rotation: '-90deg' }, 
  'bottom-right': { top: '37%', left: '52%', keeper: 'right', pivot: '50% 50%', rotation: '90deg' } 
};


const keeperSprites = {
  left: 'assets/keeper_left.png',
  right: 'assets/keeper_right.png',
  center: 'assets/keeper_idle.png',
  middle: 'assets/keeper_middle.png'
};

function shoot(position) {
  if (shooting) return; 
 
    shooting = true;
    const dest = targets[position];
    const randomIndex = Math.floor(Math.random() * Object.keys(targets).length);
    const keeperChoice = Object.values(keeperTarget)[randomIndex];

   // const keeperChoice = keeperTarget['center'];
  
    if (keeperChoice.keeper === 'center') {
      keeper.src = keeperSprites.middle;
    } else {
      keeper.src = keeperSprites[keeperChoice.keeper];
    }


    keeper.style.left = keeperChoice.left;
    keeper.style.top = keeperChoice.top;
   // keeper.style.transformOrigin = keeperChoice.pivot;
    keeper.style.rotate = keeperChoice.rotation;


    ball.style.left = dest.left;
    ball.style.top = dest.top;

    setTimeout(() => {
      const keeperPositions = Object.keys(keeperTarget);
      const keeperPositionName = keeperPositions[randomIndex];

      if (position === keeperPositionName) {
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
        ball.style.left = '50%';
        keeper.src = 'assets/keeper_idle.png';
        keeper.style.rotate = '0deg';
        keeper.style.top = '35%';
        keeper.style.left = '50%';
      
        shooting = false;
      }, 1000);
    }, 700);

}