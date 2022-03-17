import { useState ,useContext,useEffect} from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "./context/FeedbackContext"


const FeedbackForm = () => {
    const [review,setReview]= useState("")
    const [rating,setRating]= useState(10)
    const [btnDisabled,setBtnDisabled]= useState(true)
    const [message,setMessage]= useState("")

    const {addFeedback,feedbackEdit,updateFeedback} =useContext(FeedbackContext)
    useEffect(()=>{
        if(feedbackEdit.isEditting===true){
            setBtnDisabled(false)
            setRating(feedbackEdit.item.rating)
            setReview(feedbackEdit.item.review)
        }     
    },[feedbackEdit])

    const handelReview= (e)=>{
        if(review===""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(review!== "" && review.trim().length<=10)
        {
            setBtnDisabled(true)
            setMessage('Please enter at least 10 characters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
     setReview(e.target.value)
    }//end handelReview

    const handelSubmit= (e)=>{
        e.preventDefault()
        if(review.trim().length>10){
            const newFeedback={
                review,
                rating,
            }
             if(feedbackEdit.isEditting===true){
               updateFeedback(feedbackEdit.item.id,newFeedback)
             }else{
                addFeedback(newFeedback)
             }
           setReview('')
        }//end if (review.trim().length>10)

    }//end handelSubmit
  return (
    <Card>
        <form onSubmit={handelSubmit}>
             <h2>
                 How would you rate your service with us ?
             </h2>
             <RatingSelect select={(rating)=>setRating(rating)}/>
             <div className="input-group">
                 <input type='text' onChange={handelReview} placeholder="Write a review " value={review}/>
                 <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
             </div>
             {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm