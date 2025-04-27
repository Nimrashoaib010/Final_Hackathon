import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialTasks = {
  todo: [{ id: "1", content: "Task 1" }, { id: "2", content: "Task 2" }],
  inProgress: [],
  done: [],
};

function TaskTracker() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("todo");
  const [columnColors, setColumnColors] = useState({
    todo: "#ffffff",
    inProgress: "#ffffff",
    done: "#ffffff",
  });

  // For editing a task
  const [editingTask, setEditingTask] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const sourceItems = [...sourceColumn];
    const destItems = [...destColumn];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setTasks({ ...tasks, [source.droppableId]: sourceItems });
    } else {
      destItems.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems,
      });
    }
  };

  const addTask = () => {
    if (newTaskText.trim() === "") return;

    const newTask = { id: Date.now().toString(), content: newTaskText };
    setTasks((prev) => ({
      ...prev,
      [selectedColumn]: [...prev[selectedColumn], newTask],
    }));
    setNewTaskText("");
  };

  const handleColorChange = (columnId, color) => {
    setColumnColors((prev) => ({
      ...prev,
      [columnId]: color,
    }));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setEditedContent(task.content);
  };

  const handleSaveEdit = () => {
    if (editedContent.trim() === "") return;

    const updatedTasks = { ...tasks };
    const column = updatedTasks[editingTask.columnId];
    const taskIndex = column.findIndex((task) => task.id === editingTask.id);
    column[taskIndex].content = editedContent;

    setTasks(updatedTasks);
    setEditingTask(null);
    setEditedContent("");
  };

  const handleDelete = (taskId, columnId) => {
    const updatedTasks = tasks[columnId].filter((task) => task.id !== taskId);
    setTasks({ ...tasks, [columnId]: updatedTasks });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 p-6 rounded-lg shadow-md">
      {/* Add Task Section */}
      <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Enter new task"
          className="p-2 rounded border w-full md:w-1/3"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <select
          className="p-2 rounded border"
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={addTask}
        >
          + Add Task
        </button>
      </div>

      {/* Boards */}
      <div className="flex flex-wrap gap-4">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(tasks).map(([columnId, columnTasks]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  className="flex-1 min-w-[300px] rounded-lg p-4 shadow-lg"
                  style={{ backgroundColor: columnColors[columnId] }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold capitalize">
                      {columnId.replace(/([A-Z])/g, " $1")}
                    </h2>
                    <input
                      type="color"
                      value={columnColors[columnId]}
                      onChange={(e) => handleColorChange(columnId, e.target.value)}
                      title="Change Column Color"
                      className="w-8 h-8 p-0 border-0 cursor-pointer"
                    />
                  </div>
                  {columnTasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="bg-white p-3 my-2 rounded shadow cursor-pointer hover:bg-gray-200 transition"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="flex justify-between items-center">
                            <span>{task.content}</span>
                            <div className="flex gap-2">
                              <button
                                className="text-blue-500"
                                onClick={() => handleEdit({ ...task, columnId })}
                              >
                                Edit
                              </button>
                              <button
                                className="text-red-500"
                                onClick={() => handleDelete(task.id, columnId)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTask(null)}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskTracker;
