/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // For all components/pages in /src
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using Next.js App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
