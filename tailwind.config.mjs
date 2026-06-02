/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rw: {
          ink: '#1A1A2E',
          ocean: '#16213E',
          horizon: '#E94560',
          sand: '#F5F0E8',
          mist: '#A8B2D8',
          forest: '#2D6A4F',
          gold: '#F4A261',
          white: '#FAFAFA',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        subtitle: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        ui: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.rw.ink'),
            '--tw-prose-headings': theme('colors.rw.ink'),
            '--tw-prose-links': theme('colors.rw.horizon'),
            '--tw-prose-bold': theme('colors.rw.ink'),
            '--tw-prose-quotes': theme('colors.rw.ocean'),
            '--tw-prose-quote-borders': theme('colors.rw.horizon'),
            fontFamily: theme('fontFamily.body').join(', '),
            fontSize: '1.125rem',
            lineHeight: '1.8',
            h1: { fontFamily: theme('fontFamily.display').join(', ') },
            h2: { fontFamily: theme('fontFamily.display').join(', ') },
            h3: { fontFamily: theme('fontFamily.subtitle').join(', ') },
            a: {
              textDecoration: 'underline',
              textDecorationColor: theme('colors.rw.horizon'),
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.rw.horizon'),
              },
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
