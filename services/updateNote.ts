import { APIs } from "@/constants/apis";
import { UpdateNoteRequestParams } from "@/types/Api";
import { Note } from "@/types/Note";
import axios from "axios";

export const updateNoteRequest = async (
  params: UpdateNoteRequestParams
): Promise<Note[]> => {
  const response = await axios.post(APIs.addNote, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
