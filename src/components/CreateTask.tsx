import { useState, useEffect } from "react";
import TaskContainer from "./TaskContainer";
import Filter from "./Filter";
const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

const CreateTask = () => {
  const [newTask, setNewTask] = useState(storedTasks);
  const [inputValue, setInputValue] = useState();
  const [filter, setFilter] = useState("all");

  const generateId = Math.random().toString(8).slice(2);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }, [newTask]);

  const handleTaskRemove = (e) => {
    const element = e.target.closest("[data-remove-task]");
    if (!element) return;
    setNewTask((t) =>
      t.filter((task) => task.id !== element.dataset.removeTask),
    );
  };

  console.log(newTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setNewTask([
        ...newTask,
        {
          id: generateId,
          title: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearTasks = (e) => {
    const element = e.target;
    element.hasAttribute("data-clear-completed") &&
      setNewTask(newTask.filter((task) => !task.completed));
  };

  const handleTaskFilter = (e) => {
    const element = e.target;

    if (element.id === "completed") {
      setFilter("completed");
    } else if (element.id === "active") {
      setFilter("active");
    } else {
      setFilter("all");
    }
  };

  const handleTaskState = (index) => {
    const newArray = [...newTask];
    newArray.map((task) => {
      if (task.id == index) {
        task.completed = !task.completed;
      }
    });
    setNewTask(newArray);
  };

  return (
    <div className="flex flex-col w-full">
      <form
        className="bg-blue-secondary px-4 py-2 mb-12 flex items-center flex-row-reverse gap-2 rounded-md"
        id="create-task-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="create-task" className="w-full">
          <input
            value={inputValue}
            type="text"
            name="create-task"
            id="create-task"
            className="bg-transparent w-full text-blue-200 py-3 px-1 outline-0 border-0"
            onChange={handleChange}
            placeholder="Create a new todo..."
          />
        </label>
        <button
          type="submit"
          className="border border-blue-400 w-6 aspect-square rounded-full"
        ></button>
      </form>
      {newTask.length ? (
        <TaskContainer
          tasks={newTask}
          handleTaskState={handleTaskState}
          handleTaskRemove={handleTaskRemove}
          filter={filter}
        ></TaskContainer>
      ) : (
        ""
      )}
      {newTask.length ? (
        <Filter
          tasks={newTask}
          handleClearTasks={handleClearTasks}
          handleTaskFilter={handleTaskFilter}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateTask;
