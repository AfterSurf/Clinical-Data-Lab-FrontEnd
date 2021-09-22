import React, {useState} from 'react'

export const initialAccessState:IAccessState = {
    access: [""]
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
    const [accessState, setAccessState] = useState(initialAccessState);

    function toggleAccess(input:IAccessState) {
        if(input.access) {input.access.map((element:string) => console.log("context: ",element)) }        
        setAccessState(input)
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