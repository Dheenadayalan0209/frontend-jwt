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
      // alert(error.response?.data?.message || "login failed");
      alert(error.response?.data?.message);
    }
  };
  //sdfghj

  return (
    <>
      <form
      onSubmit={submit}
      className="p-4 rounded shadow bg-white"
      style={{ width: "350px", margin: "80px auto" }}
    >
      <h2 className="text-center mb-4">Login</h2>

      <div className="mb-3">
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>

      <p className="text-center mt-3">
        No account?
        <span className="text-primary ms-1" style={{ cursor: "pointer" }}>
          Register
        </span>
      </p>
    </form>
    </>
  );
};

export default Login;
