export interface NoteType {
  id: number;
  title: string;
}

export interface NoteContextType {
  notes: NoteType[];
  addNote: (title: string) => void;
}
