import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

export function NoteList() {
  const { notes, deleteNote } = useContext(NoteContext);

  return (
    <div className="flex flex-wrap gap-5">
      {notes.map((notes) => {
        return (
          <li
            key={notes.id}
            className="block space-y-3 max-h-60 w-80 p-6 bg-gray-800 rounded-lg "
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              {notes.title}
            </h5>
            <p className=" text-sm truncate text-gray-400 dark:text-gray-400">
              {notes.description}
            </p>
            <p>date</p>
            <button
              onClick={() => {
                deleteNote(notes.id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </div>
  );
}
