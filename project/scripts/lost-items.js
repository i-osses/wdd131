document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('lost-found-form');
  const itemsContainer = document.getElementById('items-container');

  // Load existing items from local storage
  loadItems();

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById('status').value;
    const location = document.getElementById('location').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    const item = {
      status,
      location,
      name,
      contact
    };

    // Save the item to local storage
    saveItem(item);

    // Display the new item
    displayItem(item);

    // Reset the form
    form.reset();
  });

  function saveItem(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  function loadItems() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(displayItem);
  }

  function displayItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Status:</strong> ${item.status}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Contact:</strong> ${item.contact}</p>
    `;
    itemsContainer.appendChild(itemDiv);
  }
});
