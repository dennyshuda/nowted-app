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

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}
