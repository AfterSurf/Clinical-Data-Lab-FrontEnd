// das wird mein consumer

import React, { createContext, useState, FC } from "react";
import { ConsumerContextState } from "./types";

const contextDefaultValues: ConsumerContextState = {
  permissions: [],
  addPermission: () => {}
};

export const ConsumerContext = createContext<ConsumerContextState>(
  contextDefaultValues
);

const ConsumerProvider: FC = ({ children }) => {
  const [permissions, setPermissions] = useState<string[]>(contextDefaultValues.permissions);

  const addPermission = (newTodo: string) => setPermissions((permissions) => permissions);

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

export default ConsumerProvider;