import Consumer from './components/Consumer/Consumer';
import Choice from "./components/choice";
import {AccessContextProvider} from './context/accesContext'
import './App.css'
require('dotenv').config();

function App() {

  return (
      <div className="App">
        <h1>Clinical Data Lab </h1>
        <AccessContextProvider>
          <Consumer/>
          <div className="showData">
          <Choice/>
          </div>
        </AccessContextProvider>
      </div>
  );
}

export default App;
