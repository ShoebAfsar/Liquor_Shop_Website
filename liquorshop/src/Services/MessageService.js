import axios from "axios";

export async function messagesend(creditials){
    const response =await axios.post(`http://127.0.0.1:5700/message`,creditials);
    return response.data;
}

export async function sendMessage(data) {
    try {
        const response = await axios.post("http://127.0.0.1:5700/message", data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getMessages() {
    try {
        const response = await axios.get("http://127.0.0.1:5700/message/details");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteMessage(email) {
    try {
        const response = await axios.delete(`http://127.0.0.1:5700/message/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function fetchMessage(email) {
    try {
        const response = await axios.get(`http://127.0.0.1:5700/message/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
