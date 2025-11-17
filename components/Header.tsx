import React from 'react';
import {
  MOON_ICON,
  SUN_ICON,
  BLOG_ICON,
  IMAGE_GENERATOR_ICON,
  IMAGE_EDITOR_ICON,
  VIDEO_GENERATOR_ICON,
  VIDEO_ANALYZER_ICON,
  CHAT_ICON,
  VOICE_ASSISTANT_ICON,
  TEXT_TO_SPEECH_ICON,
  HOME_ICON,
  YOUTUBE_CHANNEL_ICON,
  API_KEY_ICON,
  FAQ_ICON,
  CONTACT_ICON,
  LEGAL_ICON,
} from '../constants.tsx';



const Header = (props) => {
  const { isLoggedIn, onLoginToggle, isDarkMode, onDarkModeToggle, currentView, onViewChange, currentUser } = props;

  const navItems = [
    { name: 'בית', icon: HOME_ICON, view: 'home' },
    { name: 'יוטיוב לבלוג', icon: BLOG_ICON, view: 'blog' },
    { name: 'מחולל תמונות', icon: IMAGE_GENERATOR_ICON, view: 'image-gen' },
    { name: 'עורך תמונות', icon: IMAGE_EDITOR_ICON, view: 'image-edit' },
    { name: 'מחולל וידאו', icon: VIDEO_GENERATOR_ICON, view: 'video-gen' },
    { name: 'מנתח וידאו', icon: VIDEO_ANALYZER_ICON, view: 'video-analyze' },
    { name: 'צ’אט בוט', icon: CHAT_ICON, view: 'chatbot' },
    { name: 'עוזר קולי', icon: VOICE_ASSISTANT_ICON, view: 'voice-assistant' },
    { name: 'טקסט לדיבור', icon: TEXT_TO_SPEECH_ICON, view: 'text-to-speech' },
    { name: 'ערוץ יוטיוב שלי', icon: YOUTUBE_CHANNEL_ICON, view: 'youtube-channel' },
    { name: 'מפתח API', icon: API_KEY_ICON, view: 'api-key' },
    { name: 'שאלות נפוצות', icon: FAQ_ICON, view: 'faq' },
    { name: 'צור קשר', icon: CONTACT_ICON, view: 'contact' },
  ];

  const legalNavItems = [
    { name: 'תנאי שימוש', icon: LEGAL_ICON, view: 'terms' },
    { name: 'מדיניות פרטיות', icon: LEGAL_ICON, view: 'privacy' },
  ];

  return React.createElement(
    'header',
    { className: 'flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white shadow-md sticky top-0 z-10' },
    React.createElement(
      'div',
      { className: 'flex justify-between items-center w-full md:w-auto mb-4 md:mb-0' },
      React.createElement(
        'h1',
        { className: 'text-2xl font-bold text-blue-400' },
        'AI Studio',
      ),
      React.createElement(
        'div',
        { className: 'flex items-center space-x-4 md:hidden' },
        React.createElement(
          'button',
          {
            onClick: onDarkModeToggle,
            'aria-label': isDarkMode ? 'Switch to light mode' : 'Switch to dark mode',
            className: 'p-2 rounded-full hover:bg-gray-700 transition-colors duration-200',
          },
          isDarkMode ? SUN_ICON : MOON_ICON,
        ),
        React.createElement(
          'button',
          {
            onClick: () => onLoginToggle(!isLoggedIn),
            className: `px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200 ${
              isLoggedIn
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`,
          },
          isLoggedIn ? 'Logout' : 'Login',
        ),
      ),
    ),
    React.createElement(
      'nav',
      { className: 'w-full md:w-auto flex flex-wrap justify-center items-center space-x-2 md:space-x-4 mt-4 md:mt-0' },
      navItems.map((item) =>
        React.createElement(
          'button',
          {
            key: item.view,
            onClick: () => onViewChange(item.view),
            className: `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              currentView === item.view
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`,
          },
          item.icon,
          React.createElement('span', null, item.name),
        ),
      ),
      legalNavItems.map((item) =>
        React.createElement(
          'button',
          {
            key: item.view,
            onClick: () => onViewChange(item.view),
            className: `hidden md:flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              currentView === item.view
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`,
          },
          item.icon,
          React.createElement('span', null, item.name),
        ),
      ),
    ),
    React.createElement(
      'div',
      { className: 'hidden md:flex items-center space-x-4 ml-auto' },
      currentUser && React.createElement(
        'div',
        { className: 'flex items-center space-x-2' },
        currentUser.picture && React.createElement('img', {
          src: currentUser.picture,
          alt: 'User profile',
          className: 'h-8 w-8 rounded-full',
        }),
        React.createElement('span', { className: 'text-sm font-medium' }, currentUser.name),
      ),
      React.createElement(
        'button',
        {
          onClick: onDarkModeToggle,
          'aria-label': isDarkMode ? 'Switch to light mode' : 'Switch to dark mode',
          className: 'p-2 rounded-full hover:bg-gray-700 transition-colors duration-200',
        },
        isDarkMode ? SUN_ICON : MOON_ICON,
      ),
      React.createElement(
        'button',
        {
          onClick: () => onLoginToggle(!isLoggedIn),
          className: `px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200 ${
            isLoggedIn
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-blue-600 hover:bg-blue-700'
          }`,
        },
        isLoggedIn ? 'Logout' : 'Login with Google',
      ),
    ),
  );
};

export default Header;
