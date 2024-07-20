function displayFooterLastModify() {
  const year = new Date().getFullYear();
  const currentYearElement = document.querySelector("#currentyear");
  const lastModifyElement = document.querySelector("#lastmodify");

  if (currentYearElement) {
    currentYearElement.textContent = year;
  }

  if (lastModifyElement) {
    const lastModify = new Date(document.lastModified);
    lastModifyElement.textContent = lastModify.toLocaleDateString();
  }
}

function menuToggle() {
  const mainnav = document.querySelector('.navigation');
  const hambutton = document.querySelector('#menu');

  if (hambutton) {
    hambutton.addEventListener('click', () => {
      if (mainnav) {
        mainnav.classList.toggle('show');
      }
      hambutton.classList.toggle('show');
    });
  }
}

function nextSunday() {
  const today = new Date();
  const daysUntilNextSunday = (7 - today.getDay()) % 7;

  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilNextSunday);

  const nextSundayStr = nextSunday.toLocaleDateString('en-US');
  const nextSundayElement = document.querySelector("#next-sunday");

  if (nextSundayElement) {
    nextSundayElement.textContent = nextSundayStr;
  }
}

function loadEvents() {
  fetch('events.json')
    .then(response => response.json())
    .then(data => {
      const activitiesContainer = document.getElementById('activities-container');
      if (activitiesContainer) {
        activitiesContainer.innerHTML = ""; // Clear existing content
        
        data.forEach(event => {
          const eventElement = document.createElement('div');
          eventElement.classList.add('event');
          
          const dateElement = document.createElement('h2');
          dateElement.textContent = event.date;
          eventElement.appendChild(dateElement);
          
          const nameElement = document.createElement('h3');
          nameElement.textContent = event.name;
          eventElement.appendChild(nameElement);
          
          const detailsElement = document.createElement('p');
          detailsElement.textContent = event.details;
          eventElement.appendChild(detailsElement);
          
          activitiesContainer.appendChild(eventElement);
        });
      }
    })
    .catch(error => console.error('Error fetching events:', error));
}

document.addEventListener("DOMContentLoaded", function() {
  displayFooterLastModify();
  menuToggle();
  nextSunday();
  loadEvents();
});
