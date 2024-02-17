const destinations = [
    {
        name: "Andhra Pradesh",
        image: "images/india/Andhra Pradesh.jpg",
        description: " Offers Tawang's Buddhist monasteries, scenic landscapes, and rich tribal culture.",
    },
    {
        name: "Arunachal Pradesh",
        image: "images/india/Arunachal-Pradesh.avif",
        description: "Explore the pristine landscapes and Buddhist monasteries.Known as the Land of the Dawn-Lit Mountains,",
    },
    {
        name: "Rajasthan",
        image: "images/india/road-trips-in-Rajasthan.jpg",
        description: "Explore the palaces of Jaipur, the deserts of Jaisalmer,",
    },
    {
        name: "Kerala",
        image: "images/india/kerela.jpg",
        description: "houseboat cruises, Ayurvedic treatments wildlife sanctuaries.",
    },
    {
        name: "Goa",
        image: "images/india/goa.jpg",
        description: " It's a popular destination for both relaxation and partying.",
    },

    {
        name: "Himachal Pradesh",
        image: "images/india/Himachal Pradesh.jpg",
        description: " It's a great place for trekking and outdoor activities.",
    },
    {
        name: "Uttarakhand",
        image: "images/india/Uttarakhand.jpg",
        description: "Known for its spiritual significance and natural beauty.",
    },
    {
        name: "Tamil Nadu",
        image: "images/india/Tamil Nadu.jpg",
        description: "Explore the temples of Madurai, the beaches of Chennai, ",
    },
    {
        name: "Karnataka",
        image: "images/india/Karnataka.jpg",
        description: "Tech city of Bangalore, Karnataka also offers historical sites like Hampi",
    },
    {
        name: "Punjab",
        image: "images/india/Punjab.webp",
        description: " Visit the Golden Temple in Amritsar & explore the bustling city of Chandigarh.",
    },
    {
        name: "Maharashtra",
        image: "images/india/Maharashtra.jpg",
        description: "Explore the bustling city of Mumbai, the historic sites of Pune, and the hill stations",
    },
    {
        name: " Assam",
        image: "images/india/Assam.jpg",
        description: "Assam offers opportunities to visit Kaziranga National Park ",
    },
    {
        name: "West Bengal",
        image: "images/india/West Bengal.jpg",
        description: "Discover the cultural hub of Kolkata, the hill station of Darjeeling, and the mangrove forests of the Sundarbans.",
    },
    {
        name: "Gujarat",
        image: "images/india/Gujarat.jpeg",
        description: "Visit the colorful cities of Ahmedabad and Bhuj, as well as the white desert of Kutch during the Rann Utsav.",
    },
    {
        name: "Odisha",
        image: "images/india/Odisha.jpg",
        description: "Explore the ancient temples of Bhubaneswar and the beautiful beaches of Puri. Don't miss the Sun Temple at Konark.",
    },
    {
        name: "Jammu and Kashmir",
        image: "images/india/Jammu and Kashmir.jpg",
        description: "Known for its breathtaking landscapes, including the Dal Lake in Srinagar and the adventurous terrains of Ladakh.",
    },
    {
        name: "Meghalaya",
        image: "images/india/Meghalaya.jpeg",
        description: "Discover the natural wonders of Meghalaya, such as Cherrapunji, one of the wettest places on Earth, and the living root bridges.",
    },
    {
        name: "Andaman and Nicobar Islands",
        image: "images/india/Andaman and Nicobar Islands.jpg",
        description: "Enjoy white sandy beaches, water sports, and coral reefs in this tropical paradise..",
    },
    {
        name: "Sikkim",
        image: "images/india/Sikkim.png",
        description: " Experience the serene beauty of the Himalayas, visit the capital city Gangtok, and explore Buddhist monasteries.",
    },
    {
        name: "Madhya Pradesh",
        image: "images/india/Madhya Pradesh.jpg",
        description: "Home to historical and archaeological wonders like Khajuraho temples, Sanchi Stupa, and the wildlife of Kanha National Park.",
    },
    {
        name: "Telangana",
        image: "images/india/Telangana.jpg",
        description: "Discover the historic city of Hyderabad, with its rich cuisine and monuments, and explore Warangal's temples and architecture.",
    },
    {
        name: "Uttar Pradesh",
        image: "images/india/Uttar Pradesh.jpg",
        description: "Home to the iconic Taj Mahal in Agra, the spiritual city of Varanasi, and historic sites in Lucknow and Allahabad.",
    },
    {
        name: "Bihar",
        image: "images/india/Bihar.jpg",
        description: "Discover Bodh Gaya, where Buddha attained enlightenment, and the historic city of Patna.",
    },
    {
        name: "Lakshadweep",
        image: "images/india/Lakshadweep.webp",
        description: " Known for its coral reefs, clear waters, and water sports like snorkeling and scuba diving.",
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

document.getElementById(destination.name).addEventListener("click", function() {
    // Specify the URL of the new page
    const newPageUrl = "india htlm/andra.html";
    
    // Redirect to the new page
    window.location.href = newPageUrl;


})


