// app.jsx
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ backgroundColor: 'blue', color: 'green', padding: '20px' }}>
      <h1 style={{ color: 'green' }}>Task Manager</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {task}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={addTask} style={{ backgroundColor: 'red', color: 'white' }}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
