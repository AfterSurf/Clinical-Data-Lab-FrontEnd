  interface IAccess {
    access: [String]
  }
  
  type ContextType = {
    access: access[]
    updateAccess: (id: number) => void
  }