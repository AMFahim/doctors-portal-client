import React from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  
  const handleBlur = e =>{
    const newInfo = {...info}
    newInfo[e.target.name] = e.target.value;
    console.log(newInfo);
    setInfo(newInfo)
  }

  const handleFileChange = e =>{
    const newFile = e.target.value[0];
    setFile(newFile)
  }

  const handleSubmit = () => {
    
    const formData = new FormData()
  formData.append('file', file)
  formData.append('name', info.name)
  formData.append('email', info.email)

  fetch('http://localhost:5000/addADoctor', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })

    // const formData = new FormData()
    // formData.append('file', file[0])
    // formData.append('name', info.name)
    // formData.append('email', info.email)

    // fetch('http://localhost:5000/addADoctor', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }

  return (
    <section className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h3 className="text-brand">Add Doctor</h3>
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Name</label>
            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Upload a Image</label>
            <input onChange={handleFileChange} type="file" name="file" className="form-control" placeholder="Upload Image"/>
          </div>
         
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;