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
    const { question, context } = JSON.parse(event.body);
    
    console.log(`🤖 AI Question received: "${question}"`);
    console.log(`📝 Context provided:`, context);
    
    if (!question) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Question is required' })
      };
    }

    const openaiApiKey = process.env.OPENAI_API_KEY;
    
    // If OpenAI API key is available, use AI for intelligent responses
    if (openaiApiKey) {
      console.log(`🧠 Using OpenAI for intelligent response`);
      
      const systemPrompt = `You are an expert astronomer and space educator. Answer questions about the solar system, planets, moons, and space in an engaging, educational way. Keep responses concise (2-3 sentences) but informative. Use scientific facts and make it interesting for learners.`;
      
      const userPrompt = context ? 
        `Question about ${context}: ${question}` : 
        `Question about the solar system: ${question}`;

      try {
        const openaiResponse = await request('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            max_tokens: 150,
            temperature: 0.7
          })
        });

        const openaiData = await openaiResponse.body.json();

        if (openaiResponse.statusCode === 200) {
          const aiResponse = openaiData.choices[0].message.content.trim();
          console.log(`✅ AI response generated successfully`);
          
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
              success: true,
              answer: aiResponse,
              response: aiResponse, // Keep for backward compatibility
              sources: ["OpenAI GPT-3.5", "Astronomical Knowledge Base"]
            })
          };
        } else {
          console.error('OpenAI API Error:', openaiData);
          // Fall back to keyword-based responses
        }
      } catch (aiError) {
        console.error('AI Error:', aiError);
        // Fall back to keyword-based responses
      }
    }

    // Fallback: Provide basic astronomical responses based on common questions
    console.log(`📚 Using fallback keyword-based responses`);
    
    const responses = {
      'how far': `The distances in our solar system are vast. For example, Earth is about 150 million km from the Sun, while Neptune is about 4.5 billion km away.`,
      'how big': `Celestial objects vary greatly in size. The Sun has a radius of about 696,340 km, while Earth's radius is about 6,371 km.`,
      'temperature': `Temperatures vary dramatically across the solar system. Venus is the hottest planet at 462°C, while Neptune averages -214°C.`,
      'orbit': `Planets orbit the Sun in elliptical paths. Mercury completes an orbit in 88 days, while Neptune takes 165 Earth years.`,
      'moon': `Many planets have moons. Earth has 1, Mars has 2, Jupiter has 95, and Saturn has 146 known moons.`,
      'atmosphere': `Planetary atmospheres differ greatly. Venus has a thick CO2 atmosphere, Mars has a thin atmosphere, and gas giants have thick hydrogen-helium atmospheres.`,
      'life': `Earth is the only known planet with life, but scientists are actively searching for signs of life on Mars, Europa, and Enceladus.`
    };

    // Find a relevant response based on keywords in the question
    const questionLower = question.toLowerCase();
    let response = "That's an interesting question about our solar system! ";
    
    for (const [keyword, answer] of Object.entries(responses)) {
      if (questionLower.includes(keyword)) {
        response += answer;
        break;
      }
    }
    
    // Default response if no keywords match
    if (response === "That's an interesting question about our solar system! ") {
      response += "The solar system is full of fascinating objects and phenomena. Each planet, moon, and celestial body has unique characteristics that make them worth studying. For more detailed information, I recommend checking NASA's official resources or astronomical databases.";
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        answer: response,
        response: response, // Keep for backward compatibility
        sources: ["General Astronomical Knowledge", "NASA Educational Resources"]
      })
    };

  } catch (error) {
    console.error('Error in ask-question function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        answer: 'Sorry, I encountered an error while processing your question. Please try again.',
        error: 'Internal server error',
        message: 'Sorry, I encountered an error while processing your question. Please try again.'
      })
    };
  }
};
