// Front/Back ID Card Flip Toggle
document.addEventListener('DOMContentLoaded', function() {
    const flipBtn = document.getElementById('flipBtn');
    const idContainer = document.getElementById('idContainer');
    
    if (flipBtn && idContainer) {
        flipBtn.addEventListener('click', function() {
            idContainer.classList.toggle('flipped');
            
            // Update button text based on state (preserving hints)
            const btnText = flipBtn.querySelector('.btn-text');
            
            if (idContainer.classList.contains('flipped')) {
                btnText.textContent = 'Show Front';
            } else {
                btnText.textContent = 'Flip Card';
            }
        });
    }

    // Optional: Keyboard accessibility
    document.addEventListener('keydown', function(e) {
        // Press 'F' key to flip
        if (e.key === 'f' || e.key === 'F') {
            if (flipBtn) {
                flipBtn.click();
            }
        }
    });

    // Optional: Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (idContainer) {
        idContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        idContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }

    function handleSwipe() {
        const swipeThreshold = 50; // minimum distance for swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swiped left - show back
            if (!idContainer.classList.contains('flipped')) {
                flipBtn.click();
            }
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swiped right - show front
            if (idContainer.classList.contains('flipped')) {
                flipBtn.click();
            }
        }
    }
});