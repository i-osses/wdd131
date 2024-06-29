document.addEventListener("DOMContentLoaded", function(){
  displayWindChill();
  displayFooterLastModify();
});

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed >= 3) {
    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(2); 
  } else {
    return "N/A"; 
  }
}

// Function to display wind chill
function displayWindChill() {
  //variables
  const temperature = 39;
  const windSpeed = 15;
  const windChill = calculateWindChill(temperature, windSpeed);

  document.querySelector("#temperature").textContent =`${temperature}`;
  document.querySelector("#windSpeed").textContent = `${windSpeed}`;
  document.querySelector("#windChill").textContent = `${windChill}`;
}

function displayFooterLastModify(){
  // Set the current year
  const year = new Date().getFullYear();
  document.querySelector("#currentyear").textContent = year;

// Set the last modified date
  const lastModify = new Date(document.lastModified);
  document.querySelector("#lastmodify").textContent = lastModify.toLocaleDateString();

}

