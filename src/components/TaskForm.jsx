import { useEffect, useState } from "react"

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("medium")

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title)
      setPriority(taskToEdit.priority || "medium")
    }
  }, [taskToEdit])

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim()) return

    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      priority,
      status: taskToEdit ? taskToEdit.status : "todo",
    }

    if (taskToEdit) {
      editTask(newTask)
    } else {
      addTask(newTask)
    }

    setTitle("")
    setPriority("medium")
    clearEdit()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="flex-1 border p-2 rounded"
      />
      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="high">🔥 High</option>
        <option value="medium">⚖️ Medium</option>
        <option value="low">🐢 Low</option>
      </select>
      <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
        {taskToEdit ? "Update" : "Add"}
      </button>
    </form>
  )
}

export default TaskForm
