import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			grey: {
  				'100': '#F9F9F9',
  				'200': '#F2F2F2',
  				'300': '#C6C6C6',
  				'400': '#AAAAAA',
  				'500': '#868282',
  				'600': '#4A5351'
  			},
  			brandblack: '#1A1A1A',
  			brandblue: '#5769EF',
  			charcoal: '#333336'
  		},
		screens: {
			'3xl': '1920px',
			'4xl': '2260px'
		},
  		fontFamily: {
  			fustat: ['var(--font-fustat)', 'sans-serif']
  		},
  		lineHeight: {
  			'super-tight': '0.9'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.3s ease-out',
  			'accordion-up': 'accordion-up 0.3s ease-out',
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
