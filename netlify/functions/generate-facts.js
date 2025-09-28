const { request } = require('undici');

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

    const openaiApiKey = process.env.OPENAI_API_KEY;
    
    if (!openaiApiKey) {
      // Fallback facts when API key is not available
      const fallbackFacts = [
        `${objectName} is a fascinating celestial object in our solar system.`,
        `Scientists continue to discover new information about ${objectName}.`,
        `Each celestial body like ${objectName} has unique characteristics that make it special.`,
        `Space exploration has revealed many secrets about ${objectName} and similar objects.`
      ];
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          facts: fallbackFacts,
          source: 'fallback'
        })
      };
    }

    console.log(`🔍 Generating new facts for: ${objectName}`);

    // Create a detailed prompt for generating interesting facts
    const prompt = `Generate 4 fascinating, lesser-known scientific facts about ${objectName} in our solar system. Make them:
    - Educational and scientifically accurate
    - Engaging and surprising
    - Different from commonly known facts
    - Suitable for general audiences
    - Each fact should be 1-2 sentences long
    
    Focus on recent discoveries, unique characteristics, or interesting comparisons. Return only the facts as a JSON array of strings.`;

    const openaiResponse = await request('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert astronomer and space educator. Generate fascinating, accurate facts about celestial objects. Always respond with valid JSON array format."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 400,
        temperature: 0.8 // Higher temperature for more creative/varied facts
      })
    });

    const openaiData = await openaiResponse.body.json();

    if (openaiResponse.statusCode !== 200) {
      console.error('OpenAI API Error:', openaiData);
      throw new Error(`OpenAI API error: ${openaiData.error?.message || 'Unknown error'}`);
    }

    const content = openaiData.choices[0].message.content.trim();
    console.log('Raw OpenAI response:', content);

    // Parse the JSON response
    let facts;
    try {
      facts = JSON.parse(content);
      if (!Array.isArray(facts)) {
        throw new Error('Response is not an array');
      }
    } catch (parseError) {
      console.error('Failed to parse OpenAI response as JSON:', parseError);
      // Try to extract facts from text if JSON parsing fails
      const lines = content.split('\n').filter(line => line.trim().length > 0);
      facts = lines.slice(0, 4).map(line => line.replace(/^\d+\.?\s*/, '').replace(/^[-*]\s*/, '').trim());
    }

    // Ensure we have at least some facts
    if (!facts || facts.length === 0) {
      throw new Error('No facts generated');
    }

    console.log(`✅ Generated ${facts.length} facts for ${objectName}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        facts: facts,
        source: 'openai'
      })
    };

  } catch (error) {
    console.error('Error in generate-facts function:', error);
    
    // Provide fallback facts on error
    const { objectName } = JSON.parse(event.body);
    const fallbackFacts = [
      `${objectName} continues to be studied by astronomers worldwide.`,
      `New discoveries about ${objectName} are made regularly through space missions.`,
      `The formation and evolution of ${objectName} provides insights into our solar system's history.`,
      `Advanced telescopes and spacecraft help us learn more about ${objectName} each year.`
    ];
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        facts: fallbackFacts,
        source: 'fallback',
        note: 'AI generation failed, showing fallback facts'
      })
    };
  }
};
