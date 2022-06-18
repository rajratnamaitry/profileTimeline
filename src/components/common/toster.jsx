import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
export default function Toster({ title , msg}) {
    return (<div>
        <ToastContainer position="top-end" className="p-3">
            <Toast>
                <Toast.Header>
                    <strong className="me-auto">{}</strong>
                    <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>{msg}</Toast.Body>
            </Toast>
        </ToastContainer>
    </div>
    )
}
