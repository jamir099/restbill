// Mock data for menu items
const menuItems = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 12 },
    { id: 3, name: 'Pasta', price: 8 },
    // Add more items as needed
];

// Variables to store selected items
let selectedItems = [];

// Function to display menu items
function displayMenu() {
    const menuContainer = document.getElementById('menu');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<p>${item.name} - $${item.price}</p>
                              <button onclick="addToOrder(${item.id})">Add to Order</button>`;
        menuContainer.appendChild(menuItem);
    });
}

// Function to add items to the order
function addToOrder(itemId) {
    const selectedItem = menuItems.find(item => item.id === itemId);
    selectedItems.push(selectedItem);
    updateOrder();
}

// Function to update the order summary
function updateOrder() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    let totalCost = 0;
    selectedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        orderList.appendChild(listItem);
        totalCost += item.price;
    });
    const totalItem = document.createElement('li');
    totalItem.textContent = `Total: $${totalCost}`;
    orderList.appendChild(totalItem);
}

// Function to submit the order (in a real system, this would send data to the backend)
function submitOrder() {
    alert('Order submitted!');
}

// Initialize the page
displayMenu();
updateOrder();
