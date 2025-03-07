const word = "SHINDOBLE";
const container = document.getElementById("shindoble");
const letterSpacing = 6; // Adjust this value for spacing between letters

word.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.classList.add('letter');
    
    // Randomize initial position
    const randomX = Math.random() * 100; // Random position between 0vw and 100vw
    const randomY = Math.random() * 100; // Random position between 0vh and 100vh
    span.style.transform = `translate(${randomX}vw, ${randomY}vh)`;
    
    container.appendChild(span);
    
    // Calculate final position to center the word
    const finalX = (index - (word.length - 1) / 2) * letterSpacing; // Center the word
    const finalY = 0; // Keep it on the same horizontal line
    
    // Trigger the animation after a short delay
    setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = `translate(${finalX}rem, ${finalY}rem)`; // Move to final position
    }, index * 200); // Stagger the animation
});