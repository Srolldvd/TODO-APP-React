const Filter = (props) => {
  const tasks = props.tasks;
  const handleClearTasks = props.handleClearTasks;
  const handleTaskFilter = props.handleTaskFilter;

  return (
    <div
      className="flex justify-between text-blue-300 px-2 py-4 text-sm bg-blue-secondary"
      onClick={(e) => handleClearTasks(e)}
    >
      <p className="">
        {tasks.length > 1 ? `${tasks.length} items left` : "1 item left"}
      </p>
      <div className="font-medium">
        <form className="flex gap-6" onChange={(e) => handleTaskFilter(e)}>
          <label
            htmlFor="all"
            className="transition-colors hover:text-blue-200 cursor-pointer"
          >
            <input
              type="radio"
              name="filter"
              id="all"
              className="hidden"
              data-all
            />
            All
          </label>
          <label
            htmlFor="active"
            className="transition-colors hover:text-blue-200 cursor-pointer"
          >
            <input
              type="radio"
              name="filter"
              id="active"
              className="hidden"
              data-active
            />
            Active
          </label>
          <label
            htmlFor="completed"
            className="transition-colors hover:text-blue-200 cursor-pointer"
          >
            <input
              type="radio"
              name="filter"
              id="completed"
              className="hidden"
              data-completed
            />
            Completed
          </label>
        </form>
      </div>
      <button
        type="button"
        className="cursor-pointer transition-colors hover:text-blue-200"
        data-clear-completed
      >
        Clear all completed
      </button>
    </div>
  );
};

export default Filter;
