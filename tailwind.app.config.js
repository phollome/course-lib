import baseConfig from "./tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    ...baseConfig.corePlugins,
    preflight: true,
  },
};
