import { Person } from "./Person";
import { Tombstone } from "./Tombstone";

export interface Grave {
	place: string,
	deadperson: Person,
	tombstone: Tombstone,
}
