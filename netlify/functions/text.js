const { request } = require('undici');

// Fallback data for when API keys are missing
const fallbackData = {
  sun: {
    name: "Sun",
    type: "Star",
    distanceFromEarth_km: "149600000",
    radius_km: "696340",
    rotation_period_hours: "609.12",
    orbital_period_days: "N/A",
    orbital_speed_kms: "N/A",
    interesting_facts: [
      "The Sun contains 99.86% of the mass in the Solar System",
      "The Sun's core temperature reaches 15 million degrees Celsius",
      "The Sun converts 600 million tons of hydrogen into helium every second"
    ],
    sources: ["NASA Sun Fact Sheet", "JPL Solar System Dynamics"]
  },
  mercury: {
    name: "Mercury",
    type: "Terrestrial Planet",
    distanceFromEarth_km: "77300000",
    radius_km: "2439.7",
    rotation_period_hours: "1407.6",
    orbital_period_days: "88",
    orbital_speed_kms: "47.87",
    interesting_facts: [
      "Mercury is the smallest planet in our solar system",
      "Mercury has extreme temperature variations from 427°C to -173°C",
      "A day on Mercury lasts longer than its year"
    ],
    sources: ["NASA Mercury Fact Sheet", "JPL Solar System Dynamics"]
  },
  venus: {
    name: "Venus",
    type: "Terrestrial Planet",
    distanceFromEarth_km: "41400000",
    radius_km: "6051.8",
    rotation_period_hours: "5832.5",
    orbital_period_days: "225",
    orbital_speed_kms: "35.02",
    interesting_facts: [
      "Venus is the hottest planet with surface temperatures of 462°C",
      "Venus rotates backwards compared to most planets",
      "Venus has the longest day of any planet - 243 Earth days"
    ],
    sources: ["NASA Venus Fact Sheet", "JPL Solar System Dynamics"]
  },
  earth: {
    name: "Earth",
    type: "Terrestrial Planet",
    distanceFromEarth_km: "0",
    radius_km: "6371",
    rotation_period_hours: "24",
    orbital_period_days: "365.25",
    orbital_speed_kms: "29.78",
    interesting_facts: [
      "Earth is the only known planet with life",
      "71% of Earth's surface is covered by water",
      "Earth has one natural satellite - the Moon"
    ],
    sources: ["NASA Earth Fact Sheet", "JPL Solar System Dynamics"]
  },
  mars: {
    name: "Mars",
    type: "Terrestrial Planet",
    distanceFromEarth_km: "78300000",
    radius_km: "3389.5",
    rotation_period_hours: "24.6",
    orbital_period_days: "687",
    orbital_speed_kms: "24.07",
    interesting_facts: [
      "Mars has the largest volcano in the solar system - Olympus Mons",
      "Mars has two small moons: Phobos and Deimos",
      "A day on Mars is very similar to Earth - 24 hours and 37 minutes"
    ],
    sources: ["NASA Mars Fact Sheet", "JPL Solar System Dynamics"]
  },
  jupiter: {
    name: "Jupiter",
    type: "Gas Giant",
    distanceFromEarth_km: "628700000",
    radius_km: "69911",
    rotation_period_hours: "9.9",
    orbital_period_days: "4333",
    orbital_speed_kms: "13.07",
    interesting_facts: [
      "Jupiter is the largest planet in our solar system",
      "Jupiter has 95 known moons, including the four large Galilean moons",
      "Jupiter's Great Red Spot is a storm larger than Earth that has raged for centuries"
    ],
    sources: ["NASA Jupiter Fact Sheet", "JPL Solar System Dynamics"]
  },
  saturn: {
    name: "Saturn",
    type: "Gas Giant",
    distanceFromEarth_km: "1275000000",
    radius_km: "58232",
    rotation_period_hours: "10.7",
    orbital_period_days: "10759",
    orbital_speed_kms: "9.69",
    interesting_facts: [
      "Saturn is famous for its prominent ring system",
      "Saturn has 146 known moons, including Titan which has a thick atmosphere",
      "Saturn is less dense than water - it would float if there was an ocean big enough"
    ],
    sources: ["NASA Saturn Fact Sheet", "JPL Solar System Dynamics"]
  },
  uranus: {
    name: "Uranus",
    type: "Ice Giant",
    distanceFromEarth_km: "2723950000",
    radius_km: "25362",
    rotation_period_hours: "17.2",
    orbital_period_days: "30687",
    orbital_speed_kms: "6.81",
    interesting_facts: [
      "Uranus rotates on its side with an axial tilt of 98 degrees",
      "Uranus has 27 known moons and a faint ring system",
      "Uranus appears blue-green due to methane in its atmosphere"
    ],
    sources: ["NASA Uranus Fact Sheet", "JPL Solar System Dynamics"]
  },
  neptune: {
    name: "Neptune",
    type: "Ice Giant",
    distanceFromEarth_km: "4351400000",
    radius_km: "24622",
    rotation_period_hours: "16.1",
    orbital_period_days: "60190",
    orbital_speed_kms: "5.43",
    interesting_facts: [
      "Neptune has the strongest winds in the solar system, reaching 2,100 km/h",
      "Neptune has 16 known moons, with Triton being the largest",
      "Neptune takes 165 Earth years to complete one orbit around the Sun"
    ],
    sources: ["NASA Neptune Fact Sheet", "JPL Solar System Dynamics"]
  },
  pluto: {
    name: "Pluto",
    type: "Dwarf Planet",
    distanceFromEarth_km: "5906380000",
    radius_km: "1188.3",
    rotation_period_hours: "153.3",
    orbital_period_days: "90560",
    orbital_speed_kms: "4.67",
    interesting_facts: [
      "Pluto was reclassified as a dwarf planet in 2006",
      "Pluto has 5 known moons, with Charon being the largest",
      "Pluto's surface is covered in nitrogen, methane, and carbon monoxide ices"
    ],
    sources: ["NASA Pluto Fact Sheet", "JPL Solar System Dynamics"]
  },
  moon: {
    name: "Moon",
    type: "Natural Satellite",
    distanceFromEarth_km: "384400",
    radius_km: "1737.4",
    rotation_period_hours: "655.7",
    orbital_period_days: "27.3",
    orbital_speed_kms: "1.02",
    interesting_facts: [
      "The Moon is Earth's only natural satellite",
      "The Moon causes Earth's tides through gravitational pull",
      "The Moon is gradually moving away from Earth at about 3.8 cm per year"
    ],
    sources: ["NASA Moon Fact Sheet", "JPL Solar System Dynamics"]
  }
};

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { objectName } = JSON.parse(event.body);
    
    if (!objectName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Object name is required' })
      };
    }

    const objectKey = objectName.toLowerCase();
    
    // Check if we have fallback data for this object
    if (fallbackData[objectKey]) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(fallbackData[objectKey])
      };
    }

    // If no fallback data, return basic info
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        name: objectName,
        type: "Celestial Object",
        distanceFromEarth_km: "Unknown",
        radius_km: "Unknown",
        rotation_period_hours: "Unknown",
        orbital_period_days: "Unknown",
        orbital_speed_kms: "Unknown",
        interesting_facts: [
          `${objectName} is a fascinating celestial object in our solar system.`,
          "More detailed information may be available through astronomical databases.",
          "Each celestial body has unique characteristics worth exploring."
        ],
        sources: ["General Astronomical Knowledge"]
      })
    };

  } catch (error) {
    console.error('Error in text function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
