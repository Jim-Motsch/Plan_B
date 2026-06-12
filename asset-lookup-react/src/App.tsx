import { useState } from 'react'
import './App.css'

function App() {
  const devices = [
    { id: "511168", name: "John", date: "2023", model: "2120" },
    { id: "511169", name: "Joh", date: "2023", model: "2120" },
    { id: "511170", name: "Jo", date: "2024", model: "2120" },
    { id: "511171", name: "J", date: "2024", model: "2120" },
    { id: "511172", name: "Dan", date: "2024", model: "2120" }
];
    // (state will live here tomorrow — nothing tonight)

    //(event handler function will live here)
    function handleSearch(deviceId: string){
      for (const device of devices) {
        if (deviceId === device.id) {
          return device;
      }
    }
      }
    return (
        <div>
          <label>
            Asset Lookup: <input name="myInput" />
          </label>
          <button type="submit">Search</button>
            {/* a button */}
            {/* a results area */}
        </div>
    );
}

export default App;