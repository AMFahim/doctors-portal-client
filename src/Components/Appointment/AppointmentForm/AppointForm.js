import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')


const AppointForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    
   data.service = appointmentOn;
   data.date = date;
   data.created = new Date();


    fetch('http://localhost:5000/addAppointment', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:  JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
            if(success){
        closeModal();
        alert('Appointment Created Successfully');
      }
    })

  }; 

  return (
    <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className="text-center text-brand">{appointmentOn}</h2>
         <p> <small className="text-secondary text-center">ON {date.toDateString()}</small></p>
          <form onSubmit={handleSubmit(onSubmit)}>
      <input  className="form-control" placeholder="Your Name" {...register("name")} />
      <br/>
      <input className="form-control" placeholder="Phone Number" {...register("phoneNumber", { required: true })} />
      <br/>
      <input className="form-control" placeholder="Email" {...register("email", { required: true })} />
      <br/>
      <input className="form-control" placeholder="Gender" {...register("gender", { required: true })} />
      <br/>
      <input className="form-control" type="number" placeholder="Age" {...register("age", { required: true })} />
      <br />
      <input className="form-control" type="number" placeholder="Weight" {...register("weight", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <button type="submit" className="btn btn-brand">Send</button>
    </form>
         
        </Modal>
    </div>
  );
};

export default AppointForm;