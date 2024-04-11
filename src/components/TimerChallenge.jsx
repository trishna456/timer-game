import { useState, useRef } from "react"
import ResultModal from "./ResultModal"


 // let timer; //cannot use variable here bcz it will be shared across all the different component instances

export default function TimerChallenge({title, targetTime}){

    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const timer = useRef() //like state, this calue will not be lost when the component reexecutes
    const dialog = useRef()

    // let timer; //cannot use variable here bcz it will get reassgined everytime the component reloads after state change

    function handleStart(){
        setTimerStarted(true)
        timer.current = setTimeout(()=>{
            setTimerExpired(true)
            dialog.current.showModal()
        }, targetTime*1000)
    }

    function handleStop(){
        //need access to the same started timer inside this function
        clearTimeout(timer.current)
    }
    
    return(
        <>
        {<ResultModal ref={dialog} targetTime={targetTime} result='lost'></ResultModal>}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted? handleStop : handleStart}>
                        {timerStarted? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted? 'Time is running...' : 'Time is inactive...' }
                </p>
            </section>
        </>
    )
}