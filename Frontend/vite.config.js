import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        darkMode: 'class', // Enables class-based dark mode
        content: [
          './index.html',
          './src/**/*.{js,jsx,ts,tsx}',
        ],
        theme: {
          extend: {
            fontFamily: {
              serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
              mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            colors: {
              retro: {
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#c7d2fe',
                500: '#7c3aed',
                700: '#4c1d95',
              }
            },
            backgroundImage: {
              grain: 'radial-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)',
              'retro-gradient': 'linear-gradient(120deg,#fde68a 0%, #fbcfe8 40%, #a7f3d0 100%)',
              'linear-to-br': 'linear-gradient(135deg, var(--tw-gradient-stops))',
            },
            boxShadow: {
              'soft-lg': '0 8px 30px rgba(2,6,23,0.18)',
            },
          },
        },
        plugins: [tailwindcss()],
      },
    }),
  ],
})
