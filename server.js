const express = require('express');
const path = require('path');
const { request } = require('undici');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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
      "Venus is the hottest planet in our solar system at 462°C",
      "Venus rotates backwards compared to most planets",
      "Venus has a thick, toxic atmosphere made mostly of carbon dioxide"
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
      "Earth has one natural satellite: the Moon"
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
      "Mars has the largest volcano in the solar system, Olympus Mons",
      "Mars has two small moons: Phobos and Deimos",
      "Evidence suggests Mars once had liquid water on its surface"
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
      "Jupiter has over 80 known moons, including the four Galilean moons",
      "Jupiter's Great Red Spot is a storm larger than Earth"
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
      "Saturn is less dense than water and would float",
      "Saturn has 146 known moons, including Titan and Enceladus"
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
      "Uranus rotates on its side at a 98-degree angle",
      "Uranus has a faint ring system discovered in 1977",
      "Uranus is the coldest planetary atmosphere in the solar system"
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
      "Neptune has the strongest winds in the solar system, up to 2,100 km/h",
      "Neptune was the first planet discovered through mathematical prediction",
      "Neptune has 16 known moons, with Triton being the largest"
    ],
    sources: ["NASA Neptune Fact Sheet", "JPL Solar System Dynamics"]
  },
  pluto: {
    name: "Pluto",
    type: "Dwarf Planet",
    distanceFromEarth_km: "5906440000",
    radius_km: "1188.3",
    rotation_period_hours: "153.3",
    orbital_period_days: "90560",
    orbital_speed_kms: "4.67",
    interesting_facts: [
      "Pluto was reclassified as a dwarf planet in 2006",
      "Pluto has five known moons, with Charon being the largest",
      "Pluto's orbit is highly elliptical and tilted"
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
      "The Moon is gradually moving away from Earth at 3.8 cm per year",
      "The Moon's gravity causes Earth's ocean tides",
      "The Moon always shows the same face to Earth due to tidal locking"
    ],
    sources: ["NASA Moon Fact Sheet", "JPL Solar System Dynamics"]
  },
  ceres: {
    name: "Ceres",
    type: "Dwarf Planet",
    distanceFromEarth_km: "413700000",
    radius_km: "473",
    rotation_period_hours: "9.1",
    orbital_period_days: "1682",
    orbital_speed_kms: "17.9",
    interesting_facts: [
      "Ceres is the largest object in the asteroid belt",
      "Ceres was the first asteroid discovered in 1801",
      "Ceres may have a subsurface ocean beneath its icy crust"
    ],
    sources: ["NASA Ceres Fact Sheet", "JPL Solar System Dynamics"]
  },
  eris: {
    name: "Eris",
    type: "Dwarf Planet",
    distanceFromEarth_km: "10120000000",
    radius_km: "1163",
    rotation_period_hours: "25.9",
    orbital_period_days: "203830",
    orbital_speed_kms: "3.4",
    interesting_facts: [
      "Eris is more massive than Pluto",
      "Eris discovery led to Pluto's reclassification as a dwarf planet",
      "Eris has one known moon called Dysnomia"
    ],
    sources: ["NASA Eris Fact Sheet", "JPL Solar System Dynamics"]
  },
  haumea: {
    name: "Haumea",
    type: "Dwarf Planet",
    distanceFromEarth_km: "6484000000",
    radius_km: "816",
    rotation_period_hours: "3.9",
    orbital_period_days: "103774",
    orbital_speed_kms: "4.5",
    interesting_facts: [
      "Haumea has an elongated shape due to its rapid rotation",
      "Haumea completes a rotation in less than 4 hours",
      "Haumea has two known moons: Hi'iaka and Namaka"
    ],
    sources: ["NASA Haumea Fact Sheet", "JPL Solar System Dynamics"]
  },
  makemake: {
    name: "Makemake",
    type: "Dwarf Planet",
    distanceFromEarth_km: "6850000000",
    radius_km: "715",
    rotation_period_hours: "22.5",
    orbital_period_days: "112897",
    orbital_speed_kms: "4.4",
    interesting_facts: [
      "Makemake is named after the creator deity of Easter Island",
      "Makemake has a reddish surface due to organic compounds",
      "Makemake was discovered in 2005 and classified as a dwarf planet in 2008"
    ],
    sources: ["NASA Makemake Fact Sheet", "JPL Solar System Dynamics"]
  },
  europa: {
    name: "Europa",
    type: "Moon",
    distanceFromEarth_km: "628700000",
    radius_km: "1560.8",
    rotation_period_hours: "85.2",
    orbital_period_days: "3.55",
    orbital_speed_kms: "13.7",
    interesting_facts: [
      "Europa has a subsurface ocean beneath its icy crust",
      "Europa's ocean may contain twice as much water as Earth's oceans",
      "Europa is one of the most promising places to search for life"
    ],
    sources: ["NASA Europa Fact Sheet", "JPL Solar System Dynamics"]
  },
  titan: {
    name: "Titan",
    type: "Moon",
    distanceFromEarth_km: "1275000000",
    radius_km: "2574",
    rotation_period_hours: "382.7",
    orbital_period_days: "15.95",
    orbital_speed_kms: "5.6",
    interesting_facts: [
      "Titan has a thick atmosphere and lakes of liquid methane",
      "Titan is larger than the planet Mercury",
      "Titan is the only moon with a substantial atmosphere"
    ],
    sources: ["NASA Titan Fact Sheet", "JPL Solar System Dynamics"]
  },
  ganymede: {
    name: "Ganymede",
    type: "Moon",
    distanceFromEarth_km: "628700000",
    radius_km: "2634.1",
    rotation_period_hours: "171.7",
    orbital_period_days: "7.15",
    orbital_speed_kms: "10.9",
    interesting_facts: [
      "Ganymede is the largest moon in the solar system",
      "Ganymede has its own magnetic field",
      "Ganymede may have a subsurface ocean"
    ],
    sources: ["NASA Ganymede Fact Sheet", "JPL Solar System Dynamics"]
  }
};

const fallbackImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjQwMCIgZmlsbD0iIzRjYzlmMCIgc3Ryb2tlPSIjZjcyNTg1IiBzdHJva2Utd2lkdGg9IjQiLz4KPHRleHQgeD0iNTEyIiB5PSI1MjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjI0Ij5TYW1wbGUgUGxhbmV0PC90ZXh0Pgo8L3N2Zz4K";

// OpenAI API call - Updated to handle both object info and questions
async function callOpenAI(input, systemPrompt = null) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  
  console.log('=== OpenAI API Call Debug ===');
  console.log('API Key present:', !!apiKey);
  console.log('API Key length:', apiKey ? apiKey.length : 0);
  console.log('Model:', model);
  console.log('Input:', input);
  console.log('System Prompt provided:', !!systemPrompt);
  
  if (!apiKey) {
    console.log('❌ OpenAI API key not found');
    
    // If this is a question (has systemPrompt), return a fallback answer
    if (systemPrompt) {
      return "I'm sorry, but I need an OpenAI API key to answer questions. However, you can still explore the solar system timeline and click on planets to learn more about them!";
    }
    
    // Otherwise, return fallback object data
    const objectKey = input.toLowerCase().replace(/\s+/g, '');
    console.log('Looking for key:', objectKey, 'Available keys:', Object.keys(fallbackData));
    
    const fallbackObject = fallbackData[objectKey] || fallbackData.earth;
    console.log('Using fallback data for:', fallbackObject.name);
    
    return fallbackObject;
  }
  
  console.log('✅ API Key found, attempting OpenAI API call...');
  
  try {
    let prompt, systemMessage;
    
    if (systemPrompt) {
      // This is a question
      systemMessage = systemPrompt;
      prompt = input;
    } else {
      // This is an object info request
      systemMessage = 'You are an expert astronomer and space scientist. Provide accurate, detailed information about celestial objects in our solar system.';
      prompt = `Provide detailed information about ${input} in our solar system. Return the response as a JSON object with the following structure:
      {
        "name": "${input}",
        "type": "Planet/Moon/Asteroid/etc",
        "distanceFromEarth_km": "distance in kilometers",
        "radius_km": "radius in kilometers", 
        "rotation_period_hours": "rotation period in hours",
        "orbital_period_days": "orbital period in days",
        "orbital_speed_kms": "orbital speed in km/s",
        "interesting_facts": ["fact1", "fact2", "fact3"],
        "sources": ["source1", "source2"]
      }
      
      Make sure all values are strings and provide accurate scientific data.`;
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: systemMessage
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: systemPrompt ? 500 : 1000, // Shorter responses for questions
        temperature: 0.7,
      }),
    });
    
    console.log('OpenAI Response Status:', response.status);
    
    if (!response.ok) {
      console.error('❌ OpenAI API Error - Status:', response.status);
      const errorBody = await response.text();
      console.error('Error Body:', errorBody);
      
      if (systemPrompt) {
        return "I'm having trouble connecting to my knowledge base right now. Please try again in a moment!";
      } else {
        // Return fallback data on API error
        const objectKey = input.toLowerCase().replace(/\s+/g, '');
        const fallbackObject = fallbackData[objectKey] || fallbackData.earth;
        console.log('Using fallback data due to API error for:', fallbackObject.name);
        return fallbackObject;
      }
    }
    
    const data = await response.json();
    console.log('✅ OpenAI Response received');
    
    if (data.error) {
      console.error('❌ OpenAI API returned error:', data.error);
      
      if (systemPrompt) {
        return "I encountered an error while processing your question. Please try rephrasing it or ask something else about the solar system!";
      } else {
        // Return fallback data on API error
        const objectKey = input.toLowerCase().replace(/\s+/g, '');
        const fallbackObject = fallbackData[objectKey] || fallbackData.earth;
        console.log('Using fallback data due to API error for:', fallbackObject.name);
        return fallbackObject;
      }
    }
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      const content = data.choices[0].message.content;
      
      if (systemPrompt) {
        // Return the answer directly for questions
        console.log('✅ Successfully got AI answer');
        return content;
      } else {
        // Parse JSON for object info
        try {
          const result = JSON.parse(content);
          console.log('✅ Successfully parsed OpenAI response for:', input);
          return result;
        } catch (parseError) {
          console.error('❌ Error parsing OpenAI response:', parseError);
          console.error('Raw content:', content);
          
          // Return fallback data on parse error
          const objectKey = input.toLowerCase().replace(/\s+/g, '');
          const fallbackObject = fallbackData[objectKey] || fallbackData.earth;
          console.log('Using fallback data due to parse error for:', fallbackObject.name);
          return fallbackObject;
        }
      }
    }
    
    console.error('❌ Unexpected OpenAI response structure:', data);
    
    if (systemPrompt) {
      return "I received an unexpected response format. Please try asking your question again!";
    } else {
      // Return fallback data on unexpected response
      const objectKey = input.toLowerCase().replace(/\s+/g, '');
      const fallbackObject = fallbackData[objectKey] || fallbackData.earth;
      console.log('Using fallback data due to unexpected response for:', fallbackObject.name);
      return fallbackObject;
    }
    
  } catch (error) {
    console.error('❌ OpenAI API network/connection error:', error.message);
    console.error('Full error:', error);
    
    if (systemPrompt) {
      return "I'm having network connectivity issues. Please check your internet connection and try again!";
    } else {
      // Return fallback data on network error
      const objectKey = input.toLowerCase().replace(/\s+/g, '');
      const fallbackObject = fallbackData[objectKey] || fallbackData.earth;
      console.log('Using fallback data due to network error for:', fallbackObject.name);
      return fallbackObject;
    }
  }
}

