import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";

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
    <>
    <Navbar/>
    <div className="container d-flex justify-content-center mt-5">
      <form
        onSubmit={submit}
        className="p-4 border rounded w-50 shadow-sm d-flex flex-column gap-3"
      >
        <h2 className="text-center mb-3">Register</h2>

        <input
          required
          value={form.name}
          name="name"
          placeholder="name"
          onChange={change}
          className="form-control"
        />

        <input
          value={form.email}
          required
          name="email"
          placeholder="email"
          onChange={change}
          className="form-control"
        />

        <input
          value={form.password}
          required
          name="password"
          placeholder="password"
          onChange={change}
          className="form-control"
          type="password"
        />

        <input
          value={form.imageUrl}
          required
          name="imageUrl"
          placeholder="imageUrl"
          onChange={change}
          className="form-control"
        />

        <select
          value={form.role}
          required
          name="role"
          defaultValue="user"
          onChange={change}
          className="form-select"
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>

        {form.role === "admin" && (
          <input
            value={form.adminCode}
            required
            name="adminCode"
            placeholder="admin code"
            onChange={change}
            className="form-control"
          />
        )}

        <button type="submit" className="btn btn-primary w-100">
          register
        </button>
        <p className="text-center mt-2">
          if you have a account, please
          <span
            className="text-primary ms-1"
            role="button"
            onClick={() => nav("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
    </>
  );
};

export default Register;
