import React, { useEffect } from 'react';

const Home = ({ showToast, isDarkMode }) => {
  useEffect(() => {
    // Push AdSense ads when component mounts - removed explicit push
  }, []);

  const bgClass = isDarkMode
    ? 'bg-gray-800 hover:bg-gray-750'
    : 'bg-white hover:bg-gray-50';
  const textClass = isDarkMode
    ? 'text-gray-300'
    : 'text-gray-600';
  const cardBgClass = isDarkMode
    ? 'bg-gray-700'
    : 'bg-gray-100';

  return React.createElement(
    'div',
    { className: 'flex flex-col items-center w-full' },
    React.createElement(
      'div',
      {
        className: `w-full relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'} py-16 md:py-24`
      },
      React.createElement(
        'div',
        { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        React.createElement(
          'div',
          { className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center' },
          React.createElement(
            'div',
            { className: 'space-y-6' },
            React.createElement(
              'h1',
              { className: `text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent` },
              'ברוכים הבאים ל-AI Studio',
            ),
            React.createElement(
              'p',
              { className: `text-xl md:text-2xl ${textClass} leading-relaxed` },
              'הפלטפורמה המקיפה ביותר לעיבוד תוכן חזותי והפקת תוכן בעזרת AI',
            ),
            React.createElement(
              'p',
              { className: `text-lg ${textClass}` },
              'מיוטיוב לבלוג, יצירת תמונות, ניתוח וידאו, צ\'אט עם AI ועוד - הכל כאן',
            ),
            React.createElement(
              'button',
              {
                onClick: () => showToast('התחל ליצור עוד היום!', 'success'),
                className: 'inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105',
              },
              'התחל עכשיו',
            ),
          ),
          React.createElement(
            'div',
            { className: 'relative h-72 md:h-96 lg:h-full min-h-96' },
            React.createElement(
              'div',
              { className: 'absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl' },
            ),
            React.createElement(
              'div',
              { className: 'relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center justify-center' },
              React.createElement(
                'div',
                { className: `w-full h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center` },
                React.createElement(
                  'svg',
                  {
                    className: `w-32 h-32 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`,
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    strokeWidth: 1.5,
                    stroke: 'currentColor',
                  },
                  React.createElement('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      'div',
      { className: 'w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16' },
      React.createElement(
        'h2',
        { className: `text-3xl md:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}` },
        'הכלים שלנו',
      ),
      React.createElement(
        'p',
        { className: `text-center ${textClass} mb-12 text-lg` },
        'כל מה שאתה צריך ליצירת תוכן מדהים',
      ),

      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
        [
          { title: 'יצירת בלוגים מיוטיוב', desc: 'הפכו סרטוני יוטיוב למאמרי בלוג מרתקים ואיכותיים בשניות' },
          { title: 'מחולל ועורך תמונות', desc: 'צרו תמונות מרהיבות מפרומפטים טקסטואליים ועצבו אותן בקלות' },
          { title: 'וידאו: יצירה וניתוח', desc: 'הפיקו סרטונים מדהימים ונתחו תוכן וידאו לעומק בעזרת AI' },
          { title: 'צ\'אט ועוזר קולי', desc: 'נהלו שיחות טקסט או קול עם AI לקבלת מידע ותמיכה בזמן אמת' },
          { title: 'טקסט לדיבור', desc: 'המירו כל טקסט לדיבור טבעי ואיכותי בקלות' },
          { title: 'שילוב API', desc: 'למפתחים: אפשרויות לשלב מפתחות API משלכם לשליטה מלאה' },
        ].map((feature, idx) =>
          React.createElement(
            'div',
            {
              key: idx,
              className: `${cardBgClass} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`,
            },
            React.createElement(
              'h3',
              { className: 'text-xl font-bold mb-3 text-blue-400' },
              feature.title,
            ),
            React.createElement(
              'p',
              { className: textClass },
              feature.desc,
            ),
          )
        ),
      ),
    ),

    React.createElement(
      'div',
      { className: 'adsbygoogle my-8 text-center w-full', style: { minHeight: '100px' } },
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
      'div',
      { className: `w-full py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'} text-center` },
      React.createElement(
        'p',
        { className: `text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}` },
        'חקור את הכלים שלנו והתחל ליצור תוכן מדהים עוד היום',
      ),
    ),
  );
};

export default Home;