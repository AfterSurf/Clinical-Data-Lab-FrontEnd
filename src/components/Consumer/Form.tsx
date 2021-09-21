import { useState, forwardRef } from 'react';

const LoginForm = forwardRef((props:any, ref:any) => {
    const host = process.env.REACT_APP_HOST 


    // checkboxes
    const [checkedState, setCheckedState] = useState(
      new Array(4).fill(false)
  );

  const handleOnChange = (position:number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

// generate permissionArray: 
let permissions:Array<string> = [];
    let setPermissions = (inputArray: Array<boolean>) => {
      if(inputArray[0] === true){permissions.push("device")}
      if(inputArray[1] === true){permissions.push("observation")}
      if(inputArray[2] === true){permissions.push("patient")}
      if(inputArray[3] === true){permissions.push("practitioner")}
      console.log("permission: "+ permissions);
      return permissions;
    }


    const [name, setName] = useState('')

    const post = async() => {
        setPermissions(checkedState);
        const requestOptionsGet = {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name:name,permissions: permissions})
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/putConsumer`,requestOptionsGet);
      const json = await response.json();
      console.log(json)
    }
    
    return (<> {props.text}
      <br/>
      <br/>
      <input type="text" value={name} placeholder="Username" onChange={(e) => {
        setName(e.target.value)
      }} />

            <input type="checkbox" id={`custom-checkbox-0`} name={"device"} value={"device"} checked={checkedState[0]}
              onChange={() => handleOnChange(0)}/>
            <label htmlFor="device">device</label>

            <input type="checkbox" id={`custom-checkbox-1`} name={"observation"} value={"observation"} checked={checkedState[1]}
              onChange={() => handleOnChange(1)}/>
              <label htmlFor="observation">observation</label>

              <input type="checkbox" id={`custom-checkbox-2`} name={"patient"} value={"patient"} checked={checkedState[2]}
              onChange={() => handleOnChange(2)}/>
            <label htmlFor="patient">patient</label>

            <input type="checkbox" id={`custom-checkbox-3`} name={"practitioner"} value={"practitioner"} checked={checkedState[3]}
              onChange={() => handleOnChange(3)}/>
            <label htmlFor="practitioner">practitioner</label>

            <button onClick={() => ( post())}>getPermissions</button>
    </>)
  })

  export default LoginForm