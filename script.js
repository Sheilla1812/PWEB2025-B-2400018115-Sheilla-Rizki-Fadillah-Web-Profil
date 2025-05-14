// Display welcome alert on page load
window.addEventListener('load', () => {
    alert('Halo! Terima kasih sudah mengunjungi profil sella!');

    // Add slide-in animation for the main section on each page
    const mainSection = document.querySelector('.slide-in');
    if (mainSection) {
        mainSection.style.opacity = '0';
        mainSection.style.transform = 'translateX(-100px)';
        setTimeout(() => {
            mainSection.style.opacity = '1';
            mainSection.style.transform = 'translateX(0)';
            mainSection.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        }, 100);
    }
});