'use client'
import { useState } from 'react'

export default function App() {
    //1. Retain data between redners
    //2. Trigger React to render the component with new data
    // (state will live here tomorrow — nothing tonight)
    const [query, setQuery] = useState('');
    const[result,setResult] = useState(null)
    //(event handler function will live here)
    async function handleSearch(){
      const response = await fetch(`/api/lookup?tag=${query}`)
      if(response.ok){
        const data = await response.json()
        setResult(data)
      }
      else{
        setResult(null)
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
