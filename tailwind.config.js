/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // charcoal and yellow
        // "primary":"#101820",
        // "secondary" :"#FEE715" ,
        // "tertiary":"#faef8c",


        // "primary":"#0A1828",
        // "secondary" :"#FEE715" ,
        // "tertiary":"#549ae9",

        // "primary":"#FEE715",
        // "secondary" :"#4F0341" ,
        // "tertiary":"#CAC0B3",

        // Charcoal and yellow
        "primary":"#101820",
        "secondary" :"#FEE715" ,
        "tertiary":"#54D6BB ", 

        // Deep blue, orange-red, & yellow-orange
        // "primary":"#375E97",
        // "secondary" :"#FFBB00" ,
        // "tertiary":"#FB6542 ",

        // original
        // "primary":"#0A192F",
        // "secondary" :"#F97316" ,
        // "tertiary":"#54D6BB",
      }
    },
    screens: {
    '2xl': '1536px',
    'xl': '1280px',
    'md': '768px',
     lg:{max :"2023px"},
     sm:{max :"639px"},
    },
  },
  plugins: [],
} ;
