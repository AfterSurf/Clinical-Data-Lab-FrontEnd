  interface IAccess {
    access: [String]
  }
  
  type ContextType = {
    access: access[]
    saveAccess: (todo: ITodo) => void
    updateAccess: (id: number) => void
  }