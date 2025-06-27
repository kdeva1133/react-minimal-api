import { useEffect, useState } from "react";
import "./App.css";
import { fetchData, InsertData } from "./services/todo-service.tsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    GetTodoData();
  }, []);
  const todoPayload = {
    Id: id,
    Name: name,
    IsComplete: isComplete,
  };
  const GetTodoData = async () => {
    fetchData().then((response) => {
      const todolist = response.data;
      setTodos(todolist);
    });
  };
  const SaveTodoData = async () => {
    const res = await InsertData(todoPayload);
    if (res.status === 201) {
      GetTodoData();
      setId(0);
      setName("");
      setIsComplete(false);
    }
  };
  return (
    <div>
      <div>
        <table border={"1px"}>
          <th>Id</th>
          <th>Name</th>
          <th>IsComplete</th>
          <tbody>
            {todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.isComplete ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul>
          {todos.map((todo) => (
            <li key={todo.Id}>
              {todo.name} <a>{todo.isComplete ? "true" : "false"}</a>
            </li>
          ))}
        </ul>
        <input
          id="Id"
          type="number"
          onChange={(e) => setId(Number(e.target.value))}
        ></input>
        <input
          id="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          id="IsComplete"
          type="checkbox"
          onChange={(e) => setIsComplete(e.target.checked)}
        ></input>
        <button onClick={SaveTodoData}>SaveData</button>
      </div>
    </div>
  );
}

export default App;
