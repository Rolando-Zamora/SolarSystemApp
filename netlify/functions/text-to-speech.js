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
    const { text } = JSON.parse(event.body);
    
    if (!text) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Text is required' })
      };
    }

    const elevenlabsApiKey = process.env.ELEVENLABS_API_KEY;
    
    if (!elevenlabsApiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'ElevenLabs API key not configured' })
      };
    }

    const voiceId = 'mNNzYJqa2ABD2nl3ndre'; // Voice ID as specified

    console.log(`🔊 Generating TTS for text (length: ${text.length})`);

    // Call ElevenLabs text-to-speech API
    const elevenlabsResponse = await request(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': elevenlabsApiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      }
    );

    if (elevenlabsResponse.statusCode !== 200) {
      const errorData = await elevenlabsResponse.body.text();
      console.error('ElevenLabs API Error:', errorData);
      throw new Error(`ElevenLabs API error: ${elevenlabsResponse.statusCode}`);
    }

    // Get the audio data as a buffer
    const audioBuffer = await elevenlabsResponse.body.arrayBuffer();
    
    // Convert to base64
    const base64Audio = Buffer.from(audioBuffer).toString('base64');

    console.log(`✅ Generated TTS audio (size: ${base64Audio.length} bytes)`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        audio: base64Audio,
        contentType: 'audio/mpeg'
      })
    };

  } catch (error) {
    console.error('Error in text-to-speech function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || 'Failed to generate speech'
      })
    };
  }
};
