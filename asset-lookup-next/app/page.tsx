// 'use client'
// import { useState } from 'react'

// export default function App() {
//     //1. Retain data between redners
//     //2. Trigger React to render the component with new data
//     // (state will live here tomorrow — nothing tonight)
//     const [query, setQuery] = useState('');
//     const[result,setResult] = useState(null)
//     //(event handler function will live here)
//     async function handleSearch(){
//       const response = await fetch(`/api/lookup?tag=${query}`)
//       if(response.ok){
//         const data = await response.json()
//         setResult(data)
//       }
//       else{
//         setResult(null)
//       }
//       }
//     return (
//         <div>
//           <label>
//             Asset Lookup: <input name="myInput" onChange={e=>setQuery(e.target.value)} />
//           </label>
//           <button onClick={handleSearch}>Search</button>
//           {result && <h1>{result.assetTag} - {result.name} - {result.purchaseDate} - {result.model}</h1>}
//           {/* a results area */}
//         </div>
//     );
// }
'use client'
import { useState } from 'react'

export default function App() {
    //1. Retain data between redners
    //2. Trigger React to render the component with new data
    // (state will live here tomorrow — nothing tonight)
    const [query, setQuery] = useState('');
    const[result,setResult] = useState(null)
    const [searched, setSearched] = useState(false)  // has a search run yet?
    //(event handler function will live here)
    async function handleSearch(){
      const response = await fetch(`/api/lookup?tag=${query}`)
      setSearched(true)
      if(response.ok){
        const data = await response.json()
        setResult(data)
      }
      else{
        setResult(null)
      }
      }
    return (
        <>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');

            .al-root {
              --ink: #14171a;
              --paper: #f5f3ee;
              --line: #d8d4c8;
              --accent: #d4502a;
              --muted: #6b6256;
              --field: #fcfbf8;
              min-height: 100vh;
              background:
                repeating-linear-gradient(90deg, transparent 0 39px, rgba(0,0,0,0.015) 39px 40px),
                var(--paper);
              font-family: 'Inter', sans-serif;
              color: var(--ink);
              display: flex;
              align-items: flex-start;
              justify-content: center;
              padding: 64px 24px;
              box-sizing: border-box;
            }
            .al-card { width: 100%; max-width: 540px; }
            .al-eyebrow {
              font-family: 'IBM Plex Mono', monospace;
              font-size: 11px;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: var(--muted);
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 14px;
            }
            .al-eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--line); }

            .al-label {
              display: block;
              font-family: 'IBM Plex Mono', monospace;
              font-size: 11px;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: var(--muted);
              margin-bottom: 10px;
            }
            .al-search {
              display: flex;
              border: 1.5px solid var(--ink);
              background: var(--field);
              transition: box-shadow 0.15s ease;
            }
            .al-search:focus-within { box-shadow: 4px 4px 0 var(--ink); }
            .al-search input {
              flex: 1;
              border: none;
              background: transparent;
              padding: 16px 18px;
              font-family: 'IBM Plex Mono', monospace;
              font-size: 15px;
              color: var(--ink);
              outline: none;
            }
            .al-search input::placeholder { color: #b4ac9d; }
            .al-search button {
              border: none;
              border-left: 1.5px solid var(--ink);
              background: var(--accent);
              color: #fff;
              font-family: 'IBM Plex Mono', monospace;
              font-size: 13px;
              font-weight: 600;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              padding: 0 26px;
              cursor: pointer;
              transition: background 0.15s ease;
            }
            .al-search button:hover { background: #b8421f; }
            .al-search button:active { background: #9c3819; }

            .al-result {
              margin-top: 22px;
              border: 1.5px solid var(--ink);
              background: var(--field);
              padding: 18px 20px;
              font-family: 'IBM Plex Mono', monospace;
              font-size: 16px;
              font-weight: 500;
              letter-spacing: 0.02em;
              line-height: 1.5;
              animation: al-in 0.25s ease;
            }
            .al-empty {
              margin-top: 22px;
              border: 1.5px dashed var(--line);
              padding: 18px 20px;
              font-family: 'IBM Plex Mono', monospace;
              font-size: 13px;
              color: var(--muted);
              animation: al-in 0.25s ease;
            }
            .al-empty strong { color: var(--accent); font-weight: 600; }
            @keyframes al-in {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              .al-result, .al-empty { animation: none; }
              .al-search { transition: none; }
            }
          `}</style>

          <div className="al-root">
            <div className="al-card">
              <div className="al-eyebrow">Inventory Registry</div>
              <label className="al-label">Asset Lookup</label>
              <div className="al-search">
                <input name="myInput" placeholder="Enter asset tag…" onChange={e=>setQuery(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
              </div>
              {result && (
              <div className="al-result">
                  <div className="al-row"><span className="al-key">Asset: </span><span className="al-val">{result.assetTag}</span></div>
                  <div className="al-row"><span className="al-key">Name:      </span><span className="al-val">{result.name}</span></div>
                  <div className="al-row"><span className="al-key">Model:     </span><span className="al-val">{result.model}</span></div>
                  <div className="al-row"><span className="al-key">Year:      </span><span className="al-val">{result.purchaseDate}</span></div>
                </div>
              )}
              {searched && !result && <p className="al-empty">Not found in database.</p>}
              {/* a results area */}
            </div>
          </div>
        </>
    );
}