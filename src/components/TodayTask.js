// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  toggleFavorite,
} from "../redux/actions/taskActions";
import "./TaskList.css";

function TodayTask() {

  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks?.tasks || []);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      parsedTasks.forEach((task) => {
        const taskExists = tasks.some((t) => t.text === task.text);
        if (!taskExists) {
          dispatch(addTask(task));
        }
      });
    }
  }, [dispatch, tasks]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(
        addTask({ text: newTask.trim(), completed: false, favorite: false })
      );
      setNewTask("");
    }
  };

  // Function to toggle task completion
  const handleToggleComplete = (index) => {
    dispatch(toggleTask(index));
  };

  // Function to delete a task
  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  // Function to start editing a task
  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]?.text || "");
  };

  // Function to save the edited task
  const handleSaveEdit = (index) => {
    if (editingText.trim()) {
      dispatch(editTask(index, editingText.trim()));
    }
    setEditingIndex(null);
    setEditingText("");
  };

  // Function to toggle favorite status
  const handleToggleFavorite = (index) => {
    dispatch(toggleFavorite(index)); // Dispatch toggleFavorite action
  };

  return (
    <div className="task-list">
      <h2>Today List</h2>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add A Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-task-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            {editingIndex === index ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onBlur={() => handleSaveEdit(index)} // Save on blur
              />
            ) : (
              <p className="task-list">{task.text}</p>
            )}
            <div className="task-buttons">
              {/* {editingIndex === index ? (
                                <button className="save-btn" onClick={() => handleSaveEdit(index)}>
                                    Save
                                </button>
                            ) : (
                                <button className="edit-btn" onClick={() => handleEditTask(index)}>
                                    Edit
                                </button>
                            )} */}
              {/* <button
                                className="important-btn"
                                onClick={() => handleToggleComplete(index)}
                            >
                                {task.completed ? "Undo" : "Complete"}
                            </button> */}
              <button
                className="favorite-btn"
                onClick={() => handleToggleFavorite(index)} // Toggle favorite
                style={{
                  animation: task.favorite ? "blink 1s infinite" : "none",
                }} // Blinking effect
              >
                ⭐
              </button>
              {/* <button
                                className="delete-btn"
                                onClick={() => handleDeleteTask(index)}
                            >
                                Delete
                            </button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodayTask;
