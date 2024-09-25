/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {}
  },
  plugins: []
};

// con file javascript usare le graffe
// es  content: ["./public/*.{html,js}"],
// inserire personalizzazioni, ad esempio i colori, sotto a theme, seguire documentazione
// IMPORTANTE INSERIRE MODIFICHE DENTRO AD EXTEND {} ALTRIMENTI SOVRASCRIVE TUTTO AD ESEMPIO
/* theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'nuovo-colore': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    }, */
// PLUGINS
// si aggiungono cose aggiuntive, tipo comportamenti paragrafo etc, guardare documentazione
// Si trova tutto nella documentazione alla voce "customization"
// nei preset carichi impostazioni prefinite, come comportamento layout etc
// posso creare un mio file di preset personale con i colori che mi servono
// creare i preset significa caricare il proprio file customizzato senza andare a sovrascrivere tailwind.config.js
