export interface NoteType {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

export interface NoteContextType {
  notes: NoteType[];
  addNote: (title: string, description: string) => void;
  deleteNote: (id: string) => void;
}
