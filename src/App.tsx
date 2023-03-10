import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { ArchivedNotes } from "./pages/ArchivedNotes";
import { AddNotes } from "./pages/AddNotes";
import Layout from "./components/Layout";
import { NoteContextProvider } from "./context/NoteContext";

function App() {
  return (
    <div className="App">
      <NoteContextProvider>
        <BrowserRouter>
          <Layout>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/archived-notes" element={<ArchivedNotes />} />
              <Route path="/add-notes" element={<AddNotes />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </NoteContextProvider>
    </div>
  );
}

export default App;
