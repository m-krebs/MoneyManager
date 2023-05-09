/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgcolor: "#02182c",
        primary: "#71fead",
        secondary: "#002647",
        "secondary-accent": "#001e39",
        accent: "#437e60",
        text: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
