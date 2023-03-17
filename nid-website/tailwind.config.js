/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'black': '#000',
      'grey': '#ebecf0',
      'MetallicBlue': '#235D71',
      'darkblue': '#09384f',
      'darkorange': '#F3B32B',
      'lightblue': '#76b5d4',
      'green': '#47f4c7',
      'lavender':'#E6E6FA',
      'lightsteelblue':'#B0C4DE',
      'darkred':'#8B0000',
      'dodgerblue': '#1E90FF',
      'violet':'#EE82EE',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      }
  },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
     ,
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      },
    },
   
    backgroundImage: {
 
      'id-services' : "url('../src/assets/suitbackground.jpg')",
      'faq-background' : "url('../src/assets/faq_background.jpg')",
      'resources-hero' : "url('../src/assets/resources-hero-background.jpg')",
      'id-services-hero' : "url('../src/assets/services-hero-background.JPG')",
      'footer': "url('../public/footer.jpg')",
      'faq': "url('../src/assets/7G4A2376.JPG')",
      'faq-card': "url('../public/faq_card.jpg')",
      'green-top-bottom-gradient': "linear-gradient(to bottom, rgb(112, 244, 198,0), rgb(112, 244, 198,0.2), rgb(112, 244, 198,0.3),rgb(112, 244, 198,0.9))",
      'green-bottom-gradient': "linear-gradient(to bottom, rgb(112, 244, 198,0), rgb(112, 244, 198,0.2), rgb(112, 244, 198,0.3),rgb(112, 244, 198,0.9))",
      'news-gradient': "linear-gradient(to bottom,  rgb(49, 93, 113, 0), rgba(49, 93, 113, 1))",
      'news-mobile-gradient': "linear-gradient(to bottom,  rgb(49, 93, 113,0.01), rgb(49, 93, 113, 0.7), rgba(49, 93, 113, 0.8))",
      'top-bot-gradient': "linear-gradient(to bottom,  rgb(49, 93, 113,0.5), rgb(49, 93, 113, 0.6), rgba(49, 93, 113, 1))",
      'button-gradient': "linear-gradient(to bottom,  rgb(75, 109, 128,1),rgb(75, 100, 120,1), rgba(49, 93, 113, 1))",
      'hero-gradient': "linear-gradient(to bottom,  rgb(49, 93, 113,0.5), rgb(49, 93, 113,0.6),rgb(49, 93, 113,0.8), rgb(49, 93, 113, 0.8), rgba(49, 93, 113, 0.85), rgba(49, 93, 113, 1))"
      
    },
  },
  plugins: [],  
}