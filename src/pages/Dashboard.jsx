import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import { useEffect, useState } from "react"

const Dashboard = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks")
    return stored ? JSON.parse(stored) : []
  })

  const filterClass = (value) =>
  `px-3 py-1 border rounded transition-all duration-150 
   ${priorityFilter === value ? "scale-105 font-semibold shadow bg-opacity-30" : "opacity-80 hover:scale-105"}`


  const [taskToEdit, setTaskToEdit] = useState(null)
  const [priorityFilter, setPriorityFilter] = useState(null)


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleEdit = updatedTask => {
    setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)))
    setTaskToEdit(null)
  }

  const handleDelete = id => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project EasyTrackerForDevs</h1>
      
      <div className="flex gap-2 mb-4">
  <button
    onClick={() => setPriorityFilter("high")}
    className={`${filterClass("high")} text-red-600 border-red-600 hover:bg-red-100`}
  >
    🔥 High
  </button>
  <button
    onClick={() => setPriorityFilter("medium")}
    className={`${filterClass("medium")} text-yellow-600 border-yellow-600 hover:bg-yellow-100`}
  >
    ⚖️ Medium
  </button>
  <button
    onClick={() => setPriorityFilter("low")}
    className={`${filterClass("low")} text-green-600 border-green-600 hover:bg-green-100`}
  >
    🐢 Low
  </button>
  <button
    onClick={() => setPriorityFilter(null)}
    className={`${filterClass(null)} text-gray-600 border-gray-400 hover:bg-gray-100`}
  >
    🔄 Reset
  </button>
</div>


      <TaskForm
        addTask={task => setTasks(prev => [...prev, task])}
        editTask={handleEdit}
        taskToEdit={taskToEdit}
        clearEdit={() => setTaskToEdit(null)}
      />
     <TaskList
      tasks={tasks}
      updateTasks={setTasks}
      onEdit={setTaskToEdit}
      onDelete={handleDelete}
      priorityFilter={priorityFilter}
    />

    </div>
  )
}

export default Dashboard
