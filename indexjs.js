document.addEventListener('DOMContentLoaded', () => {
    // This function can be used to handle responsive behavior for Dr. Maria's photo
    // and other elements if needed. It's currently a placeholder for future enhancements.

    const doctorPhoto = document.querySelector('.doctor-photo');
    const doctorCard = document.querySelector('.doctor-card');
    const doctorImg = document.querySelector('.doctor-img');

    // Function to check and adjust photo size based on card size
    const adjustPhotoSize = () => {
        const cardWidth = doctorCard.offsetWidth;
        // Keep the aspect ratio fixed (e.g., 600x800)
        const photoHeight = (cardWidth * 800) / 600;
        doctorPhoto.style.height = `${photoHeight}px`;
    };

    // Initial call and event listener for window resize
    window.addEventListener('resize', adjustPhotoSize);
    adjustPhotoSize();

    // Example of a simple hover effect for buttons (can be done with CSS as well)
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Add a class on hover
            button.classList.add('hover-effect');
        });
        button.addEventListener('mouseleave', () => {
            // Remove the class when not hovering
            button.classList.remove('hover-effect');
        });
    });
});