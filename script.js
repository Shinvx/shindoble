const word = "SHINDOBLE";
const container = document.getElementById("shindoble");
const letterSpacing = 6;

word.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.classList.add('letter');
    
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    span.style.transform = `translate(${randomX}vw, ${randomY}vh)`;
    
    container.appendChild(span);
    
    const finalX = (index - (word.length - 1) / 2) * letterSpacing;
    const finalY = 0;
    
    setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = `translate(${finalX}rem, ${finalY}rem)`;
    }, index * 200);
});