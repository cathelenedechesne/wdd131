const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
}
)

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the span with id "2024" to display the current year
document.getElementById("2024").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the content of the paragraph with id "lastModified" to display the last modified date
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
    },

    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-temple-954939-wallpaper.jpg"
    },

    {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        rededicated: "2022, June, 19",
        area: 51921,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },

    {
        templeName: "Taipei Taiwan",
        location: "Taipei, Taiwan",
        dedicated: "1984, November, 17",
        area: 9945,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
    },

    {
        templeName: "Melbourne Australia",
        location: "Merlbourn, Australia",
        dedicated: "2000, June, 16",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-australia-temple-lds-1025169-wallpaper.jpg"
    },

    {
        templeName: "Sydney Australia",
        location: "Sydney, Australia",
        dedicated: "1984, Spetember, 20",
        area: 30677,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-sunset-1116152-wallpaper.jpg"
    },

    // Add more temple objects here...
];

// Function to display all temples
function displayAllTemples() {
    templeGrid.innerHTML = ''; // Clear existing temple cards
    temples.forEach(temple => {
        createTempleCard(temple);
    });
}

// Function to create a temple card
function createTempleCard(temple) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.width = "400"; // Specify the width
    img.height = "250"; // Specify the height
    img.loading = "lazy";
    card.appendChild(img);

    const details = document.createElement("div");
    details.classList.add("card-details");
    details.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} square feet</p>
        ${temple.rededicated ? `<p><strong>Rededicated:</strong> ${temple.rededicated}</p>` : ''}
    `;
    card.appendChild(details);

    templeGrid.appendChild(card);
}

// Function to filter and display temples based on criteria
function filterAndDisplayTemples(criteria) {
    templeGrid.innerHTML = ''; // Clear existing temple cards

    let titleText = "";

    switch (criteria) {
        case 'old':
            titleText = "Old Temples";
            temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900).forEach(temple => {
                createTempleCard(temple);
            });
            break;
        case 'new':
            titleText = "New Temples";
            temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) > 2000).forEach(temple => {
                createTempleCard(temple);
            });
            break;
        case 'large':
            titleText = "Large Temples";
            temples.filter(temple => temple.area > 90000).forEach(temple => {
                createTempleCard(temple);
            });
            break;
        case 'small':
            titleText = "Small Temples";
            temples.filter(temple => temple.area < 10000).forEach(temple => {
                createTempleCard(temple);
            });
            break;
        default:
            displayAllTemples();
            titleText = "Home";
            break;
    }

    // Update h2 text
    document.querySelector('h2').textContent = titleText;
}


// Function to close the hamburger menu
function closeHamMenu() {
    navigation.classList.remove('show');
    hamButton.classList.remove('show');
}

// Event listener for window resize event
window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) { // Adjust threshold as needed
        closeHamMenu();
    }
});

// Respond to navigation menu items
document.querySelectorAll('.navigation a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const criteria = this.getAttribute('id'); // Get the ID of the clicked item
        filterAndDisplayTemples(criteria); // Filter and display temples based on the clicked item
    });
});

// Get the main element to append temple cards
const templeGrid = document.getElementById("templeGrid");

// Initial display of all temples
displayAllTemples();