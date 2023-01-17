import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUser, setectUsers, select}) => {
const {handleSubmit, register, reset}=useForm()
const emptyUsers = {
    emai:"", 
    password:"",
    first_name:"",
    last_name:"",
    birthday:"",
}

useEffect(() => {
    if (setectUsers) {
        reset(setectUsers)
    } else {
        reset(emptyUsers)
    }
  
  
  }, [setectUsers])




const submit = (data) => {

    if (setectUsers){
        axios.put (`https://users-crud.academlo.tech/users/${data.id}/`, data)
        .then(() => {getUser() 
            select(null)
        })
    }else{
        axios.post ("https://users-crud.academlo.tech/users/", data)
        .then(() => {getUser()
        reset(emptyUsers)})
    } 
    

}

    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" id="first_name" placeholder='Name' {...register("first_name")}/>
                <input type="text" id="last_name"placeholder='Last Name' {...register("last_name")}/>
                <input type="text" id="email" placeholder='email' {...register("email")}/>
                <input type="password" id="password" placeholder='Password' {...register("password")}/>
                <input type="date" id="birthday" {...register("birthday")}/>
                <button>Upload</button>

            </form>
        </div>
    );
};

export default UsersForm;