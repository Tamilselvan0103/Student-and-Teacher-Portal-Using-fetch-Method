import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Create from "./Component/Create";
import { Read } from "./Component/Read";
import { EditStudent } from "./Component/Update";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import StudentProfile from "./Component/profile";
import { Home } from "./Component/Home";
import TeacherCreating from "./TeacherComponent/TeacherCreating";
import TeacherEditing from "./TeacherComponent/TeacherEditing";
import TeacherReading from "./TeacherComponent/TeacherReading";
import TeacherProfile from "./TeacherComponent/TeacherProfile";

function App() {

  const [Studentdata, setStudentdata] = useState([]);
  const[TeacherData, setTeacherdata] = useState([]);
useEffect(()=>{

const getstudendent = async ()=>{
  try {
    const response = await fetch("https://63ae5bbdceaabafcf1782371.mockapi.io/student",{
      method:"GET"
    });
    const data = await response.json();
    setStudentdata(data)
    const response1 = await fetch("https://63ae5bbdceaabafcf1782371.mockapi.io/Teacher",{
      method:"GET"
    });
    const TeacherData1 = await response1.json()
    setTeacherdata(TeacherData1)
  } catch (error) {
    console.log(error);
  }
}
getstudendent()


},[])





  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Read setStudentdata={setStudentdata} studentdata={Studentdata} />
        </Route>

        <Route path="/create-user">
          <Create setStudentdata={setStudentdata} studentdata={Studentdata} />
        </Route>

        <Route path="/edit-user/:id">
          <EditStudent
            setStudentdata={setStudentdata}
            studentdata={Studentdata}
          />
        </Route>
        <Route path="/profile/:id">
          <StudentProfile
            setStudentdata={setStudentdata}
            studentdata={Studentdata}
          />
        </Route>
        <Route path="/edit-profile/:id">
          <EditStudent
            setStudentdata={setStudentdata}
            studentdata={Studentdata}
          />
        </Route>
        <Route path = "/create-teacher">
           <TeacherCreating TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata} />
        </Route>
        <Route path = "/teacher-user">
            <TeacherReading TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata}/>
        </Route>
        <Route path="/teacher-profile/:id">
          <TeacherProfile
           TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata}/>
        </Route>
        <Route path="/edit-teacher-user/:id">
            <TeacherEditing TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata}/>
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
