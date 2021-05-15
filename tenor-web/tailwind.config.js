// @ts-check

const defaultTheme = require("tailwindcss/defaultTheme");

/**  @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	darkMode: false,
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
