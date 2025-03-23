/**
 * Validates a social media URL for the specified platform
 * @param {string} url - The URL to validate
 * @param {string} platform - The social media platform
 * @returns {boolean} - Whether the URL is valid for the platform
 */
export function validateSocialMediaUrl(url, platform) {
  // We'll use regex patterns to validate the URLs
  try {
    // Check if it's a valid URL first
    const urlObj = new URL(url);
    
    // Platform-specific validation
    switch (platform.toLowerCase()) {
      case 'instagram':
        // Instagram URLs typically look like: https://www.instagram.com/username/ or https://instagram.com/username/
        return /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]{1,30}\/?$/.test(url);
      
      case 'facebook':
        // Facebook URLs: https://www.facebook.com/username or https://facebook.com/username
        // or https://www.facebook.com/profile.php?id=12345
        return /^https?:\/\/(www\.)?facebook\.com\/(profile\.php\?id=\d+|[a-zA-Z0-9.]{5,})\/?.*$/.test(url);
      
      case 'twitter':
        // Twitter URLs: https://twitter.com/username or https://x.com/username
        return /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/[a-zA-Z0-9_]{1,15}\/?$/.test(url);
        
      case 'tiktok':
        // TikTok URLs: https://www.tiktok.com/@username or https://tiktok.com/@username
        return /^https?:\/\/(www\.)?tiktok\.com\/@[a-zA-Z0-9_.]{1,24}\/?$/.test(url);
        
      case 'youtube':
        // YouTube URLs: youtube.com/c/channelname or youtube.com/user/username or youtube.com/@username
        return /^https?:\/\/(www\.)?youtube\.com\/(c\/|user\/|@)[a-zA-Z0-9_-]{1,100}\/?$/.test(url);
        
      case 'linkedin':
        // LinkedIn URLs: linkedin.com/in/username
        return /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,100}\/?$/.test(url);
        
      default:
        return false;
    }
  } catch (error) {
    // If URL is not valid (will throw an error when trying to create URL object)
    return false;
  }
} 