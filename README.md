# Social Media Viewer

A modern web application built with Astro.js that allows users to view social media profiles by entering their URLs. The app includes backend validation for social media URLs and uses TanStack Query for efficient API calls.

## Features

- **Multi-platform Support**: View profiles from Instagram, Twitter, Facebook, TikTok, YouTube, and LinkedIn.
- **Clean UI**: Modern, responsive user interface that adapts to different screen sizes.
- **Preview Content**: See posts, images, videos, and text content from social media profiles.
- **Easy to Use**: Simply select a platform and enter a profile URL to view the content.
- **URL Validation**: Backend validation to ensure that URLs are valid for each social media platform.
- **Efficient Data Fetching**: Powered by TanStack Query for optimized API calls.

## Technology Stack

- [Astro.js](https://astro.build/) - Fast, modern static site builder
- [React](https://reactjs.org/) - For interactive components
- [TanStack Query](https://tanstack.com/query) - For efficient API data fetching
- TypeScript - For type-safe JavaScript
- CSS - Custom styling with modern techniques
- Client-side JavaScript - For dynamic UI interactions

## Backend Features

- **URL Validation**: API endpoint that validates URLs for different social media platforms
- **Profile Data API**: API endpoint that fetches profile data based on the URL
- **Platform-specific Logic**: Different validation rules for each supported platform
- **Error Handling**: Proper error handling for invalid URLs or API failures

## Getting Started

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/socialMediaViewer.git
   cd socialMediaViewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Project Structure

```
socialMediaViewer/
├── public/              # Static assets
├── src/
│   ├── components/      # UI components
│   │   ├── LoadingSpinner.astro
│   │   ├── QueryProvider.jsx     # TanStack Query provider
│   │   ├── SocialMediaTabs.astro
│   │   └── SocialMediaViewerReact.jsx # React viewer component
│   ├── layouts/         # Page layouts
│   │   └── MainLayout.astro
│   ├── pages/           # Route pages and API endpoints
│   │   ├── api/         # Backend API endpoints
│   │   │   ├── data/    # Mock data
│   │   │   ├── utils/   # Utility functions
│   │   │   ├── get-profile.js # API for fetching profiles
│   │   │   └── validate-url.js # API for URL validation
│   │   └── index.astro  # Main page
│   ├── services/        # API service functions
│   │   └── api.js       # Frontend API service
│   └── styles/          # Global styles
└── package.json         # Project dependencies
```

## Usage

1. Select a social media platform from the tabs.
2. Enter a valid profile URL for that platform in the input field.
3. The URL will be validated by the backend.
4. If valid, the profile content will be displayed.

## Demo Data

This project uses mock data to simulate API responses. In a production environment, you would integrate with real social media APIs.

## Building for Production

To build the site for production:

```bash
npm run build
```

This will generate static files in the `dist/` directory that can be deployed to any static hosting service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Profile images from [randomuser.me](https://randomuser.me)
- Sample content images from [Unsplash](https://unsplash.com)
