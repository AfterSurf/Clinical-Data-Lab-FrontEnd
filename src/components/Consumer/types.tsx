export type ConsumerContextState = {
    permissions: string[];
    addPermission: (name: string) => void;
  };