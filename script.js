// Get dialog and buttons
const dialog = document.getElementById('valentineDialog');
const saysikeDialog = document.getElementById('saysikeDialog');
const congratsDialog = document.getElementById('congratsDialog');
const openButton = document.getElementById('openDialog');
const yesButton = document.getElementById('optionYes');
const noButton = document.getElementById('optionNo');
const closeXButton = document.getElementById('closeDialogX');
const closeSaysikeXButton = document.getElementById('closeSaysikeX');
const closeCongratsXButton = document.getElementById('closeCongratsX');
const tryAgainButton = document.getElementById('tryAgainButton');

// Open dialog when button is clicked
openButton.addEventListener('click', () => {
    dialog.showModal();
});

// Handle Yes button click
yesButton.addEventListener('click', () => {
    dialog.close();
    showCelebration();
});

// Handle No button click
noButton.addEventListener('click', () => {
    dialog.close();
    saysikeDialog.showModal();
});

// Close dialog when X button is clicked
closeXButton.addEventListener('click', () => {
    dialog.close();
});

// Close saysike dialog when X button is clicked
closeSaysikeXButton.addEventListener('click', () => {
    saysikeDialog.close();
});

// Try again button - close saysike dialog and reopen main dialog
tryAgainButton.addEventListener('click', () => {
    saysikeDialog.close();
    dialog.showModal();
});

// Close congrats dialog when X button is clicked
closeCongratsXButton.addEventListener('click', () => {
    congratsDialog.close();
});

// Close dialog when clicking outside of it
dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});

// Close saysike dialog when clicking outside of it
saysikeDialog.addEventListener('click', (e) => {
    const dialogDimensions = saysikeDialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        saysikeDialog.close();
    }
});

// Close congrats dialog when clicking outside of it
congratsDialog.addEventListener('click', (e) => {
    const dialogDimensions = congratsDialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        congratsDialog.close();
    }
});

// Optional: Add some sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '5px';
    sparkle.style.height = '5px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle 0.6s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }

    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }

    @keyframes glitter {
        0%, 100% {
            text-shadow:
                0 0 10px #fff,
                0 0 20px #fff,
                0 0 30px #ff69b4,
                0 0 40px #ff69b4,
                0 0 50px #ff69b4;
        }
        50% {
            text-shadow:
                0 0 20px #fff,
                0 0 30px #ffb6d9,
                0 0 40px #ffb6d9,
                0 0 50px #ff1493,
                0 0 60px #ff1493,
                0 0 70px #ff1493;
        }
    }
`;
document.head.appendChild(style);

// Celebration function
function showCelebration() {
    // Create YAY message
    const yayMessage = document.createElement('div');
    yayMessage.textContent = 'YAY';
    yayMessage.style.position = 'fixed';
    yayMessage.style.top = '50%';
    yayMessage.style.left = '50%';
    yayMessage.style.transform = 'translate(-50%, -50%)';
    yayMessage.style.fontSize = '75vh';
    yayMessage.style.fontWeight = 'bold';
    yayMessage.style.fontFamily = "'Courier New', Courier, monospace";
    yayMessage.style.color = '#ff69b4';
    yayMessage.style.zIndex = '10000';
    yayMessage.style.animation = 'glitter 1s ease-in-out infinite';
    yayMessage.style.letterSpacing = '20px';
    yayMessage.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff69b4';
    yayMessage.style.lineHeight = '1';

    document.body.appendChild(yayMessage);

    // Create confetti
    const colors = ['#ff69b4', '#ff1493', '#ffb6d9', '#00ff00', '#ff0000', '#ffff00', '#00ffff', '#ff00ff'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti(colors);
        }, i * 30);
    }

    // Remove YAY message after 3 seconds and show congrats dialog
    setTimeout(() => {
        yayMessage.remove();
        congratsDialog.showModal();
    }, 3000);
}

function createConfetti(colors) {
    const confetti = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const size = Math.random() * 10 + 5;
    const duration = Math.random() * 3 + 2;

    confetti.style.position = 'fixed';
    confetti.style.left = left + '%';
    confetti.style.top = '-10px';
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    confetti.style.background = color;
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = `confettiFall ${duration}s linear forwards`;

    // Random shapes
    if (Math.random() > 0.5) {
        confetti.style.borderRadius = '50%';
    }

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}


