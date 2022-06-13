import { useState } from 'react'
import { app } from '../firebase';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
function Login() {
    let navigate = useNavigate();
    let auth = getAuth();
    const [data, setData] = useState({});
    const handleInput = (e) => {
        const input = { [e.target.name]: e.target.value };
        setData({ ...data, ...input });
    }
    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('/dashboard', { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(error);
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            placeholder="E-mail"
                                            name="email"
                                            type="email"
                                            onChange={(event) => handleInput(event)}
                                            autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            type="password"
                                            onChange={(event) => handleInput(event)}
                                        />
                                    </div>
                                    {/* <!-- Change this to a button or input when using this as a form --> */}
                                    <button type="button" onClick={(event) => handleSubmit()} className="btn btn-lg btn-success btn-block">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;