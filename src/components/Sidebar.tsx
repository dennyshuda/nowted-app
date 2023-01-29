import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="h-screen w-80 bg-gray-800">
      <nav className="py-5 px-2 text-white">
        <section className="text-center">
          <h1 className="uppercase text-2xl tracking-wider font-bold mb-10">
            Nowted
          </h1>
        </section>
        <ul className="space-y-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/archived-notes">Archived</Link>
          </li>
          <li>
            <Link to="/add-notes">Add Notes</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
