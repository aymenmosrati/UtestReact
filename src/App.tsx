import "./App.css";
import { Application } from "./components/application/application";
import Counter from "./components/counter/counter";
import { Skills } from "./components/skills/skills";

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <div className="App">
      <Counter />
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
