import { useContext, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

    const [review, setReview] = useState('')
    const [rating, setRating] = useState(5)
    const [invalidReview, setInvalidReview] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const { addFeedback, feedbackUpdates, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        setInvalidReview(false)
        setReview(feedbackUpdates.item.text)
        setRating(feedbackUpdates.item.rating)
    }, [feedbackUpdates])

    const handleReviewChange = (e) => {
        setReview(e.currentTarget.value)
        checkReview()
    }

    const handleRatingChange = (e) => {
        setRating(parseInt(e.currentTarget.value))
    }

    const checkReview = () => {
        if(review.length < 12) {
            setErrorMessage('Review must be at least 12 characters')
            setInvalidReview(true)
        } else {
            setErrorMessage(null)
            setInvalidReview(false)
        }
    }

    const submitFeedback = (e) => {
        e.preventDefault()
        const newFeedback = {
            text: review,
            rating: rating
        }
        if(feedbackUpdates.editMode === true) {
            updateFeedback(feedbackUpdates.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
    }

    return (  
        <div className="feedback-form">
            <form onSubmit={submitFeedback}>
                <div className="review">
                    <input 
                        type="text" 
                        onChange={handleReviewChange} 
                        placeholder="Write a review"
                        value={review}
                        className="review-text"
                    />
                    <Button 
                        variant="text"
                        type="submit" 
                        value="Submit" 
                        disabled={invalidReview}
                        className="review-submit"
                    >
                        Submit
                    </Button>
                </div>
                {/* Change color of range slider, finish video on functionality of it */}
                <input 
                    type="range" 
                    className='review-score' 
                    onChange={handleRatingChange}
                    min="0" 
                    max="5"
                    value={rating}
                />
            </form>
            <div className="form-error">{errorMessage}</div>
        </div>
    )
}

export default FeedbackForm