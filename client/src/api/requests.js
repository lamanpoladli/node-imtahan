import { BASE_URL } from "./base_url";
import axios from "axios"

export const getAllUsers = async ()=>{
    let globalData ;
    await axios.get(`${BASE_URL}/users`).then((res)=>{
        globalData=res.data
    })
    return globalData
}
export const getUserById = async (ID)=>{
    let globalData ;
    await axios.get(`${BASE_URL}/users/${ID}`).then((res)=>{
        globalData=res.data
    })
    return globalData
}
export const deleteUserById = async (ID)=>{
    await axios.delete(`${BASE_URL}/users/${ID}`)
}
export const postUser =  (payload)=>{
     axios.post(`${BASE_URL}/users`,payload)
}
export const editUser =  (id,payload)=>{
    axios.put(`${BASE_URL}/users/${id}`,payload)
}