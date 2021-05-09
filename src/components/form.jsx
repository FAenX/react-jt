import React, {useState} from 'react'
import {postPerson} from '../mutations/updatePeople'
import Loading from './loading'
import Error from './error'


const Form=()=>{
    const [person, setPerson] = useState({})

    // on click
    const submit=(event)=>{
        event.preventDefault()
        postPerson(person)
    }

    // on input values change
    const onChange=(event)=>{
        event.preventDefault()
        const id = event.target.id
        const value = event.target.value

        const localPerson = {...person}
        localPerson[id]=value

        setPerson(localPerson)
    }

    // check if button should be activated
    const disabled = person.name && person.age ?  false : true

    return(
        <>
        <Error/>
        <div className="is-flex is-justify-content-center is-size-4 has-text-weight-bold">Form</div>
        {/* name */}
        <div className="field">
            <label className="label">Full name</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="text" placeholder="Text input" id="name" onChange={onChange}/>
                <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
                </span>
                
            </div>
            <p className="help is-success">Please enter the name</p>
        </div>

        {/* age */}
        <div className="field">
            <label className="label">Age</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="number" placeholder="Age" id="age" onChange={onChange}/>
                <span className="icon is-small is-left">
                <i className="far fa-calendar"></i>
                </span>
               
            </div>
            <p className="help is-success">Please enter the age</p>
        </div>

        {/* submit */}
        { disabled?(<button className="button is-primary" disabled>Submit</button>) :
        <button className="button is-primary" onClick={submit}>Submit</button>}
        <Loading/>
        </>

    )
}

export default Form