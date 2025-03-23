import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { validateUrl, getProfileData } from '../services/api';
import '../styles/spinner.css';

// Custom loading spinner component for React
const LoadingSpinner = () => (
  <div className="spinner">
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4"></circle>
    </svg>
  </div>
);

const SocialMediaViewerReact = () => {
  const queryClient = useQueryClient();
  const [url, setUrl] = useState('');
  const [currentPlatform, setCurrentPlatform] = useState('instagram');
  
  // State to handle UI states
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  
  // Validation mutation
  const validateMutation = useMutation({
    mutationFn: ({ url, platform }) => validateUrl(url, platform),
    onSuccess: (data) => {
      if (data.isValid) {
        // If URL is valid, fetch profile data
        fetchProfileMutation.mutate({ url, platform: currentPlatform });
      } else {
        setError(`Invalid ${currentPlatform} URL. Please check the URL and try again.`);
      }
    },
    onError: (error) => {
      setError(error.message || 'An error occurred while validating the URL');
    },
  });
  
  // Fetch profile data mutation
  const fetchProfileMutation = useMutation({
    mutationFn: ({ url, platform }) => getProfileData(url, platform),
    onSuccess: (response) => {
      setProfileData(response.data);
      setError(null);
    },
    onError: (error) => {
      setError(error.message || 'An error occurred while fetching profile data');
      setProfileData(null);
    },
  });
  
  // Combined loading state
  const isLoading = validateMutation.isPending || fetchProfileMutation.isPending;
  
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }
    
    setError(null);
    
    // First validate the URL
    validateMutation.mutate({ url, platform: currentPlatform });
  };
  
  // Platform change handler (will be called from event listener in Astro component)
  const handlePlatformChange = (platform) => {
    setCurrentPlatform(platform);
    setUrl('');
    setProfileData(null);
    setError(null);
  };
  
  // Initialize the platform change event listener on mount
  React.useEffect(() => {
    const handlePlatformChangeEvent = (event) => {
      handlePlatformChange(event.detail.platform);
    };
    
    document.addEventListener('platform-change', handlePlatformChangeEvent);
    
    // Cleanup on unmount
    return () => {
      document.removeEventListener('platform-change', handlePlatformChangeEvent);
    };
  }, []);
  
  return (
    <div className="social-media-viewer">
      {/* URL Input Form */}
      <div className="url-input-container">
        <form id="profile-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="url" 
              id="profile-url" 
              placeholder={`Enter ${currentPlatform} profile URL`}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'View Profile'}
            </button>
          </div>
          <p className="helper-text">Enter the full URL of the profile you want to view</p>
        </form>
      </div>

      {/* Content Display Area */}
      <div id="profile-content" className="profile-content">
        {/* Empty State */}
        {!isLoading && !profileData && !error && (
          <div className="empty-state">
            <div className="empty-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>No Profile Loaded</h3>
            <p>Enter a social media profile URL above to view their content</p>
          </div>
        )}
        
        {/* Loading Spinner */}
        {isLoading && (
          <div className="loading-container">
            <LoadingSpinner />
            <p>Loading profile data...</p>
          </div>
        )}
        
        {/* Profile Info */}
        {!isLoading && profileData && (
          <div className="profile-info">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={profileData.avatar} alt="Profile avatar" />
              </div>
              <div className="profile-meta">
                <h2>{profileData.name}</h2>
                <p>{profileData.username}</p>
                <p>{profileData.bio}</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span>{profileData.stats.posts}</span>
                    <span>Posts</span>
                  </div>
                  <div className="stat">
                    <span>{profileData.stats.followers}</span>
                    <span>Followers</span>
                  </div>
                  <div className="stat">
                    <span>{profileData.stats.following}</span>
                    <span>Following</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="profile-content-grid">
              {profileData.content.map((item, index) => {
                if (item.type === 'image' && item.url) {
                  return (
                    <div className="content-item" key={index}>
                      <img src={item.url} alt="Content image" loading="lazy" />
                    </div>
                  );
                } else if (item.type === 'video' && item.thumbnail) {
                  return (
                    <div className="content-item" key={index}>
                      <img src={item.thumbnail} alt="Video thumbnail" loading="lazy" />
                      <div className="video-overlay">
                        <span className="video-icon">▶</span>
                      </div>
                    </div>
                  );
                } else if (item.type === 'text' && item.content) {
                  return (
                    <div className="content-item text-post" key={index}>
                      <div className="text-content">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        )}
        
        {/* Error Display */}
        {!isLoading && error && (
          <div className="error-message">
            <div className="error-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3>Could Not Load Profile</h3>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaViewerReact; 