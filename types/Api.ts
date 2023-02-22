import { Note } from "./Note";

export type AddNoteRequestParams = Pick<Note, "title" | "content">;
export type UpdateNoteRequestParams = Pick<Note, "id" | "title" | "content">;
export type UpdateNoteStateRequestParams = Pick<Note, "id" | "state">;
export type DeleteNoteRequestParams = Pick<Note, "id">;
