const destinations = [
    {
        name: "Paris",
        image: "images/paris.webp",
        description: "Experience the city of love.",
    },
    {
        name: "Tokyo",
        image: "images/high-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg",
        description: "Explore the vibrant culture of Japan.",
    },
    {
        name: "New York",
        image: "images/newyork.webp",
        description: "Discover the city that never sleeps.",
    },
    {
        name: "London",
        image: "images/london.jpg",
        description: "Visit historic landmarks and museums.",
    },
    {
        name: "Sydney",
        image: "images/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg",
        description: "Enjoy stunning beaches and the Sydney Opera House.",
    },

    {
        name: "India",
        image: "images/Hill-Stations-Holidays.jpg",
        description: "Atithi Devo Bhava",
    },
    {
        name: "China",
        image: "images/shutterstock_245773270v2.jpg",
        description: "A World Heritage site known for its historical significance.",
    },
    {
        name: "Peru",
        image: "images/photo-1526392060635-9d6019884377.jpeg",
        description: "An ancient Incan citadel perched high in the Andes Mountains.",
    },
    {
        name: "Egypt",
        image: "images/jpg.webp",
        description: "The last surviving of the Seven Wonders of the Ancient World",
    },
    {
        name: "Greece",
        image: "images/istock-833264986.avif",
        description: "Known for its picturesque sunsets & stunning beaches",
    },
    {
        name: "Italy",
        image: "images/shutterstock_720444505v2-2208x1406-1.jpg",
        description: "amous for its canals, historic architecture & romantic ambiance.",
    },
    {
        name: "USA",
        image: "images/Untitled-design1-1.png",
        description: "canyon carved by the Colorado River & breathtaking views",
    },
    {
        name: "Morocco",
        image: "images/morocco.jpeg",
        description: "Known for its vibrant markets, palaces, and gardens.",
    },
    {
        name: "Australia",
        image: "images/Australia.jpg",
        description: "Famous for its marine biodiversity.",
    },
    {
        name: "Cambodia",
        image: "images/combodia.jpeg",
        description: "The largest religious monument in the world.",
    },
    {
        name: "UAE",
        image: "images/UAE.jpeg",
        description: "Famous for its modern architecture and desert adventures.",
    },
    {
        name: " Brazil",
        image: "images/brazil.jpeg",
        description: "Known for its beautiful beaches, vibrant culture",
    },
    {
        name: " Japan",
        image: "images/japan.jpg",
        description: "Famous for its modern architecture and desert adventures.",
    },
];

const destinationList = document.getElementById("destination-list");
const filterInput = document.getElementById("filter");

// Function to generate destination cards
function generateDestinationCard(destination) {
    const card = document.createElement("div"); 
    card.classList.add("destination-card");
    card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
        <button id="${destination.name}">${"View"}</button>
    `;
    return card;
}

// Function to update the displayed destination cards based on the filter
function updateDestinationList(filter) {
    destinationList.innerHTML = "";
    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(filter.toLowerCase())
    );
    filteredDestinations.forEach(destination => {
        const card = generateDestinationCard(destination);
        destinationList.appendChild(card);
    });
}

// Initial display of all destinations
updateDestinationList("");

// Event listener for filtering destinations
filterInput.addEventListener("input", () => {
    updateDestinationList(filterInput.value);
});

document.getElementById("Paris").addEventListener("click", function() {
    // Specify the URL of the new page
    const newPageUrl = "paris.html";
    
    // Redirect to the new page
    window.location.href = newPageUrl;


})
