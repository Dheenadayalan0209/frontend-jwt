import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/login", { email, password });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("id", res.data.id);
      window.location.href = "/dashboard";

      console.log(res.data);
      setEmail("");
      setPassword("");
       setTimeout(() => {
      window.location.href = "/dashboard";
    }, 100);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          {/* Left side with image + text */}
          <div className="col-md-5 d-flex flex-column justify-content-center text-center">
            {/* 🖼️ Changed this image only */}
            <div className="d-flex justify-content-center mb-3">
  <img
    src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
    alt="CRUD Illustration"
    className="img-fluid rounded"
    style={{ maxWidth: "250px" }}
  />
</div>


            <h3>Manage Your Data Easily</h3>
            <p className="mt-2">
              This CRUD application helps you create, read, update, and delete
              records with a simple and secure interface.
            </p>
          </div>

          {/* Right side login form (your original code untouched) */}
          <div className="col-md-5 d-flex justify-content-center">
            <form
              onSubmit={submit}
              className="p-4 border rounded w-100 shadow-sm d-flex flex-column gap-3"
            >
              <h2 className="text-center mb-3">Login</h2>

              <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                autoComplete="off"
              />

              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                autoComplete="new-password"
              />

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>

              <p className="text-center mt-2">
                No account?
                <span
                  className="text-primary ms-1"
                  role="button"
                  onClick={() => nav("/register")}
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