// DALL-E Image Generation API call
async function generateImageWithDALLE(objectName) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  console.log('=== DALL-E Image Generation Debug ===');
  console.log('API Key present:', !!apiKey);
  console.log('API Key length:', apiKey ? apiKey.length : 0);
  console.log('API Key starts with:', apiKey ? apiKey.substring(0, 20) + '...' : 'N/A');
  console.log('Object Name:', objectName);
  
  if (!apiKey) {
    console.log('❌ OpenAI API key not found, returning fallback image');
    return fallbackImage;
  }
  
  // Validate API key format
  if (!apiKey.startsWith('sk-')) {
    console.log('❌ Invalid OpenAI API key format (should start with sk-), returning fallback image');
    return fallbackImage;
  }
  
  console.log('✅ OpenAI API Key found, attempting DALL-E image generation...');

  try {
    const prompt = `A highly detailed, realistic space photograph of ${objectName} in the solar system. Scientific accuracy, beautiful cosmic lighting, deep space background with stars. Professional astronomy photography style. Ultra high resolution, 1024x1024.`;
    
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
        quality: "standard",
        response_format: "url"
      })
    });

    console.log('DALL-E Response Status:', response.status);
    
    if (!response.ok) {
      console.error('❌ DALL-E API Error - Status:', response.status);
      const errorBody = await response.text();
      console.error('Error Body:', errorBody);
      
      // Check for specific error types
      if (response.status === 401) {
        console.error('🔑 Authentication failed - check your OpenAI API key');
      } else if (response.status === 429) {
        console.error('⏰ Rate limit exceeded - too many requests');
      } else if (response.status === 400) {
        console.error('📝 Bad request - check the prompt format');
      }
      
      return fallbackImage;
    }

    const data = await response.json();
    console.log('✅ DALL-E Response received');
    
    if (data.data && data.data[0] && data.data[0].url) {
      console.log('✅ Successfully generated image for:', objectName);
      return data.data[0].url;
    }
    
    console.error('❌ Unexpected DALL-E response structure:', data);
    return fallbackImage;
    
  } catch (error) {
    console.error('❌ DALL-E API network/connection error:', error.message);
    console.error('Full error:', error);
    return fallbackImage;
  }
}

