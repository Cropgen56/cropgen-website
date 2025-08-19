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
        chatSlideLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        chatSlideRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // logoBounceUp: {
        //   "0%": { transform: "translateY(50px)", opacity: "0" },
        //   "60%": { transform: "translateY(-10px)", opacity: "1" },
        //   "80%": { transform: "translateY(5px)" },
        //   "100%": { transform: "translateY(0)" },
        // },
        // gradientMove: {
        //   "0%": { backgroundPosition: "0% 50%" },
        //   "50%": { backgroundPosition: "100% 50%" },
        //   "100%": { backgroundPosition: "0% 50%" },
        // },
      },
      animation: {
        chatSlideUp: "chatSlideUp 0.3s ease-out forwards",
        chatSlideDown: "chatSlideDown 0.3s ease-in forwards",
        chatSlideLeft: "chatSlideLeft 0.5s ease-out forwards",
        chatSlideRight: "chatSlideRight 0.5s ease-out forwards",
      //   logoBounceUp: "logoBounceUp 0.8s ease-out forwards",
      //   gradient: "gradientMove 4s ease infinite",
      },
      // backgroundSize: {
      //   "300": "300% 300%",
      // },
    },
  },
  plugins: [],
};
