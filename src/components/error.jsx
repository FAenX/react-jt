import React from 'react'
import {connect} from 'react-redux'

const Error=({state, dispatch})=>{

    const deleteNotification=(event)=>{
        event.preventDefault()
        dispatch({type:'SET_ERROR', state: false})
        dispatch({type:'SET_LOADING', state: false})
    }

    return(
        <>
        {
            state.error ?
            <div className="notification is-danger is-light">
            <button className="delete" onClick={deleteNotification}></button>
            Error
        
            </div>:<div></div>
        }
        </>
    )
}

export default connect((state, dispatch)=>({state, dispatch}))(Error)