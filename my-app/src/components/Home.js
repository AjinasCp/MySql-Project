import React, { useState } from 'react'
import List from './List'
import axios from 'axios'

const Home = () => {

  const [studentField,setStudentField] = useState({
    StudentId:"",
    StudentName:"",
    StudentClass:"",
    StudentGrade:"",
  })

  const changeUserHandler = (e) => {
    setStudentField({
      ...studentField,
      [e.target.name]:e.target.value
    });

  };

  const [loading,setLoading] = useState()
 
  const onsubmitChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/create",studentField)
      console.log(response);
      setLoading(true);
      
    } catch (error) {
      console.log("something Wrong",error);
    }
  };

  if(loading){
    return( 
      <Home/>
    )
  }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <h3>Add Details</h3>
                <form>
 <div className='mb-3 mt-3'>
  <label className='form-label'>StudentId</label>
  <input type='number' className='form-control' id='StudentId' placeholder='enter StudentId' name='StudentId' onChange={e => changeUserHandler(e)}/>
 </div>
 <div className='mb-3 mt-3'>
  <label className='form-label'>Student Name</label>
  <input type='text' className='form-control' id='StudentName' placeholder='enter Student Name' name='StudentName' onChange={e => changeUserHandler(e)}/>
 </div>
 <div className='mb-3 mt-3'>
  <label className='form-label'>Student Class</label>
  <input type='number' className='form-control' id='StudentClass' placeholder='enter Student Class' name='StudentClass' onChange={e => changeUserHandler(e)}/>
 </div>
 <div className='mb-3 mt-3'>
  <label className='form-label'>Student Grade</label>
  <input type='text' className='form-control' id='StudentGrade' placeholder='enter Student Grade' name='StudentGrade' onChange={e => changeUserHandler(e)}/>
 </div>
  <button type="submit" class="btn btn-primary" onClick={e => onsubmitChange(e)}>Submit</button>
</form>
            </div>
            <div className='col-md-8'>
                <List/>
            </div>
        </div>
    </div>
  )
}

export default Home 