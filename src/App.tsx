import React, { useState } from "react";
import './App.css'
import Device from "./components/Device";
import Observation from "./components/Observation";
import Patient from "./components/Patient";
import Practitioner from "./components/Practitioner";
import LogInForm from "./components/Form";
import Consumer from './components/Consumer/Consumer';

import {AccessContextProvider} from './Context/accesContext'

require('dotenv').config();


function App() {

  const host = process.env.REACT_APP_HOST

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("empty")
  const [data, setData] = useState("null");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("react - handlesubmit()")
    const data = { title, body };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    const response = await fetch(`http://${host}:3003/initObservation`, requestOptions)
    const json = await response.json();
    setMessage(JSON.stringify(json));
  };

  const getInitData = async(e:any) => {
      const requestOptionsGet = {
        method: "GET"
      };
      // GET request using fetch with async/await
      const response:any = await fetch('http://192.168.178.33:3003/initData',requestOptionsGet);
      const json = await response.json();
      setData(JSON.stringify(json));
  }


  

  return (


      <div className="App">
        <h1>Clinical Data Lab </h1>
          <button type="submit" onClick={handleSubmit}>
            pull data
          </button>

        <AccessContextProvider>
          <Consumer/>
          <div className="showData">
            <Device/>
            {/* <Observation/>
            <Patient/>
            <Practitioner/> */}
          </div>
        </AccessContextProvider>
        <LogInForm/>
      </div>
  );
}

export default App;


/*

        <form>
          <h2>push Data</h2>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
          <p>{message}</p>

          <h2>pull Data</h2>
          <button type="submit" onClick={getInitData}>
            getData
          </button>
          <p>{data}</p>
        </form>

*/