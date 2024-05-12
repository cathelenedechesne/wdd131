// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Constants for wind chill calculation
    const tempUnit = '°C'; // Temperature unit (you can adjust this based on your preference)
    const windSpeedUnit = 'km/h'; // Wind speed unit (you can adjust this based on your preference)
    const windChillUnit = tempUnit; // Wind chill unit (assumed to be same as temperature unit)

    // Check if conditions for wind chill calculation are met
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate wind chill using the formula
        const windChill = Math.round((13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) * 10) / 10;
        return windChill + windChillUnit;
    } else {
        // Conditions not met, return "N/A"
        return "N/A";
    }
}

// Function to display wind chill on the page
function displayWindChill() {
    // Static temperature and wind speed values (for demonstration purposes)
    const temperature = 15; // Celsius
    const windSpeed = 5; // km/h

    // Calculate wind chill
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display wind chill on the page
    const windChillElement = document.getElementById('windChillValue');
    windChillElement.textContent = windChill;
}

// Call displayWindChill function when the page loads
window.addEventListener('load', displayWindChill);

function displayFooterInfo() {
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById('2024');
    currentYearElement.textContent = currentYear;
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last modified: " + lastModified;
}

// Call displayFooterInfo function when the page loads
window.addEventListener('load', displayFooterInfo);