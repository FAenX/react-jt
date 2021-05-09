import React from "react";
import { render } from "react-dom";

import Form from './components/form'
import ListPeople from './components/listPeople'
import {Provider} from 'react-redux'
import {store} from './store/store'


const Main=()=>{
    return(
        <Provider store={store}>
        <div  className="is-flex is-justify-content-center" 
            style={{height: '100vh', width: "100vw"}}>
            <div  className="is-flex is-justify-content-center">
                <div className="is-flex is-justify-content-center is-flex-direction-column">  

                   <Form/>
                   <ListPeople/>
                </div>
            </div>
        </div>
        </Provider>
    )
}

render(<Main/>, document.getElementById("root"));