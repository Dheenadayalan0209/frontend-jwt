import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    
    <div>
      {/* Navbar */}
      
      

      {/* Hero Section */}
      <div className="bg-light text-center py-5">
        <div className="container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9441/9441387.png"
            alt="CRUD Logo"
            width="150"
            height="150"
            className="mb-3"
          />
          <h1 className="display-5 fw-bold mb-3">Welcome to My CRUD App</h1>
          <p className="lead text-muted mb-4">
            Manage your data easily — Create, Read, Update, and Delete records
            effortlessly with style.
          </p>
          
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          {/* Create */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                  alt="Create icon"
                  width="60"
                  className="mb-3"
                />
                <h5 className="card-title fw-bold">Create</h5>
                <p className="card-text text-muted">
                  Add new records easily using simple, intuitive forms.
                </p>
              </div>
            </div>
          </div>

          {/* Read */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991108.png"
                  alt="Read icon"
                  width="60"
                  className="mb-3"
                />
                <h5 className="card-title fw-bold">Read</h5>
                <p className="card-text text-muted">
                  View all your records clearly with sortable, searchable tables.
                </p>
              </div>
            </div>
          </div>

          {/* Update */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png"
                  alt="Update icon"
                  width="60"
                  className="mb-3"
                />
                <h5 className="card-title fw-bold">Update</h5>
                <p className="card-text text-muted">
                  Edit and modify your records with just a few clicks.
                </p>
              </div>
            </div>
          </div>

          {/* Delete */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
                  alt="Delete icon"
                  width="60"
                  className="mb-3"
                />
                <h5 className="card-title fw-bold">Delete</h5>
                <p className="card-text text-muted">
                  Remove unwanted data securely and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-auto">
        © {new Date().getFullYear()} DHEENA's — CRUD App
      </footer>
    </div>
    </>
  );
}
