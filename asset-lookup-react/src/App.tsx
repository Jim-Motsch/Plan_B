import { useState } from 'react'
import './App.css'

export default function App() {
  const devices = [
    { id: "511168", name: "John", date: "2023", model: "2120" },
    { id: "511169", name: "Joh", date: "2023", model: "2120" },
    { id: "511170", name: "Jo", date: "2024", model: "2120" },
    { id: "511171", name: "J", date: "2024", model: "2120" },
    { id: "511172", name: "Dan", date: "2024", model: "2120" }
];
    //1. Retain data between redners
    //2. Trigger React to render the component with new data
    // (state will live here tomorrow — nothing tonight)
    const [query, setQuery] = useState('');
    const[result,setResult] = useState(null)
    //(event handler function will live here)
    function handleSearch(/*deviceId: string*/){
      for (const device of devices) {
        if (query === device.id) {
          setResult(device);
      }
    }
      }
    return (
        <div>
          <label>
            Asset Lookup: <input name="myInput" onChange={e=>setQuery(e.target.value)} />
          </label>
          <button onClick={handleSearch}>Search</button>
          {result && <h1>{result.id} - {result.name} - {result.date} - {result.model}</h1>}
          {/* a results area */}
        </div>
    );
}
