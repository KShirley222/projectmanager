import React, { useState, useEffect } from  'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const [ projectTitle, setProjectTitle ] = useState("");
    const [ dueDate, setDueDate ] = useState();
    // Project dude date data type??
    const [ projectStatus, setProjectStatus] = useState("1");
    const [ errors, setErrors ] = useState({});


    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/project', {
            projectTitle,
            dueDate,
            projectStatus
        })
            .then( res => {
                if(res.data.errors){
                    console.log(res.data.errors);
                    setErrors(res.data.errors);
                }
                else{
                    console.log(res.data)
                  navigate('/');
                }
            })
            .catch(err => console.log(err))
    }
    return ( 
        <>
        <form onSubmit = {submitHandler}>
          <label>Project Title: </label>
          <input 
            type="text" 
            className="form-control"
            name ="projectTitle"
            onChange = { (e) => setProjectTitle(e.target.value)}
            required
          />
          <p>{errors.projectTitle ? errors.projectTitle.message : ""}</p>
          <label>Due Date:</label>
          <input 
            type="date" 
            className="form-control"
            name = "dueDate"
            onChange = { (e) => setDueDate(e.target.value)}
            required
          />
          <p>{errors.dueDate ? errors.dueDate.message : ""}</p>
          <input
            type="submit"
            className="btn btn-primary"
          />
        </form>
        </>
    )
}