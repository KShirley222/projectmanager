import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProjectForm from './views/ProjectForm';
import './App.css'

function App() {
  return (
    <div className="container-fluid" id="full">
      <div>
        <h1>Project Manager</h1>
        <Router>
          <ProjectForm path = '/create'/>
          <Main path ='/'/>
        </Router>
      </div>
    </div>
  );
}

export default App;
