import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("empty")
  const [data, setData] = useState("null");
  const [patientData, setPatientData] = useState("null");

  const onTitleChange = (e:any) => setTitle(e.target.value);
  const onBodyChange = (e:any) => setBody(e.target.value);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("react - handlesubmit()")
    const data = { title, body };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    const response = await fetch("http://172.20.10.3:3003/initData", requestOptions)
    const json = await response.json();
    setMessage(JSON.stringify(json));
    console.log(json);
  };

  const getInitData = async(e:any) => {
      const requestOptionsGet = {
        method: "GET"
      };
      // GET request using fetch with async/await
      const response:any = await fetch('http://172.20.10.3:3003/initData',requestOptionsGet);
      const json = await response.json();
      setData(JSON.stringify(json));
  }

  const getPatientData = async(e:any) => {
      const requestOptionsGet = {
        method: "GET"
      };
      // GET request using fetch with async/await
      const response:any = await fetch('http://172.20.10.3:3003/getPatient',requestOptionsGet);
      const json = await response.json();
      console.log(JSON.stringify(json));
      setPatientData(JSON.stringify(json));
  }
  

  return (
      <div className="App">
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
          <h2>pull PatientData</h2>
          <button type="submit" onClick={getPatientData}>
            getData
          </button>
          <p>{patientData}</p>
        </form>
      </div>
  );
}

export default App;