import {store} from '../store/store'
import {getPeople} from '../api/people'

  

export const queryPeople=async ()=>{
    // console.log(state)
    const {dispatch} = store
    const state = store.getState()

    try{
      const response = await getPeople()
      const people = response.data
      dispatch({type:'SET_STATE', state: people.data})
    }catch(e){
      dispatch({type:'SET_ERROR', state: true})
    }
  }