import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import {
  addTask,
  deleteTask,
  selectItems,
  updateTask,
  type Task,
} from "./taskSlice";

const TaskManagement = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: 1,
    title: "",
    description: "",
    status: "In Progress",
    priority: "High",
  });

  const task = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask({ ...formData, id: task.length + 1 }));
    console.log(task);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (payload: Task) => {
    setIsEditMode(true);
    if (!payload.title || !payload.description) throw new Error("Erorr");
    
    setFormData({ ...payload });
  };

  const handleUpdate = (formData: Task) => {
    dispatch(updateTask(formData));
    setIsEditMode(false);
    setFormData({
      id: 1,
      title: "",
      description: "",
      status: "In Progress",
      priority: "High",
    });
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            margin: "12px",
          }}
        >
          <input
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="title"
          />
          <input
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="description"
          />

          <select
            value={formData.status}
            onChange={(e) => handleChange(e)}
            name="status"
          >
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Todo">Todo</option>
          </select>

          <select
            value={formData.priority}
            onChange={(e) => handleChange(e)}
            name="priority"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {isEditMode ? (
            <button type="button" onClick={() => handleUpdate(formData)}>
              Update Task
            </button>
          ) : (
            <button>Add Task</button>
          )}
        </form>
        <h1>Task Management</h1>
        <input type="search" name="" placeholder="Serach Task" id="" />{" "}
        {/* table of task  */}
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {task?.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.description}</td>
                <td>{d.status}</td>
                <td>{d.priority}</td>
                <td>
                  <button onClick={() => handleEdit(d)}>Edit</button>
                  <button onClick={() => handleDelete(d.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskManagement;
