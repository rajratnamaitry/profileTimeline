import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    const auth = getAuth();
    const navigate = useNavigate();
    const signOutClick = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('signout')
            navigate('/',{ replace:true})
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <Nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Profile Generator</a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#" onClick={()=>signOutClick()} >Sign out</a>
                </li>
            </ul>
        </Nav>
    )
}
