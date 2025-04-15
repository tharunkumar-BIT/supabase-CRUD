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
      .select()
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

    if (error) console.log("Error updating the data");
    else {
      // fetchToDos();

      //another way
      const updatedToDoList = toDoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
      ); //map function is used to update the state
      setToDoList(updatedToDoList);
    }
  };

  //deleting ToDo's
  const deleteTask = async (id) => {
    const { data, error } = await supabase
      .from("TodoList")
      .delete()
      .eq("id", id);
    if (error) console.log("Error deleting the data");
    else {
      // fetchToDos();

      //another way
      setToDoList((prev) => prev.filter((todo) => todo.id !== id));
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
            <p>{toDo.Name}</p>
            <button onClick={() => completeTask(toDo.id, toDo.isCompleted)}>
              {toDo.isCompleted ? "Undo" : "Complete task"}
            </button>
            <button onClick={() => deleteTask(toDo.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
