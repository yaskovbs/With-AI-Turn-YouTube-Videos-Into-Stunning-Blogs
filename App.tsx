
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Toast from './components/Toast';
import ErrorBoundary from './components/ErrorBoundary';
import { initGoogleSignIn, signIn, signOut } from './services/authService';
import { getYouTubeVideoId } from './utils/youtube';
import { createHandlers, createShowToast } from './handlers';
import ContentRenderer from './ContentRenderer';

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [targetAudience, setTargetAudience] = useState(''); // New state for target audience
  const [desiredTone, setDesiredTone] = useState(''); // New state for desired tone
  const [blogGenerationResponse, setBlogGenerationResponse] =
    useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null); // New state for current user
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [showVideoEmbed, setShowVideoEmbed] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // Default view to 'home'
  const [toast, setToast] = useState(null); // New state for toast notifications

  const { showToast, handleCloseToast } = createShowToast(setToast);

  const {
    handleGenerateBlog,
    handleDownloadBlog,
    handleDownloadPdf,
    handleCopyBlog,
    handleShareBlog,
  } = createHandlers(
    setYoutubeUrl,
    setTargetAudience,
    setDesiredTone,
    setBlogGenerationResponse,
    setIsLoading,
    setError,
    setToast,
    isLoggedIn,
    youtubeUrl,
    targetAudience,
    desiredTone,
    blogGenerationResponse,
    showToast
  );


  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }

    const storedUser = localStorage.getItem('userProfile');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setIsLoggedIn(true);
    }

    initGoogleSignIn(
      (authResult) => {
        // This is called when user signs in via prompt or initTokenClient
        console.log("Signed in:", authResult);
        setCurrentUser(authResult.profile);
        setIsLoggedIn(true);
        localStorage.setItem('userProfile', JSON.stringify(authResult.profile));
        showToast(`Welcome, ${authResult.profile.name}!`, 'success');
      },
      () => {
        console.log("Signed out.");
        setCurrentUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('userProfile');
        showToast('Logged out successfully.', 'success');
      }
    );

  }, []);

  // Apply dark/light mode classes to the body and save to localStorage
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-white', 'text-gray-900');
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [isDarkMode]);

  const handleLoginToggle = (loggedIn) => {
    if (loggedIn) {
      signIn(); // Initiates Google Sign-In flow
    } else {
      signOut(); // Initiates Google Sign-Out
      setCurrentUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem('userProfile');
    }
    setError(null);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  // Disabled if not logged in, URL is empty, or if an invalid YouTube ID
  const isGenerateDisabled = isLoading || !isLoggedIn || !youtubeUrl.trim() || !videoId; // Changed to youtubeUrl.trim() and videoId check

  return React.createElement(
    'div',
    {
      className: `min-h-screen flex flex-col ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } transition-colors duration-200`,
    },
    React.createElement(Header, {
      isLoggedIn: isLoggedIn,
      onLoginToggle: handleLoginToggle,
      isDarkMode: isDarkMode,
      onDarkModeToggle: handleDarkModeToggle,
      currentView: currentView,
      onViewChange: setCurrentView,
      currentUser: currentUser, // Pass currentUser to Header
    }),
    React.createElement(
      'main',
      { className: 'flex-grow flex flex-col items-center p-4' },
      React.createElement(ErrorBoundary, null, React.createElement(ContentRenderer, {
        currentView,
        isLoggedIn,
        youtubeUrl,
        setYoutubeUrl,
        targetAudience,
        setTargetAudience,
        desiredTone,
        setDesiredTone,
        error,
        setError,
        isLoading,
        isGenerateDisabled,
        handleGenerateBlog,
        showToast,
        setCurrentView,
        blogGenerationResponse,
        handleDownloadBlog,
        handleDownloadPdf,
        handleCopyBlog,
        handleShareBlog,
      }))
    ),
    React.createElement(
      'footer',
      { className: 'bg-gray-800 text-gray-400 p-8 text-sm mt-8' },
      React.createElement(
        'div',
        { className: 'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'h3',
            { className: 'font-bold text-white mb-4' },
            'ניווט',
          ),
          React.createElement(
            'ul',
            { className: 'space-y-2' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'button',
                { onClick: () => setCurrentView('home'), className: 'hover:text-white transition-colors duration-200' },
                'בית',
              ),
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'https://youtube.com/@movies_and_tv_show_recap?si=2Q6EtL5v-NpZcJO1', target: '_blank', rel: 'noopener noreferrer', className: 'hover:text-white transition-colors duration-200' },
                'ערוץ יוטיוב',
              ),
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'button',
                { onClick: () => setCurrentView('contact'), className: 'hover:text-white transition-colors duration-200' },
                'צור קשר',
              ),
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'button',
                { onClick: () => setCurrentView('faq'), className: 'hover:text-white transition-colors duration-200' },
                'שאלות נפוצות',
              ),
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'button',
                { onClick: () => setCurrentView('api-key'), className: 'hover:text-white transition-colors duration-200' },
                'מפתח API',
              ),
            ),
          ),
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'h3',
            { className: 'font-bold text-white mb-4' },
            'משפטי',
          ),
          React.createElement(
            'ul',
            { className: 'space-y-2' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'button',
                { onClick: () => setCurrentView('terms'), className: 'hover:text-white transition-colors duration-200' },
                'תנאי שימוש',
              ),
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'button',
                { onClick: () => setCurrentView('privacy'), className: 'hover:text-white transition-colors duration-200' },
                'מדיניות פרטיות',
              ),
            ),
          ),
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'h3',
            { className: 'font-bold text-white mb-4' },
            'עקבו אחרינו',
          ),
          React.createElement(
            'ul',
            { className: 'space-y-2' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'https://youtube.com/@movies_and_tv_show_recap?si=2Q6EtL5v-NpZcJO1', target: '_blank', rel: 'noopener noreferrer', className: 'hover:text-white transition-colors duration-200 flex items-center' },
                React.createElement(
                  'svg',
                  { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 mr-2', viewBox: '0 0 20 20', fill: 'currentColor' },
                  React.createElement('path', { fillRule: 'evenodd', d: 'M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.5 10.364l-5 3.5a.5.5 0 01-.75-.433V6.57a.5.5 0 01.75-.433l5 3.5a.5.5 0 010 .866z', clipRule: 'evenodd' }),
                ),
                'YouTube',
              ),
            ),
          ),
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'h3',
            { className: 'font-bold text-white mb-4' },
            'צור קשר',
          ),
          React.createElement(
            'ul',
            { className: 'space-y-2' },
            React.createElement('li', null, 'yaskovbs2502@gmail.com'),
            React.createElement('li', null, '050-818-1948'),
          ),
        ),
      ),
      React.createElement(
        'div',
        { className: 'text-center mt-8' },
        '© ',
        new Date().getFullYear(),
        ' AI Studio. All rights reserved.',
      ),
      React.createElement(
        'div',
        { className: 'adsbygoogle mt-8 text-center', style: { minHeight: '100px' } },
        React.createElement('ins', {
          className: 'adsbygoogle',
          style: { display: 'block' },
          'data-ad-client': 'ca-pub-9953179201685717',
          'data-ad-slot': 'YOUR_AD_SLOT_ID_FOOTER_1',
          'data-ad-format': 'auto',
          'data-full-width-responsive': 'true',
        }),
      ),
    ),
    toast && React.createElement(Toast, {
      key: toast.id,
      message: toast.message,
      type: toast.type,
      onClose: handleCloseToast,
    })
  );
}

export default App;
