
import { useState, useEffect } from "react";

export default function RealTimeTodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Simulated real-time updates every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      const randomTasks = [
        "Check emails",
        "Team meeting",
        "Write report",
        "Review PR",
        "Refactor code"
      ];
      const randomTask =
        randomTasks[Math.floor(Math.random() * randomTasks.length)];
      setTasks(prev => [...prev, randomTask]);
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Real-Time To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="border rounded p-2 w-64"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="w-80">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded shadow"
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
