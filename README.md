# AI Studio - Turn YouTube Videos into Stunning Blogs

Welcome to AI Studio, your ultimate platform for content creation powered by artificial intelligence! This application allows you to transform YouTube videos into engaging blog posts, generate and edit images, create and analyze videos, converse with an AI chatbot or voice assistant, and convert text to speech.

## Features

*   **YouTube to Blog Generator**: Paste a YouTube link, and our AI will craft a high-quality, engaging blog post. It uses Gemini AI with Google Search grounding to provide accurate and up-to-date information, capturing the video's tone and nuances.
*   **Image Generation**: Generate stunning images from text prompts using Imagen-4.0. You can specify aspect ratios.
*   **Image Editor**: Upload an image and use text prompts to modify it (e.g., "Add a retro filter", "Remove the person") using Gemini 2.5 Flash Image.
*   **Video Generation**: Create videos from text prompts and/or starting/ending images using Veo 3. You can configure aspect ratio and resolution.
*   **Video Analyzer**: Upload a video and get an AI-powered analysis of its content using Gemini 2.5 Pro.
*   **AI Chatbot**: Engage in conversational AI using Gemini 2.5 Flash, with Google Search and Maps grounding for up-to-date and location-aware responses.
*   **AI Voice Assistant (Live API)**: Have real-time voice conversations with Gemini 2.5 Native Audio. Features real-time transcription and function calling capabilities (e.g., controlling smart home devices).
*   **Text-to-Speech (TTS)**: Convert any text into natural-sounding speech using Gemini 2.5 Flash TTS.
*   **Google Sign-In**: Secure user authentication using OAuth 2.0. Persists login state, displays user profile, and restricts AI features to logged-in users.
*   **Toast Notifications**: User-friendly toast messages for feedback on actions (success, error, warning).
*   **Error Boundaries**: Graceful handling of runtime errors, displaying a fallback UI instead of crashing the app.
*   **Dark/Light Mode**: Toggle between themes, with preference saved in local storage.
*   **Content Export**: Download generated blog posts as `.txt` or `.pdf` files, and copy content to clipboard.
*   **Web Share API Integration**: Share generated blog posts directly from the browser.
*   **YouTube Data API Key Management (Client-Side with Warnings)**: Input field to save and retrieve your YouTube Data API v3 key from `localStorage`. **Includes crucial security warnings that this is INSECURE for production and a backend proxy is required.**
*   **Google AdSense Integration**: Ad slots are integrated across the site to comply with AdSense policies, providing a potential revenue stream. (Note: User-specific AdSense IDs for individual blogs require a backend for secure implementation).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   A modern web browser (Chrome, Firefox, Edge, Safari)
*   Access to Google Cloud Project for:
    *   **Gemini API Key**: Enable the Gemini API.
    *   **Google Client ID (OAuth 2.0)**: For Google Sign-In.
    *   **(Optional) YouTube Data API v3 Key**: For advanced YouTube channel functionalities.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yaskovbs/With-AI-Turn-YouTube-Videos-Into-Stunning-Blogs.git
    cd With-AI-Turn-YouTube-Videos-Into-Stunning-Blogs
    ```

2.  **Install dependencies (if you were using a package manager like npm/yarn, though this project runs via importmap)**:
    This project is designed to run directly in the browser using ES modules and `importmap`. There is no traditional `npm install` step for frontend dependencies. Tailwind CSS is loaded via CDN.

### Configuration

You need to set up your API keys and Google Client ID.

1.  **Create a `.env` file**:
    Create a file named `.env` in the root directory of your project.

2.  **Add your API Keys to `.env`**:
    Populate the `.env` file with your Google API Key for Gemini and your Google Client ID for OAuth.

    ```env
    # Google Gemini API Key
    API_KEY=YOUR_GEMINI_API_KEY

    # Google Client ID for OAuth 2.0 (for Google Sign-In)
    GOOGLE_CLIENT_ID=357652753084-srrip6dsmq8r2giabr0gor7qbh99h2m9.apps.googleusercontent.com
    ```
    **Important**: Replace `YOUR_GEMINI_API_KEY` with your actual Gemini API key. The `GOOGLE_CLIENT_ID` is provided above, but ensure it matches your Google Cloud Project credentials.

3.  **AdSense Configuration**:
    *   **Ad Client ID**: The `data-ad-client="ca-pub-9953179201685717"` is hardcoded in `index.html` and other components. Replace `ca-pub-9953179201685717` with your actual Google AdSense Publisher ID.
    *   **Ad Slot IDs**: Various components (`App.tsx`, `Home.tsx`, `ImageGenerator.tsx`, etc.) contain `data-ad-slot` placeholders (e.g., `YOUR_AD_SLOT_ID_BLOG_1`). You need to replace these with actual ad slot IDs generated from your AdSense account for each ad unit.
    *   **`ads.txt`**: Ensure you have an `ads.txt` file in the root of your domain with the content provided by AdSense (e.g., `google.com, pub-99531779201685717, DIRECT, f08c47fec0942fa0`). This is crucial for AdSense verification.

### Running the Application

This application is designed to be served by a simple HTTP server (e.g., from a CDN or a local server).

1.  **Serve `index.html`**:
    Open `index.html` directly in a modern web browser, or use a local development server.
    If you have Python installed, you can run a simple server:
    ```bash
    python -m http.server 8000
    ```
    Then, open your browser to `http://localhost:8000`.

## Important Security Notes

*   **API Key Storage (Client-Side)**: This application, being purely client-side, stores the YouTube Data API key in `localStorage`. This is **NOT SECURE FOR PRODUCTION ENVIRONMENTS**. For a production application, you **MUST** use a backend server to proxy all API requests involving sensitive keys to prevent their exposure to end-users.
*   **User-Specific AdSense/Custom Domains**: Features like user-specific AdSense IDs for their own blogs or custom domain setup require robust backend infrastructure for secure management, verification, and content serving. These are conceptualized within the client-side UI but require server-side implementation for full functionality.

## Contributing

(If applicable)

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

(If applicable)

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Yaskovbs - yaskovbs2502@gmail.com
Project Link: https://github.com/yaskovbs/With-AI-Turn-YouTube-Videos-Into-Stunning-Blogs.git

```
Please ensure the AdSense script is copied and pasted between the `<head></head>` tags on your website. Google will automatically display ads in the most suitable places.
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9953179201685717"
     crossorigin="anonymous"></script>
Ads usually appear on the page within an hour. For more information, please refer to the AdSense code implementation guide.
If your pages already contain auto-ads code, there is no need to replace it with this code.