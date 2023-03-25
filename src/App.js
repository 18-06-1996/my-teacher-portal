
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AddTeacher } from './Components/AddTeacher';
import { AddUser } from './Components/AddUser';
import { EditTeacher } from './Components/EditTeacher';
import { EditUser } from './Components/EditUser';
import { TeacherComponent } from './Components/TeacherComponents';
import { TeacherDetails } from './Components/TeacherDetails';
import { UserComponent } from './Components/UserComponent';
import { UserDetails } from './Components/UserDetails';
import { BaseApp } from './core/BaseApp';
import { data } from './Data/Data';
import { dataTeacher } from './Data/DataTeacher';

function App() {
  const[user, setUser] = useState(data);

  const [mentor,setMentor] = useState(dataTeacher);

  return (
    <div className="App">
     
     <Switch>

<Route exact path="/">
    <UserComponent
    user = {user}
    setUser = {setUser}
    />
</Route>

<Route  path="/teacher">
    <TeacherComponent
    mentor={mentor}
    setMentor={setMentor}
    />
</Route>

<Route  path="/add/user">
    <AddUser
    user = {user}
    setUser = {setUser}
    />
</Route>

<Route  path="/add/teacher">
    <AddTeacher
   mentor={mentor}
   setMentor={setMentor}
    />
</Route>


<Route  path="/user/:id">
    <UserDetails
    user = {user}
    />
</Route>

<Route  path="/teachers/:id">
    <TeacherDetails
    mentor={mentor}
    
    />
</Route>

<Route  path="/edit/:id">
    <EditUser
    user = {user}
    setUser = {setUser}
    />
</Route>

<Route  path="/editer/:id">
    <EditTeacher
    mentor={mentor}
    setMentor={setMentor}
    />
</Route>


     </Switch>
    
      

    </div>
  );
}

export default App;
