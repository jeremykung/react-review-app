import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)

    let average = 0

    for(let i=0; i<feedback.length; i++) {
        average += feedback[i].rating
    }

    return (
        <div className="feedback-stats">
            <div className="total-reviews">{feedback.length} Reviews</div>
            <div className="average-rating">Average Rating: {Math.ceil(average/feedback.length)}</div>
        </div>
    )
}

export default FeedbackStats