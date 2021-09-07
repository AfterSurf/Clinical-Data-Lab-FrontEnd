import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react';

const LoginForm = forwardRef((props, ref: any) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [app, setApp] = useState(null)

    const handleChange = (e:any) => { setApp(e.target.value)} 
    
    // useEffect(() => {
    //   ref.current.focus()
    // }, [])
    
    return <>
      <input type="text" value={username} placeholder="Username" onChange={(e) => {
        setUsername(e.target.value)
      }} />
      <input type="password" value={password} placeholder="Password" onChange={(e) => {
        setPassword(e.target.value)
      }} />

<input type="radio" value="male" id="male"
              onChange={handleChange} name="gender" />
            <label htmlFor="male">Male</label>

            <input type="radio" value="female" id="female"
              onChange={handleChange} name="gender"/>
            <label htmlFor="female">Female</label>

      <button onClick={() => {alert("show: " + username + " " + password + " " + app)}}>Submit</button>
    </>
  })

  export default LoginForm