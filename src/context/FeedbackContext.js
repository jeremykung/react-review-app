import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 0,
            text: 'This comment is from context',
            rating: 4
        },
        {
            id: 1,
            rating: 5,
            text: 'first'
        },
        {
            id: 2,
            rating: 3,
            text: 'second'
        },
        {
            id: 3,
            rating: 4,
            text: 'third'
        }
    ])

    const [feedbackUpdates, setFeedbackUpdates] = useState({
        item: {},
        editMode: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Delete feedback?')) {
            setFeedback(feedback.filter(element => element.id !== id))
        }
    }

    const editFeedback = item => {
        // console.log('edit', item)
        setFeedbackUpdates({
            item, 
            editMode: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        console.log(id, updatedItem)
        setFeedback(
            feedback.map(item => (item.id === id ? {...item, ...updatedItem} : item)
            )
        )
    }

    return (
        <FeedbackContext.Provider 
            value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackUpdates, updateFeedback }}
        >
            {children}
        </FeedbackContext.Provider>

    )
}

export default FeedbackContext