
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// TnKr Workshop Brand Colors
				walnut: {
					DEFAULT: '#5C3A21',
					50: '#F4F0EC',
					100: '#E5DCD2',
					200: '#CDB5A0',
					300: '#B58E6E',
					400: '#9D673C',
					500: '#5C3A21',
					600: '#4A2F1B',
					700: '#382414',
					800: '#26190E',
					900: '#140D07'
				},
				cherry: {
					DEFAULT: '#8B3A3A',
					50: '#F7EDED',
					100: '#ECDADA',
					200: '#D4B0B0',
					300: '#BC8686',
					400: '#A45C5C',
					500: '#8B3A3A',
					600: '#6F2E2E',
					700: '#532323',
					800: '#371717',
					900: '#1B0C0C'
				},
				oak: {
					DEFAULT: '#D6B97B',
					50: '#FDFCF9',
					100: '#F8F3E9',
					200: '#EDE0C7',
					300: '#E2CDA5',
					400: '#D6B97B',
					500: '#C9A555',
					600: '#B0903A',
					700: '#8A702D',
					800: '#635020',
					900: '#3D3013'
				},
				stone: {
					DEFAULT: '#9E9E9E',
					50: '#F5F5F5',
					100: '#EEEEEE',
					200: '#E0E0E0',
					300: '#BDBDBD',
					400: '#9E9E9E',
					500: '#757575',
					600: '#616161',
					700: '#424242',
					800: '#212121',
					900: '#0D0D0D'
				},
				poplar: {
					DEFAULT: '#F4F2EE',
					50: '#FEFEFE',
					100: '#F4F2EE',
					200: '#E9E5DD',
					300: '#DED7CC',
					400: '#D3CABB',
					500: '#C8BDAA',
					600: '#B5A688',
					700: '#9A8D6F',
					800: '#756C54',
					900: '#4F4A39'
				},
				'maker-blue': '#3A6EA5',
				'maker-green': '#6B8E23'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'lato': ['Lato', 'sans-serif'],
				'pacifico': ['Pacifico', 'cursive'],
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
