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

    // For now, return a placeholder response since DALL-E requires API keys
    // You can add your OpenAI API key as a Netlify environment variable later
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        message: `Image generation for ${objectName} is currently unavailable. Please configure OpenAI API key in Netlify environment variables.`,
        imageUrl: null
      })
    };

  } catch (error) {
    console.error('Error in image function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
