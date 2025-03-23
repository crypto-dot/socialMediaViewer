// Client-side JavaScript to handle tab switching
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Reset all tabs
      tabButtons.forEach(btn => {
        btn.setAttribute('data-active', 'false');
      });
      
      // Set active tab
      button.setAttribute('data-active', 'true');
      
      // Get platform
      const platform = button.getAttribute('data-platform');
      
      // Dispatch custom event for the SocialMediaViewer to listen to
      const event = new CustomEvent('platform-change', { 
        detail: { platform } 
      });
      document.dispatchEvent(event);
    });
  });
}); 