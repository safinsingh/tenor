export const timestampToString = (ts: number) => {
	const min = Math.floor(ts / 60);
	const sec = ts - min * 60;
	const secStr = sec < 10 ? `0${sec}` : `${sec}`;
	return `${min}:${secStr}`;
};
