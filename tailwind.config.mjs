/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "green-custom":
          "0 6px 12px 0 rgba(40, 200, 120, 0.3), 0 4px 8px 0 rgba(40, 200, 120, 0.3), 0 2px 4px 0 rgba(40, 200, 120, 0.3)",
      },
    },
  },
  plugins: [],
};
