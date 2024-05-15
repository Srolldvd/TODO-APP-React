const TaskContainer = (props) => {
  let tasks = props.tasks;
  const handleTaskRemove = props.handleTaskRemove;
  const handleTaskState = props.handleTaskState;
  const filter = props.filter;

  const updateTaskState = (e) => {
    const element = e.target.closest("[data-task]");
    return handleTaskState(element.dataset.task);
  };

  const handleClick = (e) => {
    if (e.target.closest("[data-remove-task]")) {
      handleTaskRemove(e);
    } else if (e.target.closest("[data-task]")) {
      updateTaskState(e);
    }
  };

  const filterCompleted = () => {
    return tasks.filter((task) => task.completed);
  };

  const filterActive = () => {
    return tasks.filter((task) => !task.completed);
  };

  if (filter === "completed") {
    tasks = filterCompleted();
  } else if (filter === "active") {
    tasks = filterActive();
  }

  return (
    <div className="bg-blue-secondary">
      <div>
        {tasks.map((task) => {
          return (
            <div
              className="flex items-center gap-4 px-4 py-4 border-b border-blue-400 cursor-pointer"
              key={task.id}
              data-task={task.id}
              onClick={(e) => handleClick(e)}
            >
              <span
                className={
                  task.completed
                    ? `bg-gradient-to-r from-[#57ddff] to-[#c058f3] border border-blue-400 w-7 aspect-square rounded-full relative`
                    : `border border-blue-400 w-7 aspect-square rounded-full relative`
                }
              >
                <img
                  src="/src/assets/img/icon-check.svg"
                  alt="Check icon"
                  className={
                    task.completed
                      ? `absolute inset-1/4 translate-y-px`
                      : `hidden absolute inset-1/4 translate-y-px`
                  }
                />
              </span>
              <p
                className={
                  task.completed
                    ? `line-through w-full text-blue-200`
                    : `w-full text-blue-200`
                }
              >
                {task.title}
              </p>
              <span
                className="cursor-pointer hover:invert"
                data-remove-task={task.id}
              >
                <img src="/src/assets/img/icon-cross.svg" alt="Cross icon" />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TaskContainer;
