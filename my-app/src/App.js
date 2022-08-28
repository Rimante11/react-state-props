import './App.css';
import { useState } from 'react';
import Profile from './components/Profile';

function App() {
  //skapar data

  let [darkMode, setDarkMode] = useState(false);

  let data = [
    {
      firstName:"Batman",
      lastName:"Matman",
      age: 35,
      hobby:"Save the world"
    },
    {
      firstName:"Totoro",
      lastName:"Neighour",
      age: 169,
      hobby:"To be cute"
    },
    {
      firstName:"Wi",
      lastName:"Fi",
      age: 39,
      hobby:"Be virtual"
    },
    {
      firstName:"Sun",
      lastName:"Moon",
      age: 3000,
      hobby:"Spin around"
    },
    {
      firstName:"Mike",
      lastName:"Nike",
      age: 65,
      hobby:"Do not have any"
    },
  ];

  return (
    <div className={`App ${darkMode ? "darkMode" : null}`}>
      <header className="App-header">
       <h1>Lektion 2</h1>
       <h2>React state and props</h2>
       <button onClick={() => {
          setDarkMode(!darkMode)
        }}
       >
        Dark mode
       </button>
       {
        data.map((eachPerson => {
          return <Profile person={eachPerson}/>
        }))
       }
       
      </header>
    </div>
  );
}

export default App;
