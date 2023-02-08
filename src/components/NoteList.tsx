import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

export function NoteList() {
  const { notes, deleteNote, archivedNote } = useContext(NoteContext);

  return (
    <div className="flex flex-wrap gap-5">
      {notes.map((note) => {
        return (
          <li
            key={note.id}
            className="block space-y-3 max-h-60 w-80 p-6 bg-gray-800 rounded-lg "
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              {note.title}
            </h5>
            <p className=" text-sm truncate text-gray-400 dark:text-gray-400">
              {note.description}
            </p>
            <p>date</p>
            <button
              onClick={() => {
                deleteNote(note.id);
              }}
            >
              delete
            </button>
            <button onClick={() => archivedNote(note.id)}>
              {note.status ? "Archived" : "Undo"}
            </button>
          </li>
        );
      })}
    </div>
  );
}
