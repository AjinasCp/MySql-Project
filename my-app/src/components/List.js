import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const List = () => {
    const [studentData, setStudentData] = useState([])



    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () =>{
        try {
            const result = await axios("http://localhost:3001/users")
            setStudentData(result.data );
        } catch (error) {
            console.log("something wrong");
        }
    }
  return (
    <div className='container'>
        <h3>Student Details</h3>
        <table className='table table-bordered'>
            <thead>
                <tr> 
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CLASS</th>
                    <th>GRADE</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentData.map((student,i) => {
                        return(
                            <tr key={i}>
                                
                                <td>{student.StudentId}</td>
                                <td>{student.StudentName}</td>
                                <td>{student.StudentClass}</td>
                                <td>{student.StudentGrade}</td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default List