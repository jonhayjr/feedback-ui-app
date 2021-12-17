import {useState} from 'react';

/*Import Components */
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

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
   

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App;
