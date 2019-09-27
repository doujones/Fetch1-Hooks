import React, {useEffect, useState} from 'react'
import './App.css';

const boswell = {
  name: null,
  company: null
}

function App() {
  const [profile, setProfile] = useState(boswell)

  async function getProfile(){
  const response = await fetch('https://api.github.com/users/doujones')
 const json =  await response.json();

  setProfile({
    name: json.name,
    company:json.company
  })
}

  useEffect(() =>{
    getProfile()
  })
  return (
    <div className="App">
      <h2>Fetch Data</h2>
      <h2>{`name: ${profile.name}, company: ${profile.company} `}</h2>
    </div>
  );
}

export default App;
