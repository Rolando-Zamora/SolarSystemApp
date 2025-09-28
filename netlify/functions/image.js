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
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'OpenAI API key not configured in environment variables.',
          image: null
        })
      };
    }

    console.log(`🎨 Generating image for: ${objectName}`);

    // Create a detailed prompt for the celestial object
    const prompt = `A stunning, realistic space photograph of ${objectName} in our solar system. High-resolution, scientifically accurate, beautiful cosmic photography with deep space background, stars, and nebulae. Professional astronomy photography style, vibrant colors, detailed surface features visible.`;

    const dalleResponse = await request('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
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

    const dalleData = await dalleResponse.body.json();

    if (dalleResponse.statusCode !== 200) {
      console.error('DALL-E API Error:', dalleData);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          message: `Failed to generate image: ${dalleData.error?.message || 'Unknown error'}`,
          image: null
        })
      };
    }

    const imageUrl = dalleData.data[0].url;
    console.log(`✅ Image generated successfully: ${imageUrl}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: `Generated image for ${objectName}`,
        image: imageUrl
      })
    };

  } catch (error) {
    console.error('Error in image function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        message: 'Internal server error while generating image',
        image: null
      })
    };
  }
};
