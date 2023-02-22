import { deleteNoteRequest } from "@/services/deleteNote";
import { Note } from "@/types/Note";
import { FC, useCallback } from "react";
import { HiX } from "react-icons/hi";
import { updateNoteRequest } from "@/services/updateNote";

type NoteProps = {
  note: Note;
  onDelete: (notes: Note[]) => void;
};

const Note: FC<NoteProps> = (props) => {
  const { note, onDelete } = props;

  const handleDelete = useCallback(async () => {
    const newNotes = await deleteNoteRequest({
      id: note.id,
    });
    onDelete(newNotes);
  }, [onDelete]);
  return (
    <div className="flex flex-col space-y-4 bg-gray-600 rounded-lg p-4 lg:p-6">
      <header>
        <h5 className="text-white text-3xl font-bold">{note?.title}</h5>
      </header>
      <p>{note?.content}</p>
      <div className="flex items-center justify-between">
        <span className="block text-sm text-gray-500">{note?.created_at}</span>
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded bg-red-800 text-white"
          onClick={handleDelete}
        >
          <HiX size={24} />
        </button>
      </div>
    </div>
  );
};

export default Note;
