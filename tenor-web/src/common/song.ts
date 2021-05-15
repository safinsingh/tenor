export interface ISong {
	title: string;
	artist: string;
	album: { name: string; cover: string };
	length: number;
	onClick?: () => void | PromiseLike<void>;
}
