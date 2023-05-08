import "./App.css";
import List from "./component/List";
import Link from "./component/Link";
import Counter from "./component/Counter";

function App() {
  /*   const todos = [
    "Learn React",
    "Learn Redux",
    "Learn GraphQL",
    "Learn MongoDB",
    "Learn NodeJS",
    "Learn Express",
    "Learn AWS",
  ]; */
  return (
    <div>
      <Counter />
      {/*  <List items={todos} />
      <Link text="Go to Facebook!" url="https://www.facebook.com/" /> */}
    </div>
  );
}

export default App;
