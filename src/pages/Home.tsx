import Container from "../components/Container";
import { NoteList } from "../components/NoteList";

export function Home() {
  return (
    <div className="bg-gray-700 w-full">
      <Container>
        <h1>Home Page</h1>
        <NoteList />
      </Container>
    </div>
  );
}
