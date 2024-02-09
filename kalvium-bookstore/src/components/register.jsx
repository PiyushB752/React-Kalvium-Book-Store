import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './register.css'
import { useNavigate } from 'react-router-dom';

function register() {
  const { register, handleSubmit, formState: { errors },getValues } = useForm();
  const [Registration,setregistration] = useState(false)
  const navigate = useNavigate()
  const Submit=()=>{
    setregistration(true)
    setTimeout(()=>{
      navigate("/")
    },1000)
  }
  return (
    <div className="App">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(Submit)}>
        <br />
      {Registration && <h2 className='Registration'>Registration Successful</h2>}
        <input type="text"  placeholder='Your Name' {...register("Name",{required:'Name is required',minLength:{value:3,message:'Name should have aleast 3 characters'},maxLength:{value:30,message:'Name should not have more than 30 characters'}})}/>
        {errors.Name && <p className='error'>{errors.Name.message}</p>}
        <input type="text"  placeholder='Email' {...register('Email', {required: 'Email is required',pattern: {value: /\S+@\S+\.\S+/,message:'Invalid email address'}})}/>
        {errors.Email && <p className='error'>{errors.Email.message}</p>}
        <input type="password" placeholder='Password' {...register("Password", {required: "Password is Required",minLength:{value:10,message:"Password should have atleast 10 characters"},pattern:{value:/^(?=.*[!@#$%^&*])[\w!@#$%^&*]{10,}$/ ,message:"Password should have atleast 1 special character"}})}/>
        {errors.Password && <p className='error'>{errors.Password.message}</p>}
        <input type="password"  placeholder='Repeat Password' {...register("RepeatPassword", {required: "Repeat Password is Required",validate:(val)=>val===getValues('Password')||"Password does not match"})}/>
        {errors.RepeatPassword && <p className='error'>{errors.RepeatPassword.message}</p>}
        <br />
        <button type='submit' className='regButton' disabled={Registration}>Sign up</button>
        <br />
      </form>
    </div>
  )
}

export default register
