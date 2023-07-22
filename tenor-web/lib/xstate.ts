import { createMachine, send } from "xstate";

export interface Song {
	title: string;
	artist: string;
	album: { name: string; cover: string };
	length: number;
	url: string | null;
}

type MachineContext = {
	playerHead: number | null;
	trackQueue: String[];
	audioRef: HTMLAudioElement | null;
	errorStack: Error[];
};

export const TenorMachine = createMachine<MachineContext>(
	{
		id: "tenor",
		initial: "paused",
		context: {
			playerHead: null,
			trackQueue: [],
			audioRef: null,
			errorStack: []
		},
		states: {
			paused: {
				on: {
					PLAY: { target: "playing", actions: ["play"] }
				}
			},
			playing: {
				on: {
					PAUSE: { target: "paused", actions: ["pause"] }
				}
			},
			error: {}
		}
	},
	{
		actions: {
			play: (ctx, ev) => {
				const song = ev.song as Song;

				if (ctx.audioRef.src !== song.url) ctx.audioRef.src = song.url;
				ctx.audioRef.play();
			},
			pause: (ctx, ev) => {
				if (!ctx.audioRef.src) {
					ctx.errorStack.push(
						new Error("Attempting to pause with no track playing")
					);
				}
			}
		}
	}
);
