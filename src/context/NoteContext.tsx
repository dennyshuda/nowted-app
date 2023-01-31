import { ReactNode, createContext, useState } from "react";
import { NoteContextType, NoteType } from "../models/note";
import { NoteData } from "../data";

interface ChildrenType {
  children: ReactNode;
}

export const NoteContext = createContext<NoteContextType>({
  notes: [],
  addNote: () => {},
});

export function NoteContextProvider({ children }: ChildrenType) {
  const [notes, Notes] = useState<NoteType[]>(NoteData);

  const addNote = (title: string) => {
    Notes([...notes, { id: Math.random(), title }]);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote }}>
      {children}
    </NoteContext.Provider>
  );
}
