import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.Auth,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        }).catch((err)=>alert(err))

    }
    const register = ()=>{
       if(!name){
        return alert("Please Enter Name");
       }
       auth.createUserWithEmailAndPassword(email, password).then((userAuth)=>{
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilepic,
        })
        .then(()=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.Auth,
                displayName: name,
                photoURL: profilepic
            }))
        })
       }).catch((err)=>alert(err));
    }
  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
        
        <form>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Full Name" type="text" />
            <input value={profilepic} onChange={(e)=>{setProfilepic(e.target.value)}}placeholder="Profile Pic URL" type="text" />
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" type="email" />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password" />
            <button onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login