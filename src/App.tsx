import { Outlet, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { ActiveNotes } from "./pages/ActiveNotes";
import { ArchivedNotes } from "./pages/ArchivedNotes";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <Sidebar />
        <main className="bg-gray-700 w-full p-5 text-white">
          <Routes>
            <Route path="/" element={<ActiveNotes />} />
            <Route path="/archived-notes" element={<ArchivedNotes />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
