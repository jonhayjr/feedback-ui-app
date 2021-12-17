import {useState} from 'react';

/*Import Components */
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

/* Import data */
import FeedbackData from './data/FeedbackData';

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    )
}

export default App;
