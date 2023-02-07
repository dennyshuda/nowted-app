import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import React, { useContext, useRef, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import useAutosizeTextArea from "../hooks/useAutosize";

export function AddNotes() {
  const { addNote } = useContext(NoteContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, text);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addNote(text);
    navigate("/");
  };

  return (
    <div className="bg-gray-700 w-full">
      <Container>
        <h1>Add Notes</h1>
        <form className="border-2 rounded-md" onSubmit={handleSubmit}>
          <div className="p-5 space-y-10">
            <textarea
              className="bg-transparent max-h-60 w-full focus: outline-none overflow-hidden resize-none"
              value={text}
              ref={textAreaRef}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your note here!!!"
            />
            <button className="bg-white text-gray-700 py-2 px-7 rounded-md ">
              Add
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
