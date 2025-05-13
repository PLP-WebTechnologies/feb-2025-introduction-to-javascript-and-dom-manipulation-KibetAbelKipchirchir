// Change text content dynamically
const changeableText = document.getElementById('changeable-text');
const textChangerBtn = document.getElementById('text-changer');

textChangerBtn.addEventListener('click', () => {
    changeableText.textContent = "The text has been changed successfully!";
    changeableText.style.color = "#2ecc71";
});

// Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');
const styleChangerBtn = document.getElementById('style-changer');

styleChangerBtn.addEventListener('click', () => {
    styleDemo.classList.toggle('modified-style');
    
    if (styleDemo.classList.contains('modified-style')) {
        styleChangerBtn.textContent = "Reset Style";
    } else {
        styleChangerBtn.textContent = "Change Style";
    }
});

// Add or remove an element when a button is clicked
const toggleElement = document.getElementById('toggle-element');
const elementTogglerBtn = document.getElementById('element-toggler');

elementTogglerBtn.addEventListener('click', () => {
    toggleElement.classList.toggle('hidden');
    
    if (toggleElement.classList.contains('hidden')) {
        elementTogglerBtn.textContent = "Show Element";
    } else {
        elementTogglerBtn.textContent = "Hide Element";
    }
});