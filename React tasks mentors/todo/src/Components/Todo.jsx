import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index], newTasks[index - 1]] = [
        newTasks[index - 1],
        newTasks[index],
      ];
      return newTasks;
    });
  };
  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      return newTasks;
    });
  };

  return (
    <div className="todo-list">
      <h1>TO-DO-LIST</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Add task"
          onChange={handleInputChange}
        />
        <button type="button" onClick={addTask} className="add">
          Add
        </button>

        {tasks.map((task, index) => (
          <div key={index} className="task">
            <h1>{task}</h1>
            <div className="buttons">
              <button
                className="delete"
                onClick={() => deleteTask(index)}
                type="button"
              >
                Delete
              </button>
              <button
                className="arrow"
                type="button"
                onClick={() => moveTaskUp(index)}
              >
                Up
              </button>
              <button
                className="arrow"
                type="button"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
