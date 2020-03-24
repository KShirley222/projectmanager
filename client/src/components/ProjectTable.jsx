import React, { useState, useEffect} from 'react';
import axios from 'axios';
import InProgBtn from'../components/InProgBtn';
import CompleteBtn from '../components/CompleteBtn';
import RemoveBtn from '../components/RemoveBtn';
import moment from 'moment';


export default props => {
  const [ projects, setProjects ] = useState([]);

  const fetchProjects = () => {
    axios.get('http://localhost:8000/project')
      .then( res => setProjects(res.data))
      .catch( err => console.log(err))
    }
    useEffect( () => {
      fetchProjects();
  }, [])

  function isPast(date) {
    return new Date(date) < new Date( new Date().toDateString() );
  }

  return (
    <>
    <div className="row" id="tblRow" >
      <div className = "col-sm tblCol col1" >
        <h5 className="col1" >Get Started</h5>
      {projects.filter(projects => projects.projectStatus === "1").map((projects, i) => 
        <div className="card allCard" key = {i} >
          <div className="card-body allCard">
            <h5 className="card-title allCard">{projects.projectTitle}</h5>
            {isPast(projects.dueDate) ? 
            <p style={{color:"red"}} className ="allCard">{moment(projects.dueDate).format("MM-DD-YYYY")}</p> :
            <p className ="allCard">{moment(projects.dueDate).format("MM-DD-YYYY")}</p> 
            }
            <InProgBtn
            projectId={projects._id}
            onUpdate = {fetchProjects}
            />
          </div>
        </div>
      )}  
      </div>
      <div className = "col-sm tblCol col2" >
        <h5 className="col2">In Progress</h5>
      {projects.filter(projects => projects.projectStatus === "2").map((projects, i) => 
        <div className="card allCard" key = {i} >
          <div className="card-body allCard">
            <h5 className="card-title allCard">{projects.projectTitle}</h5>
            {isPast(projects.dueDate) ? 
            <p style={{color:"red"}} className ="allCard">{moment(projects.dueDate).format("MM-DD-YYYY")}</p> :
            <p className ="allCard">{moment(projects.dueDate).format("MM-DD-YYYY")}</p> 
            }
            <CompleteBtn
            projectId={projects._id}
            onUpdate = {fetchProjects}
            />
          </div>
        </div>
      )}  
      </div>
      <div className = "col-sm tblCol col3" >
        <h5 className= "col3">Completed</h5>
        {projects.filter(projects => projects.projectStatus === "3").map((projects, i) => 
          <div className="card allCard" key = {i} >
            <div className="card-body allCard">
              <h5 className="card-title allCard">{projects.projectTitle}</h5>
              {isPast(projects.dueDate) ? 
                <p style={{color:"red"}} className ="allCard">{moment(projects.dueDate).format("MM-DD-YYYY")}</p> :
                 <p className ="allCard">{moment(projects.dueDate).format("MM-DD-YYYY")}</p> 
              }
              <RemoveBtn
            projectId={projects._id}
            onUpdate = {fetchProjects}
            />
            </div>
          </div>
        )}   
      </div>
    </div>
    </>
  )
}





















