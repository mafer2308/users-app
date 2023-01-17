import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import UsersForm from './component/UsersForm'
import UsersList from './component/UsersList'

function App() {
  const [users, setUsers] = useState([])
useEffect(() => {
  axios.get("https://users-crud.academlo.tech/users/")
  .then((res) => setUsers(res.data) )


}, [])
const getUser = ()=>{
  axios.get("https://users-crud.academlo.tech/users/")
  .then((res) => setUsers(res.data) )
}
    console.log(users)  
    const [setectUsers, setSelectUsers] = useState(null)
    const select = (dataUsers) =>{
      setSelectUsers(dataUsers)
    }

  return (
    <div className="App">
      <UsersForm getUser = {getUser} setectUsers ={setectUsers} select = {select}/>
      <UsersList users ={users} select = {select} getUser = {getUser}/> 

    </div>
  )
}

export default App
