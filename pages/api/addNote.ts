import { supabase } from "@/lib/supabase";
import { Note } from "@/types/Note";
import { NextApiHandler } from "next";
import { AddNoteRequestParams } from "@/types/Api";

const handler: NextApiHandler<Note[]> = async (req, res) => {
  if (req.method === "POST") {
    const note = req.body as AddNoteRequestParams;
    const { error } = await supabase.from("notes").insert(note);
    if (!error) {
      const { data: notes, error: notesError } = await supabase
        .from("notes")
        .select("*")
        .order("created_at", {
          ascending: false,
        });
      if (!notesError) {
        return res.status(200).json(notes as Note[]);
      }
    } else {
      res.status(200).end();
    }
  }
  return res.status(405).end();
};

export default handler;
