import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Dashboard = () => {
  const [user, setUser] = useState([]);

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (user.role === "user") {
    return (
      <div className="container text-center py-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9441/9441387.png"
          alt="User Icon"
          width="120"
          height="120"
          className="mb-3"
        />
        <h2 className="fw-bold text-primary mb-3">User Dashboard</h2>
        <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <p className="mb-2">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="mb-2">
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      </div>
    );
  } else {
    const userArr = user?.filter((u) => u._id === localStorage.getItem("id"));
    console.log(userArr);

    return (
      <div className="min-vh-100 d-flex flex-column">
        {/* Navbar */}
        <Navbar/>
        

        {/* Header / Banner */}
        <div className="bg-light text-center py-5 border-bottom">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1162/1162446.png"
            alt="Dashboard Icon"
            width="120"
            height="120"
            className="mb-3"
          />
          <h1 className="fw-bold">Admin Dashboard</h1>
          <p className="text-muted mb-0">
            Manage all user records — view details, roles, and access admin panel.
          </p>
        </div>

        {/* User List */}
        <div className="container my-5 flex-grow-1">
          <h4 className="fw-semibold mb-4">Your Account Info</h4>

          <div className="row g-4 justify-content-center">
            {userArr.map((user) => (
              <div
                key={user._id}
                className="col-md-5 col-lg-4"
              >
                <div className="card shadow-sm border-0 p-3 text-center">
                  <img
                    src={user.imageUrl}
                    alt="Profile Icon"
                    width="100"
                    className="mx-auto mb-3 rounded-circle"
                  />
                  <h5 className="fw-bold">{user.name}</h5>
                  <p className="text-muted mb-2">{user.role}</p>
                  <Link to="/admin">
                    <button className="btn btn-primary mt-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        alt="Admin Icon"
                        width="20"
                        className="me-2"
                      />
                      Go to Admin Panel
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white text-center py-3 mt-auto">
          © {new Date().getFullYear()} DHEENA's — CRUD Dashboard
        </footer>
      </div>
    );
  }
};

export default Dashboard;
