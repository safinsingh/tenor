// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"canonical",
		"canonical/typescript",
		"canonical/node",
		"canonical/react",
		"tailwindcss",
		"plugin:prettier/recommended",
		"prettier"
	],
	settings: {
		"import/resolver": { typescript: {} },
		react: { version: "detect" }
	},
	parserOptions: { project: "./tsconfig.json" },
	rules: {
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"filenames/match-exported": "off",
		"newline-before-return": "off",
		"node/no-missing-import": "off",
		"node/no-process-env": "off",
		"prettier/prettier": "error",
		"react/prop-types": "off",
		"sort-keys-fix/sort-keys-fix": "off",
		"tailwindcss/classnames-order": "error",
		"tailwindcss/no-custom-classname": "error",
		"tailwindcss/no-contradicting-classname": "error"
	},
	overrides: [
		{
			files: ["*.js"],
			rules: {
				"@typescript-eslint/no-require-imports": "off",
				"@typescript-eslint/no-var-requires": "off",
				"import/no-commonjs": "off",
				"import/unambiguous": "off"
			}
		},
		{
			files: ["*.d.ts"],
			rules: {
				"import/unambiguous": "off",
				"spaced-comment": "off",
				"unicorn/prevent-abbreviations": "off"
			}
		},
		{ files: ["_document.tsx"], rules: { "fp/no-class": "off" } },
		{
			files: ["_*\\.tsx", "\\.*\\.js", "*\\.d\\.ts", "*\\.config\\.js"],
			rules: { "filenames/match-regex": "off" }
		},
		{ files: ["*.tsx"], rules: { "react/forbid-component-props": "off" } }
	]
};
