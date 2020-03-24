import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default props => {
  const {projectId} = props;
  const [projectStatus, setProjectStatus ] = useState("3");
  
  const statusUpdate = e=> {
    e.preventDefault();
    axios.put('http://localhost:8000/project/' + projectId, {
      projectStatus
    })
      .then(res => {
        console.log(res.data);
        props.onUpdate();
      })
      .catch( err => console.log(err))
  }

  return ( 
    <button onClick={statusUpdate}
    type="button" className="btn btn-dark"
    >
      Complete
    </button>
  )
}