import { Modal, Button, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteMessage, getMessages } from "../Services/MessageService";
import { Navigationbar } from "./Navigationbar";

export function MessageList() {
    const [messages, setMessages] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState("");

    const openModalDialog = () => {
        setShowDialog(true);
    }

    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function fetchMessagesList() {
        try {
            const data = await getMessages();
            setMessages(data.message);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMessagesList();
    }, []);

    const handleDeleteClick = async () => {
        try {
            await deleteMessage(selectedEmail);
            fetchMessagesList(); // This is to update the list after deleting
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Navigationbar></Navigationbar>
        <Container>
            <h1>Message List</h1>

            {messages.length !== 0 ? (
                <Table className="mt-5">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Shipping Information</td>
                            <td>Order Details</td>
                            <td>Options</td>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((message) => (
                            <tr key={message.email}>
                                <td>{message.name}</td>
                                <td>{message.email}</td>
                                <td>{message.shippinginformation}</td>
                                <td>{message.orderdetails}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            openModalDialog();
                                            setSelectedEmail(message.email);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h4>No messages available.</h4>
            )}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {selectedEmail}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleDeleteClick}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </>
    );
}
