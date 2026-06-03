// DroidApks Interactive Effects
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.orbit-icons-container');
    if (!container) return;

    // Dynamically calculate and apply staggered orbit delays
    function updateOrbitDelays() {
        const icons = container.querySelectorAll('.orbit-icon');
        const count = icons.length;
        if (count === 0) return;

        // Try to get animation duration from computed style of the first icon, fallback to 20s
        let duration = 20;
        const firstIcon = icons[0];
        const computedDuration = window.getComputedStyle(firstIcon).animationDuration;
        if (computedDuration) {
            const parsed = parseFloat(computedDuration);
            if (!isNaN(parsed) && parsed > 0) {
                duration = parsed;
            }
        }

        // Apply delay to distribute icons evenly along the orbit cycle
        icons.forEach((icon, index) => {
            const delay = -((index * duration) / count);
            icon.style.setProperty('--delay', `${delay.toFixed(3)}s`);
        });
    }

    // Initial calculation
    updateOrbitDelays();

    // Observe changes to the container (e.g. icons added/removed dynamically)
    const observer = new MutationObserver(updateOrbitDelays);
    observer.observe(container, { childList: true });
});
