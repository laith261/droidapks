class DroidHelper {
    constructor() {
        this.contentElement = document.querySelector('.content');
        this.init();
    }

    init() {
        window.addEventListener('DOMContentLoaded', () => {
            this.revealContent();
            this.setupParallax();
        });
    }

    revealContent() {
        setTimeout(() => {
            if (this.contentElement) {
                this.contentElement.classList.add('visible');
            }
        }, 300);
    }

    setupParallax() {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const img = document.querySelector('.hero-bg img');
            if (img) {
                img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
            }
        });
    }
}

// Instantiate the helper
const app = new DroidHelper();
