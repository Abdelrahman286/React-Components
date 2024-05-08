import { useState } from "react";
import "./App.css";
import ModalPage from "./pages/ModalPage";
import DropdownPage from "./pages/DropdownPage";
import TablePage from "./pages/TablePage";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("modal");
  let content = "";

  //   conditions
  if (selectedComponent == "modal") {
    content = <ModalPage></ModalPage>;
  } else if (selectedComponent == "dropdown") {
    content = <DropdownPage></DropdownPage>;
  } else if (selectedComponent == "table") {
    content = <TablePage></TablePage>;
  }
  return (
    <div>
      <h1 className="bg-cyan-300 p-2 text-center text-xl">React components</h1>

      <main className="flex">
        <aside className="bg-gray-100 p-2 flex flex-col">
          <span
            className={`${
              selectedComponent == "modal" ? "text-cyan-400 link" : "link"
            }`}
            onClick={() => setSelectedComponent("modal")}
          >
            Modals
          </span>
          <span
            className={`${
              selectedComponent == "dropdown" ? "text-cyan-400 link" : "link"
            }`}
            onClick={() => setSelectedComponent("dropdown")}
          >
            DropDowns
          </span>
          <span
            className={`${
              selectedComponent == "table" ? "text-cyan-400 link" : "link"
            }`}
            onClick={() => setSelectedComponent("table")}
          >
            Tables
          </span>

          <span
            className={`${
              selectedComponent == "Accordion" ? "text-cyan-400 link" : "link"
            }`}
            onClick={() => setSelectedComponent("Accordion")}
          >
            Accordion
          </span>
        </aside>
        <section className="bg-slate-50 p-10 w-full">{content}</section>
      </main>
    </div>
  );
}

export default App;
