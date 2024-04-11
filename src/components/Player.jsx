import {useState, useRef} from 'react'


export default function Player() {

  const [playerName, setPlayerName] = useState('')
  //const [isName, setIsName] = useState(false)
  const enteredName = useRef()

  /*function handleNameChange(e){
    setIsName(false)
    setPlayerName(e.target.value)
  }*/

  function handleSetNameClick(){
    //setIsName(true)
    //console.log(enteredName.current)
    setPlayerName(enteredName.current.value)
    enteredName.current.value=''
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={enteredName} type="text" />
        <button onClick={handleSetNameClick}>Set Name</button>
      </p>
    </section>
  );
}
