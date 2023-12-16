import axios from "axios";

export async function adminlogin(creditials){
    const response =await axios.post(`http://127.0.0.1:5900/admin/login`,creditials);
    return response.data;
}