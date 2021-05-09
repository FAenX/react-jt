import {store} from '../store/store'
import {postPeople} from '../api/people'

  

export const postPerson =async (data)=>{
    // console.log(state)
    const {dispatch} = store
    const state = store.getState()

    dispatch({type:'SET_LOADING', state: true})
    
    const response = await postPeople(data)
    
    const success = response.data.status  == 'success' ? true : false
    
    if(success){
      dispatch({type:'SET_STATE', state: response.data.data})
      dispatch({type:'SET_LOADING', state: false})
    }
  }