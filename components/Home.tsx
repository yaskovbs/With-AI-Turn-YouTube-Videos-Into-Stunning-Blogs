import React, { useEffect } from 'react';

const Home = ({ showToast }) => {
  useEffect(() => {
    // Push AdSense ads when component mounts - removed explicit push
  }, []);

  return React.createElement(
    'div',
    { className: 'flex flex-col items-center p-4 w-full max-w-4xl mx-auto text-center' },
    React.createElement(
      'h2',
      { className: 'text-4xl font-extrabold text-blue-400 mb-6' },
      'ברוכים הבאים ל-AI Studio!',
    ),
    React.createElement(
      'p',
      { className: 'text-lg text-gray-300 mb-8' },
      'הפלטפורמה האולטימטיבית שלך ליצירת תוכן באמצעות כוחה של בינה מלאכותית.',
      React.createElement('br', null),
      'ממאמרים בבלוג ועד תמונות, סרטונים ושיחות קוליות - הכל במקום אחד!',
    ),

    React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-left' },
      React.createElement(
        'div',
        { className: 'bg-gray-800 p-6 rounded-lg shadow-xl' },
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-blue-300 mb-2' },
          'יצירת בלוגים מיוטיוב',
        ),
        React.createElement(
          'p',
          { className: 'text-gray-300' },
          'הפכו סרטוני יוטיוב למאמרי בלוג מרתקים ואיכותיים בשניות.',
        ),
      ),
      React.createElement(
        'div',
        { className: 'bg-gray-800 p-6 rounded-lg shadow-xl' },
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-blue-300 mb-2' },
          'מחולל ועורך תמונות',
        ),
        React.createElement(
          'p',
          { className: 'text-gray-300' },
          'צרו תמונות מרהיבות מפרומפטים טקסטואליים ועצבו אותן בקלות.',
        ),
      ),
      React.createElement(
        'div',
        { className: 'bg-gray-800 p-6 rounded-lg shadow-xl' },
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-blue-300 mb-2' },
          'וידאו: יצירה וניתוח',
        ),
        React.createElement(
          'p',
          { className: 'text-gray-300' },
          'הפיקו סרטונים מדהימים ונתחו תוכן וידאו לעומק בעזרת AI.',
        ),
      ),
      React.createElement(
        'div',
        { className: 'bg-gray-800 p-6 rounded-lg shadow-xl' },
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-blue-300 mb-2' },
          'צ\'אט ועוזר קולי',
        ),
        React.createElement(
          'p',
          { className: 'text-gray-300' },
          'נהלו שיחות טקסט או קול עם AI לקבלת מידע ותמיכה בזמן אמת.',
        ),
      ),
      React.createElement(
        'div',
        { className: 'bg-gray-800 p-6 rounded-lg shadow-xl' },
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-blue-300 mb-2' },
          'טקסט לדיבור',
        ),
        React.createElement(
          'p',
          { className: 'text-gray-300' },
          'המירו כל טקסט לדיבור טבעי ואיכותי בקלות.',
        ),
      ),
      React.createElement(
        'div',
        { className: 'bg-gray-800 p-6 rounded-lg shadow-xl' },
        React.createElement(
          'h3',
          { className: 'text-xl font-bold text-blue-300 mb-2' },
          'שילוב API',
        ),
        React.createElement(
          'p',
          { className: 'text-gray-300' },
          'למפתחים: אפשרויות לשלב מפתחות API משלכם לשליטה מלאה.',
        ),
      ),
    ),

    React.createElement(
      'div',
      { className: 'adsbygoogle my-8 text-center', style: { minHeight: '100px' } },
      React.createElement('ins', {
        className: 'adsbygoogle',
        style: { display: 'block' },
        'data-ad-client': 'ca-pub-9953179201685717',
        'data-ad-slot': 'YOUR_AD_SLOT_ID_HOME_1',
        'data-ad-format': 'auto',
        'data-full-width-responsive': 'true',
      }),
    ),

    React.createElement(
      'p',
      { className: 'text-md text-gray-400 mt-12' },
      'חקור את הכלים שלנו והתחל ליצור עוד היום!',
    ),
  );
};

export default Home;