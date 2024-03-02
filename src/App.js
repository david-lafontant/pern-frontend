import { Fragment } from "react";
import CreateTodo from "./components/createTodo/CreateTodo";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <Fragment>
      <CreateTodo />
      <Todos />
    </Fragment>
  );
}

export default App;
