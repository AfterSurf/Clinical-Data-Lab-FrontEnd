import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (e:any) => setTitle(e.target.value);
  const onBodyChange = (e:any) => setBody(e.target.value);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("react - handlesubmit()")
    const data = { title, body };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("http://172.20.10.3:3003/initData", requestOptions)
      .then(response => 
        { console.log("im fetch")
          response.json()})
      .then(res => console.log("response",res));
  };

  return (
      <div className="App">
        <form>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
        </form>
      </div>
  );
}

export default App;