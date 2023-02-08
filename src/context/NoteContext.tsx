import { ReactNode, createContext, useState } from "react";
import { NoteContextType, NoteType } from "../models/note";
import { NoteData } from "../data";
import uuid from "react-uuid";

interface ChildrenType {
  children: ReactNode;
}

interface inputUser {
  title: string;
  description: string;
}

export const NoteContext = createContext<NoteContextType>({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
  archivedNote: () => {},
});

export function NoteContextProvider({ children }: ChildrenType) {
  const [notes, setNotes] = useState<NoteType[]>(NoteData);

  const addNote = (title: string, description: string) => {
    const newNote = {
      id: uuid(),
      title: title,
      description: description,
      status: false,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archivedNote = (id: string) => {
    notes.filter((note) => {
      if (note.id === id) {
        if (note.status == true) {
          note.status = false;
        } else {
          note.status = true;
        }
        setNotes([...notes]);
      }
    });
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, archivedNote }}>
      {children}
    </NoteContext.Provider>
  );
}
