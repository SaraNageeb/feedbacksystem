import { useContext } from "react"
import FeedbackContext from "./context/FeedbackContext"

const FeedbackStats = () => {
  const {feedback} =useContext(FeedbackContext)
  //calculate average 
  let average =feedback.reduce((accumelator,currentValue)=>{ return accumelator+currentValue.rating},0) /feedback.length
 //one decimal place  to fixed and remove the decimal place is zero ex 8.0 to 8 with replace regular exprestion
  average=average.toFixed(1).replace(/[.,]0$/,'')
  
  return (
    <div className='feedback-stats'> 
        <h4> {feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average)?0:average } </h4>
    </div>
  )
}
 
export default FeedbackStats