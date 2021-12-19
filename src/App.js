import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

/*Import Components */
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

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
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App;
