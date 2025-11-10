import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

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
      nav(res.data.role === "admin" ? "/admin" : "/");
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <form
        onSubmit={submit}
        className="p-4 border rounded w-50 shadow-sm d-flex flex-column gap-3"
      >
        <h2 className="text-center mb-3">Login</h2>

        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
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
  );
};

export default Login;
