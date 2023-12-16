import { Modal, Button, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../Services/UserService";
import { Navigationbar } from './Navigationbar';

export function UsersList() {

    const [user, setUser] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [seletedEmail, setSelectedEmail] = useState("");


    const openModalDialog = () => {
        setShowDialog(true);
    }

    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function fetchUsersList() {
        try {
            const data = await getUsers();
            setUser(data.user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsersList();
    }, []);

    const handleDeleteClick = async () => {
        try {
            await deleteUser(seletedEmail);
            fetchUsersList(); //This is to Update the list after deleting
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Navigationbar></Navigationbar>
            {user.length !== 0 ? <Table className="mt-5">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Options</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((s) => {
                            return (
                                <tr>
                                    <td>{s.name}</td>
                                    <td>{s.phone}</td>
                                    <td>{s.email}</td>
                                    <td>{s.password}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            openModalDialog();
                                            setSelectedEmail(s.email);
                                        }}>Delete</Button> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> : <h4>Currently, You Don't Have Any Users...</h4>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to delete {seletedEmail}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        handleDeleteClick();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}


