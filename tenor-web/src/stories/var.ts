import { Grid, User, Layers, Headphones } from "react-feather";
import { ProfileBoxProps } from "../atoms/ProfileBox";
import { ISong } from "../common/song";

export const song = {
	title: "5% Tint",
	artist: "Travis Scott",
	length: 127,
	album: {
		name: "Astroworld",
		cover: "https://i.pinimg.com/originals/15/4b/3a/154b3a679c547316bb33ebe49b1ec517.jpg"
	}
} as ISong;

export const user = {
	name: "Safin Singh",
	profilePicture:
		"https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=50"
} as ProfileBoxProps;

export const pages = [
	{
		icon: Headphones,
		name: "Songs"
	},
	{
		icon: User,
		name: "Artists"
	},
	{
		icon: Grid,
		name: "Albums"
	},
	{
		icon: Layers,
		name: "Playlists"
	}
];
