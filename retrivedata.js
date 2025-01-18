const fs = require('fs');

// Read JSON file
const rawData = fs.readFileSync('data.json');
const jsonData = JSON.parse(rawData);

// Extract all facilities
const facilitiesSet = new Set();
jsonData.data.hotels.forEach(hotel => {
    hotel.facilities.forEach(facility => facilitiesSet.add(facility));
});

const facilitiesArray = Array.from(facilitiesSet);

// Write to a separate file
fs.writeFileSync('facilities.json', JSON.stringify(facilitiesArray, null, 2));

console.log('Facilities extracted and saved to facilities.json');