// Legacy Gemini function (kept for compatibility)
async function callGemini(objectName) {
  // Redirect to DALL-E for image generation
  return await generateImageWithDALLE(objectName);
}

// Routes
app.post('/api/text', async (req, res) => {
  try {
    const { objectName } = req.body;
    
    if (!objectName) {
      return res.status(400).json({ error: 'Object name is required' });
    }

    const data = await callOpenAI(objectName);
    res.json(data);
  } catch (error) {
    console.error('Text API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/image', async (req, res) => {
  try {
    const { objectName } = req.body;
    
    console.log('🖼️ Image generation request received for:', objectName);
    
    if (!objectName) {
      return res.status(400).json({ error: 'Object name is required' });
    }

    console.log('🔄 Calling DALL-E image generation...');
    const imageData = await generateImageWithDALLE(objectName);
    console.log('✅ Image generation completed, returning result');
    
    res.json({ image: imageData });
  } catch (error) {
    console.error('❌ Image API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Test DALL-E endpoint
app.get('/test-dalle', async (req, res) => {
  console.log('🧪 Testing DALL-E API...');
  try {
    // First test if OpenAI API key works at all
    const apiKey = process.env.OPENAI_API_KEY;
    console.log('Testing OpenAI API key validity...');
    
    const testResponse = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      }
    });
    
    console.log('OpenAI API test status:', testResponse.status);
    
    if (!testResponse.ok) {
      return res.json({ 
        success: false, 
        error: `OpenAI API key test failed: ${testResponse.status}`,
        details: await testResponse.text()
      });
    }
    
    // If API key works, test DALL-E
    const result = await generateImageWithDALLE('Earth');
    res.json({ 
      success: true, 
      result: result,
      isFallback: result === fallbackImage
    });
  } catch (error) {
    console.error('Test DALL-E error:', error);
    res.json({ 
      success: false, 
      error: error.message 
    });
  }
});

// AI Question endpoint
app.post('/api/ask-question', async (req, res) => {
  try {
    const { question } = req.body;
    
    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Question is required'
      });
    }

    console.log('🤖 AI Question received:', question);

    // Create a solar system context for better answers
    const systemPrompt = `You are an expert astronomy and space science educator. You specialize in explaining concepts about the solar system, planets, moons, asteroids, comets, and space exploration in an engaging and educational way. 

Keep your answers:
- Accurate and scientifically correct
- Easy to understand for general audiences
- Engaging and interesting
- Concise but informative (2-4 sentences typically)
- Focused on the solar system and space topics

If asked about topics outside of astronomy/space science, politely redirect to solar system topics.`;

    const answer = await callOpenAI(question, systemPrompt);
    
    res.json({
      success: true,
      answer: answer,
      question: question
    });

  } catch (error) {
    console.error('❌ Error in ask-question endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process question'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 SolarScope server running at http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  
  if (!process.env.OPENAI_API_KEY) {
    console.log('⚠️  OpenAI API key not found - using fallback data');
  }
  
  if (!process.env.GEMINI_API_KEY) {
    console.log('⚠️  Gemini API key not found - using fallback images');
  }
});

module.exports = app;
