import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
 return (
  <>
 <Navbar/>
    
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712123.png"
            alt="CRUD Logo"
            width="160"
            height="160"
            className="mb-4 rounded-circle shadow"
          />
          <h1 className="display-4 fw-bold mb-3">Simple & Smart CRUD App</h1>
          <p className="lead mb-4">
            Effortlessly Create, View, Update & Manage your records in one place.
          </p>
          <Link to="/login" className="btn btn-light px-4 py-2 fw-semibold shadow">
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">Core Features</h2>
        <div className="row text-center g-4">
          {/* Create */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 py-4 hover-shadow">
              <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" width="65" className="mx-auto mb-3" alt="Create" />
              <h5 className="fw-bold">Create</h5>
              <p className="text-muted small px-2">Add new data with clean and quick forms.</p>
            </div>
          </div>

          {/* Read */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 py-4 hover-shadow">
              <img src="https://cdn-icons-png.flaticon.com/512/709/709624.png" width="65" className="mx-auto mb-3" alt="Read" />
              <h5 className="fw-bold">Read</h5>
              <p className="text-muted small px-2">See and explore your stored records easily.</p>
            </div>
          </div>

          {/* Update */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 py-4 hover-shadow">
              <img src="https://cdn-icons-png.flaticon.com/512/9068/9068647.png" width="65" className="mx-auto mb-3" alt="Update" />
              <h5 className="fw-bold">Update</h5>
              <p className="text-muted small px-2">Edit information anytime with smooth UI.</p>
            </div>
          </div>

          {/* Delete */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 py-4 hover-shadow">
              <img src="https://cdn-icons-png.flaticon.com/512/4211/4211483.png" width="65" className="mx-auto mb-3" alt="Delete" />
              <h5 className="fw-bold">Delete</h5>
              <p className="text-muted small px-2">Remove data securely and instantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        © {new Date().getFullYear()} DHEENA's — CRUD App
      </footer>
    </div>
    </>
  );
}
