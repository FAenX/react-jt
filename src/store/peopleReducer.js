//  intial state
const initialState = null
  
  
//reducer
export default (state = initialState, action)=> {
    switch (action.type) {
      case 'SET_STATE':
        return [...action.state];
      default:
        return state;
    }
};