import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

/* Import data */
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false});

    //Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure that you want to delete?')) {
            const newFeedback = feedback.filter(item => {
                return item.id !== id;
            })
    
            setFeedback(newFeedback);
        }
    }

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = +uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    //Set Item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedbackContext.Provider value={{feedback,  feedbackEdit,  deleteFeedback, addFeedback, editFeedback, updateFeedback}}>
                {children}
           </FeedbackContext.Provider>
}

export default FeedbackContext;