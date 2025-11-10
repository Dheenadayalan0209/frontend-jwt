import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    adminCode: "",
    imageUrl: "",
  });

  const nav = useNavigate();

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/register", form);
      console.log(res.data);
      alert("Registered successfully");
      nav("/login");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="container mt-4">
  <h2 className="mb-3">Register</h2>

  <div className="mb-3">
    <input
      required
      value={form.name}
      name="name"
      placeholder="Name"
      className="form-control"
      onChange={change}
    />
  </div>

  <div className="mb-3">
    <input
      required
      value={form.email}
      name="email"
      placeholder="Email"
      type="email"
      className="form-control"
      onChange={change}
    />
  </div>

  <div className="mb-3">
    <input
      required
      value={form.password}
      name="password"
      placeholder="Password"
      type="password"
      className="form-control"
      onChange={change}
    />
  </div>

  <div className="mb-3">
    <input
      required
      value={form.imageUrl}
      name="imageUrl"
      placeholder="Image URL"
      className="form-control"
      onChange={change}
    />
  </div>

  <div className="mb-3">
    <select
      value={form.role}
      required
      name="role"
      className="form-select"
      onChange={change}
    >
      <option value="user">user</option>
      <option value="admin">admin</option>
    </select>
  </div>

  {form.role === "admin" && (
    <div className="mb-3">
      <input
        required
        value={form.adminCode}
        name="adminCode"
        placeholder="Admin Code"
        className="form-control"
        onChange={change}
      />
    </div>
  )}

  <button className="btn btn-primary" type="submit">
    Register
  </button>
</form>

    </div>
  );
};

export default Register;
