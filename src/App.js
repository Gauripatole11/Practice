import {useState, useEffect} from "react";
import './App.css';

function App() {
  
  const[temp, setTemp] = useState(0)

  const URL ="https://openweathermap.org/"

  useEffect(() =>{

          const fetchData = async()=> {
            const result = await fetch(URL)
            result.json().then(json=> {
              setTemp(json.current.temp_f)
            })
          }
          fetchData();
        }, []);

  return (
    <div className="App">
      <header className="App-header">
        India Weather now: {temp}F
        
      </header>
    </div>
  );
}

export default App;
