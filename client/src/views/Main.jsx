import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import ProjectTable from '../components/ProjectTable'
import Axios from 'axios';

export default () => {

    const [projects, setProjects] = useState([]);
    const [ loaded, SetLoaded] = useState(false);

  useEffect( () => {
    Axios.get('http://localhost:8000/project')
    .then( res => {
      setProjects(res.data);
      SetLoaded(true);
    })
  })
  return(
  <>
  <div id="main" className="container">
      {loaded &&(
        <ProjectTable/>
        )}
        <br />
        <Link to="/create">
          <button type="button" className="btn btn-secondary">
            Create a Project
          </button>
        </Link>
    </div>
  </>
  )
}