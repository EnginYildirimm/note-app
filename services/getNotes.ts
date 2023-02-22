import { APIs } from "@/constants/apis";
import { Note } from "@/types/Note";
import axios from "axios";

export const getNotesRequest = async (): Promise<Note[]> => {
  const response = await axios.get(APIs.getNotes, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
