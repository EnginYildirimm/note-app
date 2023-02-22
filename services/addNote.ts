import { APIs } from "@/constants/apis";
import { AddNoteRequestParams } from "@/types/Api";
import { Note } from "@/types/Note";
import axios from "axios";

export const addNoteRequest = async (
  params: AddNoteRequestParams
): Promise<Note[]> => {
  const response = await axios.post(APIs.addNote, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
