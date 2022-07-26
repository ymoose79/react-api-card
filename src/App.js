import React, { useState, useEffect, useRef } from "react"
import StudentCard from "./component/StudentCard"
import SearchBar from "./component/SearchBar"
import { useSelector } from 'react-redux';

function App() {

  const [students, setstudents] = useState([])
  const [studentName, setStudentName] = useState("")
  const firstRenderRef = useRef(true);

  const tagStore = useSelector((state) => state.tags)
  const checkStore = () => console.log(tagStore);


  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    async function fetchData() {
      try {
        const response = await fetch(`https://api.hatchways.io/assessment/students`)
        const data = await response.json(response)
        setstudents(data.students)
      } catch (error) {
        console.error(error)
      };
    };
    fetchData()
    return;
  }, [])

  const handleInputChange = (e) => { setStudentName(e.target.value) }

  return (
    <div className="container bg-light border border-white rounded-3 shadow-lg overflow-scroll" id="container">
      <button onClick={checkStore}>checkStore</button>
      <SearchBar inputInfo={studentName} placeholder='Search by name' handleInputChange={handleInputChange} />
      {/* <SearchBar placeholder="Search by tag" /> */}
      {students.filter((student) => {
        if (studentName === "") {
          return student
        } else if (
          student.firstName.toLowerCase().includes(studentName.toLowerCase())) {
          return student
        }
      }).map((student) => {
        return <StudentCard student={student} key={student.id} />
      })}
    </div >
  );
}

export default App;
