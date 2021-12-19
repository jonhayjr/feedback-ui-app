import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

/*Import Components */
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

/* Import data */
import FeedbackData from './data/FeedbackData';

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure that you want to delete?')) {
            const newFeedback = feedback.filter(item => {
                return item.id !== id;
            })
    
            setFeedback(newFeedback);
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = +uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

   

    return (
        <>  
            <Router>
                <Header />
                    <div className='container'>
                        <Routes>
                            <Route path="" element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback}/>
                                    <FeedbackStats feedback={feedback}/>
                                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                                </>
                            }/>
                            <Route path="/about" element={<AboutPage/>}/>
                        </Routes>
                        <AboutIconLink/>
                    </div>
            </Router>
        </>
    )
}

export default App;
