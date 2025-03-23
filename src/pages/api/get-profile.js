import { validateSocialMediaUrl } from './utils/validation.js';
import { mockData } from './data/mockData.js';

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
    
    // Validate URL
    const isValid = validateSocialMediaUrl(url, platform);
    if (!isValid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Invalid ${platform} URL`
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    // In a real-world application, you'd make API calls to the respective
    // social media platforms here or to your backend service that handles those calls.
    // For this demo, we'll use the mock data
    
    // Extract username from URL
    const username = extractUsername(url, platform);
    
    // Create a small delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock data for the platform
    const profileData = mockData[platform.toLowerCase()];
    if (profileData) {
      // Add the extracted username to the response 
      profileData.extractedUsername = username;
      
      return new Response(
        JSON.stringify({
          success: true,
          data: profileData
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Platform ${platform} not supported`
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
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

/**
 * Extracts a username from a social media URL
 * @param {string} url - The social media URL
 * @param {string} platform - The social media platform
 * @returns {string|null} - The extracted username or null if not found
 */
function extractUsername(url, platform) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    switch (platform.toLowerCase()) {
      case 'instagram':
        // Instagram: /username/
        return pathname.split('/').filter(Boolean)[0] || null;
        
      case 'twitter':
        // Twitter: /username
        return pathname.split('/').filter(Boolean)[0] || null;
        
      case 'facebook':
        // Facebook can be complex, handle different formats
        if (pathname.includes('profile.php')) {
          return urlObj.searchParams.get('id') || null;
        }
        return pathname.split('/').filter(Boolean)[0] || null;
        
      case 'tiktok':
        // TikTok: /@username
        const tiktokUsername = pathname.split('/').filter(Boolean)[0];
        return tiktokUsername ? tiktokUsername.replace('@', '') : null;
      
      case 'youtube':
        // YouTube: /c/channelname or /user/username or /@username
        const parts = pathname.split('/').filter(Boolean);
        if (parts.length >= 2) {
          // Remove c/, user/, or @
          return parts[1] || null;
        }
        return null;
      
      case 'linkedin':
        // LinkedIn: /in/username
        const linkedinParts = pathname.split('/').filter(Boolean);
        if (linkedinParts.length >= 2 && linkedinParts[0] === 'in') {
          return linkedinParts[1] || null;
        }
        return null;
      
      default:
        return null;
    }
  } catch (error) {
    return null;
  }
} 