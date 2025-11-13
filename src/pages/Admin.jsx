import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await api.delete(`/${id}`);
    confirm("user deleted");
    loadUsers();
  };

  return (
    <div className="container mt-4">
      <Navbar/>
      <h2 className="mb-4 text-center">Admin Panel</h2>

      <div className="row g-4">
  {users.map((user) => (
    <div key={user._id} className="col-md-4 col-sm-6">
      <div className="card p-4 shadow-sm text-center">

        <img
          src={user.imageUrl}
          alt={user.name}
          className="rounded-circle mx-auto"
          width="120"
          height="120"
          style={{ objectFit: "cover" }}
        />

        <h5 className="mt-3 mb-1">{user.name}</h5>

        <p className="mb-1">
          <strong>Role:</strong> {user.role}
        </p>

        <p className="text-muted small mb-3">
          <strong>EMAIL ID:</strong> {user.email}
        </p>

        <div className="d-flex gap-2">
          <button
            className="btn btn-warning w-50"
            onClick={() => nav(`/edit/${user._id}`)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger w-50"
            onClick={() => deleteUser(user._id)}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Admin;
