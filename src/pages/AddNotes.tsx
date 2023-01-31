import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

export function AddNotes() {
  const { addNote } = useContext(NoteContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addNote(text);
    navigate("/");
  };

  return (
    <div className="bg-gray-700 w-full">
      <Container>
        <h1>Add Notes</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="text-black"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Todo"
          />
          <button>Add</button>
        </form>
      </Container>
    </div>
  );
}
