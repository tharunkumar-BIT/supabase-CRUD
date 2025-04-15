import supabase from "./supabase-client";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  useEffect(() => {
    fetchToDos();
  }, []);

  //adding ToDo's
  const addToDo = async () => {
    const newToDoData = {
      Name: newToDo,
      isCompleted: false,
    };
    const { data, error } = await supabase
      .from("TodoList")
      .insert([newToDoData])
      .single();
    if (error) console.log("Error adding todo", error);
    else {
      setToDoList((prev) => [...prev, data]);
      setNewToDo("");
    }
  };

  //fetching ToDo's
  const fetchToDos = async () => {
    const { data, error } = await supabase.from("TodoList").select("*");
    if (error) console.log("Error fetching Data", error);
    else {
      setToDoList(data);
    }
  };

  //Updating ToDo's
  const completeTask = async (id, isCompleted) => {
    const { data, error } = await supabase
      .from("TodoList")
      .update({ isCompleted: !isCompleted })
      .eq("id", id);

    if(error) console.log("Error updating the data");
    else{
      fetchToDos();
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="New ToDo...."
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button onClick={addToDo}>Add ToDo Item</button>
      </div>
      <ul>
        {toDoList.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.Name}</span>
            <button onClick={() => completeTask(toDo.id, toDo.isCompleted)}>
              {toDo.isCompleted ? "Undo" : "Complete task"}
            </button>
            <button>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
