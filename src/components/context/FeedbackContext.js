import { nanoid } from 'nanoid'
import { createContext,useState } from "react";
const FeedbackContext = createContext()
export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:'1',
            rating:10,
            review:"ssd dsdsd sdsdsd dsfdgs as erf sds sd"
        },

    ])
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false,
    })
    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete feedback?'))
        {
          setFeedback(feedback.filter((item)=>item.id !== id))
        }//endif
    }//end deletefunction

    const addFeedback=(newFeedback)=>{
        newFeedback.id = nanoid() 
        console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
      }//end addFeedback
      const updateFeedback=(id,updItme)=>{
          setFeedback(
              feedback.map((item)=>(item.id===id?{...item,...updItme}:item))
          )
      }
       //set the feedback to be updated
      const editFeedback=(item)=>{
        setFeedbackEdit({ 
            item,
            isEditting:true
        })
      }//end editFeedback

    return <FeedbackContext.Provider value={{
         feedback,
         feedbackEdit,
         deleteFeedback,
         addFeedback,
         editFeedback,
         updateFeedback,
         
    }}>
                {children}

           </FeedbackContext.Provider>
}

export default FeedbackContext