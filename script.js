// Estado da aplicação
let isOpened = false;

// Elementos DOM
const envelopeScreen = document.getElementById('envelope-screen');
const letterScreen = document.getElementById('letter-screen');
const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('open-btn');
const confirmBtn = document.getElementById('confirm-btn');
const toast = document.getElementById('toast');
const background = document.getElementById('background');
const particlesContainer = document.getElementById('particles');

// Criar background animado
function createBackground() {
    // Névoa
    const fog1 = document.createElement('div');
    fog1.className = 'fog';
    fog1.style.background = 'radial-gradient(circle at 30% 50%, rgba(100, 50, 150, 0.3) 0%, transparent 50%)';
    background.appendChild(fog1);

    const fog2 = document.createElement('div');
    fog2.className = 'fog';
    fog2.style.background = 'radial-gradient(circle at 70% 50%, rgba(150, 50, 100, 0.3) 0%, transparent 50%)';
    fog2.style.animationDelay = '5s';
    background.appendChild(fog2);

    // Luz da lua
    const moonlight = document.createElement('div');
    moonlight.style.cssText = `
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 384px;
        height: 384px;
        opacity: 0.2;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    `;
    background.appendChild(moonlight);

    // Bruxas voando
    for (let i = 0; i < 3; i++) {
        const witch = document.createElement('div');
        witch.className = 'witch';
        witch.style.top = `${15 + i * 20}%`;
        witch.style.animationDelay = `${i * 5}s`;
        witch.style.animationDuration = `${12 + i * 3}s`;
        witch.innerHTML = `
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M8 32 Q8 28, 12 26 L20 24 L22 20 Q24 16, 28 16 Q32 16, 34 20 L36 24 L44 26 Q48 28, 48 32 L46 38 Q44 42, 40 42 L24 42 Q20 42, 18 38 L16 32" 
                      fill="hsl(260, 100%, 6%)" />
                <circle cx="28" cy="30" r="2" fill="hsl(24, 100%, 54%)" />
                <path d="M10 30 L2 28 M10 34 L2 36" stroke="hsl(260, 100%, 6%)" stroke-width="2" />
            </svg>
        `;
        background.appendChild(witch);
    }

    // Partículas flutuantes
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'float-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${4 + Math.random() * 4}s`;
        
        const size = 2 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = 'hsl(38, 45%, 52%)';
        particle.style.boxShadow = '0 0 10px rgba(187, 134, 76, 0.5)';
        
        background.appendChild(particle);
    }
}

// Abrir envelope
function openEnvelope() {
    envelope.classList.add('shake');
    
    setTimeout(() => {
        isOpened = true;
        envelopeScreen.classList.remove('active');
        
        setTimeout(() => {
            letterScreen.classList.add('active');
        }, 1500);
    }, 500);
}

// Confirmar presença
function confirmPresence(e) {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Criar partículas
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = '✨';
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        
        const endX = Math.random() * 200 - 100;
        const endY = Math.random() * 200 - 100;
        particle.style.setProperty('--particle-end', `translate(${endX}px, ${endY}px)`);
        particle.style.animation = `particleExplosion 1s ease-out forwards`;
        particle.style.animationDelay = `${i * 0.05}s`;
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000 + (i * 50));
    }

    // Mostrar toast
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }, 500);
}

// Event Listeners
openBtn.addEventListener('click', openEnvelope);
confirmBtn.addEventListener('click', confirmPresence);

// Inicializar
createBackground();
