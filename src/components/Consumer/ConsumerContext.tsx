// das wird mein consumer

import React, { createContext, useState, FC, Component } from "react";
import { ConsumerContextState } from "./types";

export const contextDefaultValues: ConsumerContextState = {
  permissions: [],
  addPermission: () => {}
};

export const ConsumerContext = createContext<ConsumerContextState>(
   contextDefaultValues
);

const ConsumerProvider: FC  = ({ children }) => {
  const [permissions, setPermissions] = useState<string[]>(contextDefaultValues.permissions);

  const addPermission = (permissions: string) => setPermissions((permissions) => permissions);

  return (
    <ConsumerContext.Provider
      value={{
        permissions, addPermission
      }}
    >
      {children}
    </ConsumerContext.Provider>
  );
};

export const ConsumerContextconsumer: any = (props: any) => {

    return (
       <ConsumerContext.Consumer>
        {(theme) => <Component {...props} theme={theme} />}
      </ConsumerContext.Consumer>
    );
  };

export default ConsumerProvider;