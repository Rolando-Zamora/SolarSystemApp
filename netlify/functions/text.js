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
