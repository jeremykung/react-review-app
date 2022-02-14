import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

function FeedbackList() {

    const { feedback } = useContext(FeedbackContext)

    return (
        <div className="feedback-list">
            {feedback.map(feedbackItem => (
                <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} />
            ))}
        </div>
    )
}

export default FeedbackList