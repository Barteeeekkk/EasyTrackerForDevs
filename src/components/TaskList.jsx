import TaskCard from "./TaskCard"

const TaskList = ({ tasks, updateTasks, onEdit, onDelete, priorityFilter }) => {

  const priorityOrder = {
  high: 0,
  medium: 1,
  low: 2,
}

  const changeStatus = (id, direction) => {
    const updated = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            status:
              direction === "next"
                ? task.status === "todo"
                  ? "doing"
                  : "done"
                : task.status === "done"
                ? "doing"
                : "todo",
          }
        : task
    )
    updateTasks(updated)
  }

  const columns = ["todo", "doing", "done"]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {columns.map(status => (
        <div key={status}>
          <h2 className="text-xl font-semibold capitalize mb-2">{status}</h2>
          <div className="space-y-2">
            {tasks
              .filter(t => t.status === status)
              .filter(t => !priorityFilter || t.priority === priorityFilter)
              .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
              .map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  changeStatus={changeStatus}
                  onEdit={onEdit}        
                  onDelete={onDelete}    
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList

