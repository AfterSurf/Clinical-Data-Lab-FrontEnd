import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react';

const LoginForm = forwardRef((props, ref: any) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    // useEffect(() => {
    //   ref.current.focus()
    // }, [])
    
    return <>
      <input type="text" value={username} ref={ref} placeholder="Username" onChange={(e) => {
        setUsername(e.target.value)
      }} />
      <input type="password" value={password} placeholder="Password" onChange={(e) => {
        setPassword(e.target.value)
      }} />
      <button onClick={() => {alert("show: " + username + " " + password)}}>Submit</button>
    </>
  })

  export default LoginForm