import { ToastContainer, Toast } from 'react-bootstrap';

/**
 * 
 * @param {{variant:"success" | "danger",message:string,onClose:()=>void}} props 
 * @returns 
 */
export default function Snackbar(props) {

    const { variant, message, onClose } = props;

    return (
        <ToastContainer className="p-3" position="bottom-end">
            <Toast
                className="d-inline-block m-1"
                autohide
                delay={1000}
                bg={variant}
                onClose={onClose}
            >
                <Toast.Body className='text-white'>
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}