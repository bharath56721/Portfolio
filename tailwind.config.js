/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#0A0A0F',
          secondary: '#0F0F1A',
          card: '#12121E',
          hover: '#1A1A2E',
        },
        accent: {
          blue: '#4F8EF7',
          violet: '#7C5CF6',
          cyan: '#22D3EE',
          glow: '#4F8EF720',
        },
        surface: {
          border: '#1E1E30',
          muted: '#2A2A3D',
        },
        text: {
          primary: '#F0F0FF',
          secondary: '#8B8BA7',
          muted: '#52526B',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, #4F8EF730 0%, transparent 70%)',
        'card-shine': 'linear-gradient(135deg, #ffffff08 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 30px #4F8EF730',
        'glow-violet': '0 0 30px #7C5CF630',
        'card': '0 4px 24px #00000060',
        'card-hover': '0 8px 40px #00000080',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
