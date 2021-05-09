import React from 'react'
import {connect} from 'react-redux'


const Loading=(state)=>{
    return(
        <>
        { state.loading?
        (<progress className="progress is-small is-primary" max="100">15%</progress>):
        <div></div>
        }
        </>
    )
}

export default connect((state)=>(state))(Loading)