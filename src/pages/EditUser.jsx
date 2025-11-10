import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const EditUser = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",

    imageUrl: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await api.get(`/profile/${id}`);
      setForm(res.data);
      console.log(res.data);
    };
    getUser();
  }, [id]);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/${id}`, form);
    nav("/admin");
  };
 return (
  <div className="container d-flex justify-content-center mt-5">
    <form
      onSubmit={submit}
      className="p-4 border rounded w-50 shadow-sm d-flex flex-column gap-3"
    >
      <h3 className="text-center mb-3">Edit User</h3>

      <input
        placeholder="name"
        name="name"
        value={form.name}
        onChange={change}
        className="form-control"
      />

      <input
        placeholder="imageUrl"
        name="imageUrl"
        value={form.imageUrl}
        onChange={change}
        className="form-control"
      />

      <button type="submit" className="btn btn-success w-100">
        Save
      </button>
    </form>
  </div>
);

};

export default EditUser;
