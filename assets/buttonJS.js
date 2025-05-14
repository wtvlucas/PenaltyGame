document.addEventListener('DOMContentLoaded', function() {
   
    setTimeout(function() {
        const modalOverlay = document.getElementById('modalOverlay');
        const discountButton = document.getElementById('discountButton');
        const gameContainer = document.getElementById('gameContainer');
        const gameFrame = document.getElementById('gameFrame');
        
       
        modalOverlay.style.display = 'flex';
        
      
        discountButton.focus();
        
   
        setTimeout(() => {
            modalOverlay.style.opacity = '1';
        }, 100);
        
      
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                discountButton.focus();
            }
        });
        
     
        discountButton.addEventListener('click', function() {
       
            modalOverlay.style.opacity = '0';
            setTimeout(() => {
                modalOverlay.style.display = 'none';
            }, 300);

       
            gameContainer.style.display = 'block';
            
  
            gameFrame.src = 'Jogo/index.html';
            gameFrame.style.display = 'block';
            gameFrame.classList.add('fade-in');
        });
        
    }, 3000); 
});