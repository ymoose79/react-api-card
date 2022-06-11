import React, { useState, useEffect } from "react"
// import SearchBar from "./component/SearchBar"
import StudentCard from "./component/StudentCard"
import "./component/CSS/app.css"

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
    <div className="container my-5 bg-light rounded-2 shadow-lg" style={{ maxWidth: "640px" }} id="container">
      <div className="row justify-content-center">
        <div className="col bg-light border-bottom" style={{ maxWidth: "640px" }}>
          <div className="form-floating">
            <div className="input-group my-1 border-botom" >
              <input type="text" className="form-control-plaintext" placeholder='Search by name' value={studentName} onChange={handleInputChange} />
            </div>
          </div>
        </div>
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
