import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onClose,
    onSave
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>You clicked the delete button</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to delete this delicious recipe?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>No, my mistake!</Button>
                <Button variant="primary" onClick={onSave}>Delete it now!</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ConfirmDialog;