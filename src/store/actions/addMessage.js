export const addMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('chat').add({
            ...message,
            createdDate: new Date()
            
        }).then(() => {
            dispatch({type: 'ADD_MESSAGE', message: message});
        }).catch((err) => {
            dispatch({type: 'ADD_MESSAGE_ERROR', err});
        })
    }
}