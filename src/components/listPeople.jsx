import React, {useMemo} from 'react'
import {queryPeople} from '../queries/queryPeople'
import {connect} from 'react-redux'

const ListPeople =(state)=>{

    useMemo(()=>{
        queryPeople()
    }, []) 

    return(
        <div>
            {state.peopleReducer && 
            state.peopleReducer.length > 0 ? 
                (state.peopleReducer.map(person=>{
                    return (<div className="is-flex m-2 is-justify-content-space-between">
                        <div>Name: {person.name}</div>
                        <div>Age: {person.age}</div>


                            </div>)
                }))
            : <p>no data</p>}
        </div>
    )
}

export default connect((state)=>(state))(ListPeople)