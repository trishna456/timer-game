import { forwardRef } from "react"

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref){ //takes 2 arguments now because of forwardRef. 1st is props, 2nd is the ref

    return(
        <dialog className="result-modal" ref={ref}>
            <h2> You {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal

