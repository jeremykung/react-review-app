import Badge from '@mui/material/Badge'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({feedback}) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    // const [rating, setRating] = useState(5)

    return (
        <Badge 
            badgeContent={feedback.rating} 
            color="primary"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <div className="feedback-item">
                <div className='feedback-text'>{feedback.text}</div>
                <div className="feedback-icons">
                    <EditIcon onClick={() => editFeedback(feedback)} />
                    <ClearIcon onClick={() => deleteFeedback(feedback.id)} />
                </div>
            </div>

        </Badge>
    )
}

export default FeedbackItem