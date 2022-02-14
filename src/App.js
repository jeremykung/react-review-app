import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
// import feedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AboutPage from "./views/AboutPage"
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    // const [feedback, setFeedback] = useState(feedbackData)
    // console.log('App', feedback)




    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route exact path='/about' element={
                        <AboutPage />
                    }>
                    </Route>
                </Routes>
                <Link to='/about'>
                    <HelpCenterIcon className="about-icon" color='primary' sx={{ fontSize: 50 }} />
                </Link>
            </Router>
        </FeedbackProvider>
    )
}

export default App


// function App() {
//     const comments = [
//         {
//             id: 1,
//             text: 'first'
//         },
//         {
//             id: 2,
//             text: 'second'
//         },
//         {
//             id: 3,
//             text: 'third'
//         }
//     ]
//     const showComments = true

//     // JSX
//     const commentBlock = (
//         <div className="comments">
//             {comments.map((comment) => (
//                 <div className="comment" key={comment.id}>{comment.text}</div>
//             ))}
//         </div>
//     )

//     return (
//         <div className="container">

//             <h1>Comments ({comments.length})</h1>

//             {/* Show Comments */}
//             {showComments && commentBlock}

//         </div>
//     )
// }