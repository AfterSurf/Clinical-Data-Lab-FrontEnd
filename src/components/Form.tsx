import React, { useState, useRef, forwardRef, useEffect, createElement } from 'react';

const LoginForm = forwardRef((props, ref: any) => {
  const host = process.env.REACT_APP_HOST

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [app, setApp] = useState(null)

    const handleChange = (e:any) => { setApp(e.target.value)} 
    const post = async() => {

        const requestOptionsGet = {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name: username, description:password})
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/putConsumer`,requestOptionsGet);
      const json = await response.json();
        console.log(json)

    }
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

<input type="checkbox" value="device" id="device"
              onChange={handleChange} name="device" />
            <label htmlFor="device">device</label>

            <input type="checkbox" value="observation" id="observation"
              onChange={handleChange} name="observation"/>
              <label htmlFor="observation">observation</label>
            <input type="checkbox" value="patient" id="patient"
              onChange={handleChange} name="patient"/>
            <label htmlFor="patient">patient</label>
            <input type="checkbox" value="practitioner" id="practitioner"
              onChange={handleChange} name="practitioner"/>
            <label htmlFor="practitioner">practitioner</label>

      <button onClick={() => {post()}}>Submit</button>
    </>
  })

  export default LoginForm