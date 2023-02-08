import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import React, { useContext, useRef, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import useAutosizeTextArea from "../hooks/useAutosize";
import { NoteType } from "../models/note";

export function AddNotes() {
  const { addNote } = useContext(NoteContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, description);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log({ title, description });
    addNote(title, description);
    navigate("/");
  };

  return (
    <div className="bg-gray-700 w-full">
      <Container>
        <h1>Add Notes</h1>
        <form className="border-2 rounded-md" onSubmit={handleSubmit}>
          <div className="p-5 space-y-10">
            <input
              name="title"
              className="bg-transparent focus:outline-none w-full"
              type="text"
              placeholder="Note Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name="description"
              className="bg-transparent max-h-60 w-full focus: outline-none overflow-hidden resize-none"
              value={description}
              ref={textAreaRef}
              onChange={(e) => setDescription(e.target.value)}
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
