document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animation for feature cards
    const featureObserverOptions = {
        threshold: 0.1
    };

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, featureObserverOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        featureObserver.observe(card);
    });

    // Duplicate crypto items for infinite scroll
    const cryptoContainer = document.querySelector('.crypto-container');
    const items = cryptoContainer.innerHTML;
    cryptoContainer.innerHTML = items + items; // Duplicate for seamless loop
    
    // Add glow effect when crypto icons pass through the bridge
    const cryptoItems = document.querySelectorAll('.crypto-item');
    
    const cryptoObserverOptions = {
        root: document.querySelector('.crypto-bridge-container'),
        threshold: 1.0
    };
    
    const cryptoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bridge-glow');
                setTimeout(() => {
                    entry.target.classList.remove('bridge-glow');
                }, 1000);
            }
        });
    }, cryptoObserverOptions);
    
    cryptoItems.forEach(item => cryptoObserver.observe(item));
}); 