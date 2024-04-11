import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal({targetTime, onReset, remainingTime}, ref){ //takes 2 arguments now because of forwardRef. 1st is props, 2nd is the ref

    const dialog = useRef()

    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })

    return(
        <dialog ref={dialog} className="result-modal">
            <h2> You </h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal

