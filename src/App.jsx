import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-cyan-300 p-2 text-center text-xl">React components</h1>

      <main>
        <aside>links</aside>
      </main>
    </div>
  );
}

export default App;
