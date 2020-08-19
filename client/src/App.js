import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Client from './component/Client'
import formSchema from './Validation/formSchema'
import Form from './component/Form';
import * as yup from 'yup';

const initialFormValues={
  firstname: '',
  lastname:'',
  email:'',
  // dropdown
  role:'',
}
const initialFormErrors ={
  firstname: '',
  lastname:'',
  email:'',
  role:'',
}
const initialClients =[]
const initialDisabled =true

function App() {
  const [clients, setClients] = useState(initialClients)
  const [formValues, setFormvalues] =useState(initialFormValues)
  const [formErrors, setFormErrors] =useState(initialFormErrors)
  const [disabled, setDisabled] =useState(initialDisabled)

  const getClients = () =>{
    axios.get('https://reqres.in/api/users')
    .then(res=>{
      setClients(res.data.data)
      
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const postNewClient = newClient =>{
    axios.post('https://reqres.in/api/users', newClient)
    .then(res=>{
      setClients([...clients, res.data])
    })
    .catch(err =>{
      console.log(err)
    })
    .finally(()=>{
      setFormvalues(initialFormValues)
    })
  }
  // FORM ACTIONS//
  const inputChange =(name,value)=>{
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid=>{
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })

    .catch(err=>{
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    
    setFormvalues({
      ...formValues,
      [name]:value,
    })
  }
  //maybe a checkbox//

  //submit//
  const submit = () =>{
    const newClient ={
      first_name: formValues.firstname,
      last_name: formValues.lastname,
      email: formValues.email,
      role: formValues.role,
    }
    postNewClient(newClient)
  }
  useEffect(()=>{
    getClients()
  },[])

  useEffect(()=>{
   console.log(clients) 
  },[clients])

  useEffect(()=>{
    formSchema.isValid(formValues)
    .then(valid=>{
      setDisabled(!valid);
    })
  },[formValues])

  return (
    <div className="App">
      <header className="App-header"><h1>My Client Tracker</h1></header>

      <Form
        values={formValues}
        inputChange={inputChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
        />

  {/* {
    clients && clients.map(client=>{
      return(
        <Client key={client.id} details={client}/>
      )
    })
  } */}
        {
          clients.map(client=>{
            return(
              <Client key={client.id} details={client}/>
            )
          })
        }
    </div>
  );
}

export default App;
