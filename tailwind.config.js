/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./providers/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      background: '#f5f5f9',
      icon: '#10B981',
      link: '#4F9DAA',

      primary: {
        DEFAULT: '#10B981',
        light: '#ffffff',
        dark: '#1c1c1e',
        foreground: '#ffffff',
      },
      button: {
        DEFAULT: '#10B981',
        bg: '#249ef0',
        text: '#ffffff',
        light: '#10B962',
        dark: '#1c1c1e',
      },
      secondary: {
        light: '#ffffff',
        dark: '#000000',
      },
      accent: {
        light: '#9a6f63',
        dark: '#000000',
      },
      success: {
        light: '#14AE5C',
        dark: '#14AE5C',
      },
      warning: {
        light: '#f59e0b',
        dark: '#d97706',
      },
      error: {
        light: '#ef4444',
        dark: '#dc2626',
        contrast: '#900B09'
      },
      info: {
        light: '#3b82f6',
        dark: '#2563eb',
      },
      destructive: '#ef4444',
      foreground: {
        light: '#78402f',
        dark: '#ffe5cb',
      },
      input: {
        DEFAULT: '#f9fafb',
        border: '#d1d5db',
        focus: '#249ef0',
        error: '#ef4444',
        disabled: '#e5e7eb',
        text: '#374151',
        placeholder: '#9ca3af',
      },
      "text-primary": {
        light: '#43302b',
        dark: '#fdf8f6'
      },
      "text-secondary": {
        light: '#ef4444',
        dark: '#ffe5cb',
      },
      "text-destructive": '#ffffff',
    },

    // fontFamily: {
    //   inter: ["inter", "sans-serif"],
    //   playwrite: ["playwrite", "sans-serif"],
    //   "inter-black": ["inter_black", "sans-serif"],
    //   "inter-bold": ["inter_bold", "sans-serif"],
    //   "inter-thin": ["inter_thin", "sans-serif"],
    //   "inter-light": ["inter_light", "sans-serif"],
    //   "inter-md": ["inter_medium", "sans-serif"],
    //   "inter-sm-bold": ["inter_semi_bold", "sans-serif"],
    //   "inter-xl-light": ["inter_xl_light", "sans-serif"],
    //   "inter-xl-bold": ["inter_xl_bold", "sans-serif"],
    // },

  },
  plugins: [],
}