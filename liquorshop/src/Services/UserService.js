import axios from "axios";


export async function login(creditials){
    const response =await axios.post(`http://127.0.0.1:5800/user/login`,creditials);
    return response.data;
}

export async function signup(creditials){
    const response = await axios.post(`http://127.0.0.1:5800/user/signup`,creditials);
    return response.data;
}

export async function fetchData(){
    const response = await axios.get(`http://127.0.0.1:5800/user/details`);
    return response.data;
}

//watch morning lecture from 19 mi

export async function getUsers(){
    try {
       const response = await axios.get("http://127.0.0.1:5800/user/details");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function SaveUsers(userData){
    try {
       const response = await axios.post("http://127.0.0.1:5800/user",userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(email){
    try {
        const response = await axios.delete(`http://127.0.0.1:5800/user/${email}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchUser(email){
    try {
        const response = await axios.get(`http://127.0.0.1:5800/user/${email}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(updatedData,email){
    try {
        const response=await axios.put(`http://127.0.0.1:5800/user/${email}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}