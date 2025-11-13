import React from 'react'
import Navbar from './Navbar'

const Overview = () => {
  return (
    <>
    <Navbar/>
    <div className="container my-5 p-4 bg-light rounded shadow">
      
      {/* Header Section */}
      <h1 className="text-center text-secondary mb-4 border-bottom pb-2">
        🏗️ Project Overview: Static React CRUD Homepage
      </h1>
      
      <p className="lead text-center mb-5">
        The primary goal of this component is to serve as a highly visual and structured **educational landing page** for the core **CRUD** functionality of the application, built with **minimalism and conceptual clarity** in mind.
      </p>

      {/* --- Key Technologies --- */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <div className="card border-0 bg-white shadow-sm p-3">
            <h2 className="fs-5 fw-bold text-center text-dark mb-3">Key Technologies</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Frontend Framework:</strong> React
              </li>
              <li className="list-group-item">
                <strong>Styling Framework:</strong> Bootstrap 5 (using utility and component classes exclusively)
              </li>
              <li className="list-group-item">
                <strong>Functionality:</strong> Completely Static (No state, no hooks, no API calls)
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr className="my-5" />

      {/* --- Design and Structure --- */}
      <h2 className="fs-4 fw-bold text-dark mb-4">Design and Structure</h2>
      <p>
        The component is entirely contained within a single React functional component and follows a logical structure:
      </p>

      <div className="card-group mb-4">
        {/* Structure Card 1: Header/Intro */}
        <div className="card border-primary mb-3">
          <div className="card-header bg-primary text-white fw-bold">1. Header & Introduction</div>
          <div className="card-body">
            <p className="card-text">
              A clear, central title and a brief paragraph defining the purpose and importance of the **CRUD** paradigm.
            </p>
          </div>
        </div>

        {/* Structure Card 2: CRUD Grid */}
        <div className="card border-success mb-3">
          <div className="card-header bg-success text-white fw-bold">2. The CRUD Grid</div>
          <div className="card-body">
            <p className="card-text">
              The core section, using the **Bootstrap grid system** (<code>.row-cols-lg-4</code>) to display four distinct cards:
            </p>
            <ul>
                <li><strong>C - Create:</strong> <span className="text-primary">Primary (Blue)</span></li>
                <li><strong>R - Read:</strong> <span className="text-success">Success (Green)</span></li>
                <li><strong>U - Update:</strong> <span className="text-warning">Warning (Yellow)</span></li>
                <li><strong>D - Delete:</strong> <span className="text-danger">Danger (Red)</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary text-white fw-bold">3. No Functionality & Footer</div>
          <div className="card-body">
            <p className="card-text">
              The component contains **no React Hooks** (like <code>useState</code> or <code>useEffect</code>) to ensure it is completely static. A clear disclaimer confirms it is for **display only**.
            </p>
          </div>
        </div>
        
      {/* --- Next Step Integration --- */}
      <h2 className="fs-4 fw-bold text-dark mb-3">Next Step Integration</h2>
      <p className="text-muted">
        This static homepage acts as a perfect hub. The static link placeholders (e.g., to <code>/create</code>, <code>/list</code>) are ready to be connected to future, functional React components (like a form or table) that would be managed by your application's routing library (e.g., **React Router**).
      </p>

    </div>
    </>
  )
}

export default Overview