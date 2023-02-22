import { supabase } from "@/lib/supabase";
import { Note } from "@/types/Note";
import { NextApiHandler } from "next";
import { DeleteNoteRequestParams } from "@/types/Api";

const handler: NextApiHandler<Note[]> = async (req, res) => {
  if (req.method === "POST") {
    const note = req.body as DeleteNoteRequestParams;
    const { error } = await supabase.from("notes").delete().eq("id", note.id);
    if (!error) {
      const { data: notes, error: notesError } = await supabase
        .from("notes")
        .select("*")
        .order("created_at", {
          ascending: false,
        });
      if (!notesError) {
        res.status(200).json(notes as Note[]);
      }
    }
  }
  return res.status(405).end();
};

export default handler;
