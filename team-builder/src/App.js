import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form'
import TeamMember from './Components/TeamMember'

const initialTeamMemberList = [
  {
    id: 1,
    name: 'Pedro',
    email: '98pedrocasuso@gmail.com',
    role: 'Student',
  },
  {
    id: 2,
    name: 'John',
    email: 'johnsmith@gmail.com',
    role: 'front-end',
  },
  {
    id: 3,
    name: 'Bob',
    email: 'bob@gmail.com',
    role: 'back-end',
  }
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
const [teamMembers, setTeamMembers] = useState(initialTeamMemberList)
const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue}, )
}

const submitForm = () => {
  const teamMember = {
    id: Date.now(),
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  }
  setTeamMembers([...teamMembers, teamMember])
}

  return (
    <div>
      <h1>Team Builder</h1>
      <Form values={formValues} update={updateForm} submit={submitForm}/>

      {teamMembers.map(teamMember => {
        return (
          <TeamMember key={teamMember.id} details={teamMember} />
        )
      })
    }
    </div>  
  );
}

export default App;
