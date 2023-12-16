import axios from "axios";
export async function fetchProduct(){
    try {
        const response=await axios.get("http://127.0.0.1:4900/shop")
        return response.data;
    } catch (error) {
        console.log(error)
        
    }
}

export async function saveProduct(productData){
    try {
        const response=await axios.post("http://127.0.0.1:4900/shop",productData)
        return response.data;
    } catch (error) {
        console.log(error)
        
    }
}
export async function deleteProduct(id_no){
    try {
        await axios.delete(`http://127.0.0.1:4900/shop/${id_no}`);
       
    } catch (error) {
        console.log(error)
        
    }
}

export async function fetchProductById(id_no){
    try {
        const response=await axios.put(`http://127.0.0.1:4900/shop/${id_no}`)
        return response.data;
    } catch (error) {
        console.log(error)
        
    }

}