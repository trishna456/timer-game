import {useState} from 'react'

export default function Player() {

  const [playerName, setPlayerName] = useState('')
  const [isName, setIsName] = useState(false)

  function handleNameChange(e){
    setIsName(false)
    setPlayerName(e.target.value)
  }

  function handleSetNameClick(){
    setIsName(true)
  }

  return (
    <section id="player">
      <h2>Welcome {isName? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleNameChange} />
        <button onClick={handleSetNameClick}>Set Name</button>
      </p>
    </section>
  );
}
