import React, { useState, useEffect } from "react"
// import SearchBar from "./component/SearchBar"
import StudentCard from "./component/StudentCard"

function App() {

  const [students, setstudents] = useState([])
  const [studentName, setStudentName] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.hatchways.io/assessment/students`)
      const data = await response.json(response)
      setstudents(data.students)
    }
    fetchData();
    return;
  }, [])

  const handleInputChange = (e) => { setStudentName(e.target.value) }

  return (
    <div className="container-md my-5">
      <div className="input-group">
        <input type="text" className="form-control" placeholder='Search by name' value={studentName} onChange={handleInputChange} />
      </div>
      {students.filter((student) => {
        if (studentName === "") {
          return student
        } else if (
          student.firstName.toLowerCase().includes(studentName.toLowerCase())) {
          return student
        }
      }).map((student, i) => {
        return <StudentCard student={student} key={i} />
      })}
    </div >
  );
}

export default App;
