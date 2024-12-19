import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import editimg from "../assets/pencil.png";
import deleteimg from "../assets/delete.png";
import checkimg from "../assets/checked.png";
import cancelimg from "../assets/remove.png"

const ToDoHome = () => {
  // create a variables for storing title and description values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // create a array for storing title and description
  const [todos, setTodos] = useState([]);
  // create a variable for display success message and error message
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // edit and delete variables
  const [editId, setEditId] = useState(-1);
  // create a variable for storing the id of the item
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // BackEnd API
  const Url = "https://todoapp-backend-dc2n.onrender.com/todo";

  // Post method
  const handleSubmit = async () => {
    // validate a input fields
    if (title !== "" && description !== "") {
      try {
        setError("");
        const submittedList = await axios.post(Url + "/post", {
          title,
          description,
        });
        // Debugging step
        console.log("Submitted Task:", submittedList.data);
        // set a successfull message
        setMessage("Task added successfully!");
        // title and description added to array
        setTodos([...todos, submittedList.data]);

        // Success feedback for 2 seconds after that clear the success message
        setTimeout(() => {
          setMessage("");
        }, 2000);
        // clear the inputs
        setTitle("");
        setDescription("");
      } catch (err) {
        console.log(err);
      }
    } else {
      // set a Error message for 2 seconds
      setError("unable to create a item!");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  //Get method
  useEffect(() => {
    getToDos();
  }, []);

  const getToDos = async () => {
    try {
      const response = await axios.get(Url + "/get");
      const resp = await response.data.todolist;

      console.log(resp);
      setTodos(resp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // for Edit 
  const handleEdit = (item) => {
    console.log("Edit Id:", editId);
    setEditId(item._id);
    setEditTitle(item.title);
    setEditDescription(item.description);
  }
  // edit cancel
  const handleEditcancel =() => {
    setEditId(-1);
  }

  // put method
  const handleUpdate = async () => {
    if (editTitle !== "" && editDescription !== "") {
      try {
        await axios.put(`${Url}/update/${editId}`, {
          title: editTitle,
          description: editDescription,
        });
        const updatedTodos = todos.map((item) =>
          item._id === editId
            ? { ...item, title: editTitle, description: editDescription }
            : item
        );
        setTodos(updatedTodos);
        setEditId(-1);
        alert("Task updated successfully!");
      } catch (err) {
        console.error("Error updating task:", err);
        alert("Failed to update task.");
      }
    }
  };
  
  // delete method
  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this item?")) {
      try {
        await axios.delete(`${Url}/delete/${id}`);
        const updatedTodos = todos.filter((item) => item._id !== id);
        setTodos(updatedTodos);
        alert("Task deleted successfully!");
      } catch (error) {
        console.error("Error deleting task:", error);
        alert("Failed to delete task.");
      }
    }
  };
  

  return (
    <>
      <div className="container mt-2">
        <h1 className="text-danger text-center">
          ToDo<span className="text-warning">List</span>
        </h1>
        <div className="todo">
          <div className="row">
            {/* Title */}
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Enter The Title"
                className="form-control mb-3"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            {/* Description */}
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Enter The Description"
                className="form-control mb-3"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
          </div>
          {/* showing a success message */}
          <div>
            {message && (
              <p className="text-center text-success fw-bold">{message}</p>
            )}
            {/* showing a error message */}
            {error && (
              <p className="text-center text-danger fw-bold">{error}</p>
            )}
          </div>

          <button
            className="btn btn-secondary text-center butTon"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
        {/* for Listing the todo items */}
        {todos.map((item) => {
          return (
            <div className="row mt-3 container" key={item._id}>
              <ul className="list-group d-flex my-1 w-100">
                <li className="list-group-item w-100">
                  <div className="d-flex flex-column align-items-center text-center text-md-start">
                    {editId == -1 || editId !== item._id ? <>
                    <span className="fw-bold text-primary">{item.title}</span>
                    <span className="text-secondary">{item.description}</span>
                    </> :
                    <>
                    <div className="form-group">
                      <input type="text" className="form-control my-1" onChange={(e)=>setEditTitle(e.target.value)}  value={editTitle}/>
                      <input type="text" className="form-control" onChange={(e)=>setEditDescription(e.target.value)} value={editDescription}/>
                    </div>
                    </>
                  }
                    
                  </div>
                  <div className="d-flex gap-2 justify-content-evenly justify-content-md-end mt-1">
                   { editId == -1 || editId !== item._id ? <>
                   <button className="btn btn-warning">
                      <img src={editimg} alt="Edit" 
                      onClick={()=> handleEdit(item)} 
                      />
                    </button> </>
                    :
                    <button className="btn btn-success">
                      <img src={checkimg} alt="Edit" 
                      onClick={handleUpdate} 
                      />
                      </button>
                    }
                    
                    { editId == -1 || editId !== item._id ? <button className="btn btn-danger">
                      <img
                        src={deleteimg}
                        alt="Delete"
                        onClick={()=> handleDelete(item._id)}
                      />
                    </button>
                      :
                    <button className="btn btn-danger">
                      <img src={cancelimg} alt="cancel"
                      onClick={handleEditcancel}
                      />
                    </button>}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
        
      </div>
    </>
  );
};

export default ToDoHome;
