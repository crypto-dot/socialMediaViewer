/**
 * API service to handle API calls to our backend
 */
import axiosInstance from './axiosConfig';

/**
 * Validates a social media URL for a specific platform
 * @param {string} url - The social media URL to validate
 * @param {string} platform - The social media platform
 * @returns {Promise<{success: boolean, isValid: boolean, message: string}>}
 */
export const validateUrl = async (url, platform) => {
  try {
    const response = await axiosInstance.post('/api/validate-url', { url, platform });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'Failed to validate URL');
    }
    throw new Error(error.message || 'Failed to validate URL');
  }
};

/**
 * Fetches social media profile data
 * @param {string} url - The social media URL
 * @param {string} platform - The social media platform
 * @returns {Promise<{success: boolean, data: object}>}
 */
export const getProfileData = async (url, platform) => {
  try {
    const response = await axiosInstance.post('/api/get-profile', { url, platform });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'Failed to fetch profile data');
    }
    throw new Error(error.message || 'Failed to fetch profile data');
  }
}; 