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
      keyframes: {
        chatSlideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        chatSlideDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(50px)" },
        },
      },
      animation: {
        chatSlideUp: "chatSlideUp 0.3s ease-out forwards",
        chatSlideDown: "chatSlideDown 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
};
