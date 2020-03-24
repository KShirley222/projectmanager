import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default props => {
  const {projectId} = props;
  
  const statusUpdate = e=> {
    e.preventDefault();
    axios.delete('http://localhost:8000/project/' + projectId)
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
      Remove
    </button>
  )
}