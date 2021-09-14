import React, {useState} from 'react'

export const initialAccessState:IAccessState = {
    access: ['Heimmannschaft',"test"],
}

export interface IAccessState {
    access: Array<string>;
}

export interface IAccessContextProps {
    accessState: IAccessState;
    toggleAccess(access:IAccessState): void;
}

export const AccessContext = React.createContext<IAccessContextProps>(null!); 

function AccessContextProvider(props:any) {
    const [accessState, setAccess] = useState(initialAccessState);

    function toggleAccess(input:IAccessState) {
        console.log("setter Aktviert: ", input.access);
        console.log("setter Aktviert: ", JSON.stringify(input));

        console.log("setter Aktviert: ", new Array(input));


        if(input.access) {input.access.map((element:string) => console.log(element)) }
        else {console.log("undefined")}
        
        setAccess( prevAccess => input)
    }

    const accessContextValues = {
        accessState, 
        toggleAccess
      }

      return (
        <AccessContext.Provider value={accessContextValues}>
            {props.children}
        </AccessContext.Provider>
    )
}

export const AccessContextConsumer = AccessContext.Consumer;
export {AccessContextProvider}