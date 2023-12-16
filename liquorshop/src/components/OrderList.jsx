import { useEffect, useState } from "react";
import { Container, Table,Button} from "react-bootstrap";
import { deleteProduct, fetchProduct } from "../Services/ProductServices";
import { useNavigate } from "react-router-dom";
import { Navigationbar } from "./Navigationbar";
export function OrderList() {
    
    const [product, setProduct] = useState([]);
 
    const navigate=useNavigate();
    async function populateProduct() {
        try {
            const data = await fetchProduct();
            setProduct(data.shop);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateProduct();
    },[]);

    const handleDeleteClick=async (id_no)=>{
        try {
            await deleteProduct(id_no);
            await populateProduct();
        } catch (error) {
            console.log(error)
        }
    }
    
 
    return (
        <>
        <Navigationbar></Navigationbar>
        <Container>
            {product.length!==0?<Table className="mt-4">
                <thead>
                    <tr>
                        <th>User_name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Id_no</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {   product.map((p)=>{
                        
                            return(
                                <tr>
                                    <td>{p.user}</td>
                                    <td>{p.phone}</td>
                                    <td>{p.address}</td>
                                    <td>{p.id_no}</td>
                                    <td>{p.price}</td>
                                   
                                    <td><Button variant="danger" onClick={()=> {
                                    handleDeleteClick(p.id_no);}} >Delete</Button>&nbsp;&nbsp;
                                   
                                    <Button variant="success" onClick={()=>{navigate(`/edit/${p.id_no}`);}}>Edit</Button></td>
                                </tr>
                            )
                        })
                    
                }
            
                </tbody>
            
            </Table>:<p>Product not found</p>
}

        </Container>
        </>
    );
}
export default OrderList;