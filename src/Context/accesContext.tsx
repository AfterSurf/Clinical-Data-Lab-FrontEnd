import React, {useState} from 'react'

export const initialAccessState:IAccessState = {
    acces: ['Heimmannschaft'],
}

export interface IAccessState {
    acces: [string];
}

export interface IAccessContextProps {
    accessState: IAccessState;
    toggleAccess(access:IAccessState): void;
}

export const AccessContext = React.createContext<IAccessContextProps>(null!); 

function AccessContextProvider(props:any) {
    const [accessState, setAccess] = useState(initialAccessState);

    function toggleAccess(access:IAccessState) {
        console.log("setter Aktviert");
        setAccess( prevAccess => access)
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