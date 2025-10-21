const TaskCard = ({ task, changeStatus, onEdit, onDelete }) => {
  const priorityColor = {
  high: "text-red-600",
  medium: "text-yellow-600",
  low: "text-green-600",
}
  return (
    <div className="p-4 bg-white border rounded shadow-sm relative">
      <h3 className="font-medium">{task.title}</h3>
      <p className={`text-xs mt-1 ${priorityColor[task.priority]}`}>
          Priority: {task.priority}
        </p>
      <div className="mt-2 flex gap-2 text-sm">
        {task.status !== "todo" && (
          <button
            onClick={() => changeStatus(task.id, "prev")}
            className="text-blue-700 hover:underline"
          >
            ← Back
          </button>
        )}
        {task.status !== "done" && (
          <button
            onClick={() => changeStatus(task.id, "next")}
            className="text-blue-700 hover:underline"
          >
            Next →
          </button>
        )}
        <button onClick={() => onEdit(task)} className="text-yellow-600 hover:underline">
          ✏️
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-600 hover:underline">
          🗑️
        </button>
      </div>
    </div>
  )
}

export default TaskCard
