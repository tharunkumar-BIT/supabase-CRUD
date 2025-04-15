import supabase from "./supabase-client";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const addToDo = async () => {
    const newToDoData = {
      Name: newToDo,
      isCompleted: false,
    };
    const { data, error } = await supabase
      .from("TodoList")
      .insert([newToDoData])
      .single();
    if(error) console.log("Error adding todo", error);
    else{
      setToDoList((prev) => [...prev, data]);
      setNewToDo("");
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="New ToDo...."
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button onClick={addToDo}>Add ToDo Item</button>
      </div>
      <ul></ul>
    </div>
  );
}

export default App;
