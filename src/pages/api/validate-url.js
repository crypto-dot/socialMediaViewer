import { validateSocialMediaUrl } from './utils/validation.js';

export async function post({ request }) {
  try {
    const data = await request.json();
    const { url, platform } = data;
    
    if (!url || !platform) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'URL and platform are required'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    const isValid = validateSocialMediaUrl(url, platform);
    
    return new Response(
      JSON.stringify({
        success: true,
        isValid,
        message: isValid 
          ? `Valid ${platform} URL` 
          : `Invalid ${platform} URL`
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'An error occurred'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 