
import PropTypes from 'prop-types'
import { useContext } from 'react'
import Card from './shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import FeedbackContext from './context/FeedbackContext'
const FeedbackItem = ({item}) => {
  const {deleteFeedback,editFeedback} =useContext(FeedbackContext)
  return (
    <Card reverse={false}>
        
        <div className='num-display'> {item.rating}</div>
        <button className='close'>
          <FaTimes color='purple' onClick={()=>deleteFeedback(item.id)}/>

        </button>
        <button className='edit' onClick={()=>editFeedback(item)}><FaEdit color="purple"/></button>
        <div className='text-display'> {item.review}</div>

    </Card>
  )
}
FeedbackItem.propTypes = {
    item:PropTypes.object.isRequired,
     

 }
export default FeedbackItem