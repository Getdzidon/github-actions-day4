const roomContainer = document.getElementById('roomContainer');

// Example room data
const rooms = [
    {
        id: 1,
        name: "Cozy Studio in City Center",
        description: "A small yet comfortable studio located in the heart of downtown.",
        imageUrl: "https://via.placeholder.com/300x200",
        price: "$50/night",
    },
    {
        id: 2,
        name: "Beachside Villa",
        description: "Enjoy a relaxing stay with an ocean view.",
        imageUrl: "https://via.placeholder.com/300x200",
        price: "$150/night",
    },
    {
        id: 3,
        name: "Mountain Cabin Retreat",
        description: "Perfect for a peaceful getaway surrounded by nature.",
        imageUrl: "https://via.placeholder.com/300x200",
        price: "$120/night",
    },
];

// Function to render rooms
function renderRooms() {
    roomContainer.innerHTML = '';
    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('room');
        roomElement.innerHTML = `
            <img src="${room.imageUrl}" alt="${room.name}">
            <div class="room-details">
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <p><strong>${room.price}</strong></p>
            </div>
        `;
        roomContainer.appendChild(roomElement);
    });
}

// Initialize page
renderRooms();
