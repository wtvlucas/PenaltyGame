document.addEventListener('DOMContentLoaded', function() {
    // Espera 3 segundos antes de mostrar o modal
    setTimeout(function() {
        const modalOverlay = document.getElementById('modalOverlay');
        const discountButton = document.getElementById('discountButton');
        const gameContainer = document.getElementById('gameContainer');
        const gameFrame = document.getElementById('gameFrame');
        
        // Mostra o overlay
        modalOverlay.style.display = 'flex';
        
        // Força o foco no botão
        discountButton.focus();
        
        // Adiciona uma pequena delay antes de fazer o fade in
        setTimeout(() => {
            modalOverlay.style.opacity = '1';
        }, 100);
        
        // Impede que o foco saia do botão
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                discountButton.focus();
            }
        });
        
        // Adiciona o evento de clique ao botão
        discountButton.addEventListener('click', function() {
            // Remove o modal
            modalOverlay.style.opacity = '0';
            setTimeout(() => {
                modalOverlay.style.display = 'none';
            }, 300);

            // Mostra o container do jogo
            gameContainer.style.display = 'block';
            
            // Configura e mostra o iframe
            gameFrame.src = 'PenaltyGame/index.html';
            gameFrame.style.display = 'block';
            gameFrame.classList.add('fade-in');
        });
        
    }, 3000); // 3000 ms = 3 segundos
});