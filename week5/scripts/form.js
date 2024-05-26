// Define the product array
const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        avgRating: 5.0
    }
];

// Function to populate the product select options
function populateProductOptions() {
    const productSelect = document.getElementById('productSelect');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

// Function to increment the review counter in localStorage
function incrementReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    return reviewCount;
}

// Function to display the review count
function displayReviewCount() {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
}

// Function to update the footer with the current year and last modified date
function updateFooter() {
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        const lastModifiedDate = document.lastModified;
        lastModifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
}

// Attach the increment function to the form submission
document.addEventListener('DOMContentLoaded', function () {
    populateProductOptions();
    updateFooter();

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', incrementReviewCounter);
    }

    // If on review.html, display the review count
    if (document.getElementById('reviewCount')) {
        displayReviewCount();
    }
});

// Hope this works!!