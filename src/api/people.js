import axios from 'axios'

export const getPeople = async ()=>{
    try{
        return await axios.get(`/api/`)
    }catch(error){
        throw new Error('error')
    }
    
}

export const postPeople =async (data)=>{
    try{
        return await axios.post(`/api/`, {...data})
    }catch(error){
        throw new Error('error')
    }

    
}