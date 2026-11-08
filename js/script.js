// Step 1: Select the necessary nodes from the DOM
// We grab the button by its ID, and we grab the entire body element
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Step 2: Add an event listener to listen for user interaction
themeToggleBtn.addEventListener('click', function() {
    
    // Step 3: Manipulate the DOM by toggling the 'dark-theme' class on the body node
    bodyElement.classList.toggle('dark-theme');
    
    // Step 4: Update the button text based on the current state of the DOM
    if (bodyElement.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});