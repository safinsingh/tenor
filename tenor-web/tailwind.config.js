// @ts-nocheck

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				".nav-gradient": {
					background:
						"linear-gradient(90deg, #E8ECF2 100%, #EFF1F5 0%);",
					boxShadow: "inset -5px 0px 30px 5px rgba(0, 0, 0, 0.02);"
				},
				".player-shadow": {
					boxShadow: "0px -5px 30px 5px rgba(0, 0, 0, 0.03);"
				},
				".bg-body": {
					backgroundColor: "#F6F8FA"
				},
				".auto-fit-cols-20": {
					gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr));"
				}
			});
		})
	]
};
