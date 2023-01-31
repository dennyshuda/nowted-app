import { useContext } from "react";
import Container from "../components/Container";
import { NoteContext } from "../context/NoteContext";

export function Home() {
  const { notes, addNote } = useContext(NoteContext);
  return (
    <div className="bg-gray-700 w-full">
      <Container>
        <h1>Home Page</h1>
        {notes.map((notes) => {
          return (
            <li key={notes.id}>
              <p>{notes.title}</p>
            </li>
          );
        })}
      </Container>
    </div>
  );
}
