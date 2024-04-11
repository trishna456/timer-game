import { useState, useRef } from "react"
import ResultModal from "./ResultModal"


 // let timer; //cannot use variable here bcz it will be shared across all the different component instances

export default function TimerChallenge({title, targetTime}){

    //const [timerStarted, setTimerStarted] = useState(false)
    //const [timerExpired, setTimerExpired] = useState(false)

    const timer = useRef() //like state, this calue will not be lost when the component reexecutes
    const dialog = useRef()

     // let timer; //cannot use variable here bcz it will get reassgined everytime the component reloads after state change

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if(timeRemaining <= 0){
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart(){
        //setTimerStarted(true)

        /*timer.current = setTimeout(()=>{
            setTimerExpired(true)
            dialog.current.open()
        }, targetTime*1000)*/

        timer.current = setInterval(()=>{ 
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10) //will keep repeating after every 10ms

    }

    function handleStop(){
        //need access to the same started timer inside this function
        //clearTimeout(timer.current)
        dialog.current.open()
        clearInterval(timer.current)
    }
    
    return(
        <>
        {<ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}></ResultModal>}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive? handleStop : handleStart}>
                        {timerIsActive? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive? 'Time is running...' : 'Time is inactive...' }
                </p>
            </section>
        </>
    )
}