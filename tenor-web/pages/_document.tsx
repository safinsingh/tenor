import Document, { Head, Html, Main, NextScript } from "next/document";

export default class extends Document {
	render = () => (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
