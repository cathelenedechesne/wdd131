// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the span with id "2024" to display the current year
document.getElementById("2024").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the content of the paragraph with id "lastModified" to display the last modified date
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;


/* ----- Hamburger button -----*/

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
}
)

// Event listener for window resize event
window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) { // Adjust threshold as needed
        closeHamMenu();
    }
});
