import { interpret } from "xstate";
import { TenorMachine, TrackStatus } from "../lib/xstate";

describe("Tenor state", () => {
	it("should work correctly", async () => {
		// simulate an entire state progression

		const service = interpret(TenorMachine);
		service.start();
	});
});
