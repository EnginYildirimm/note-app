import { APIs } from "@/constants/apis";
import { DeleteNoteRequestParams } from "@/types/Api";
import { Note } from "@/types/Note";
import axios from "axios";

export const deleteNoteRequest = async (
  params: DeleteNoteRequestParams
): Promise<Note[]> => {
  const response = await axios.post(APIs.deleteNote, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
