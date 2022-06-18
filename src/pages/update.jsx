import { app, database } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc,getDoc,updateDoc, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavBar from '../components/navBar';
import Row from 'react-bootstrap/Row';
export default function Update() {
  const params = useParams();
  const auth = getAuth();
  const collectionRef = collection(database, 'projects');
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const handleInput = (e) => {
    const input = { [e.target.name]: e.target.value };
    setInputData({ ...inputData, ...input });
  }
  const mapData = (data) => {
    const stack = ( typeof data.stack == 'string') ? data.stack.split(',') : data.stack;
    const fdata = {
      "descriptions": data.descriptions,
      "github": data.github || null,
      "name": data.name,
      "url": data.url || null,
      "stack": stack
    }
    return fdata;
  }
  const handleSubmit = () => {
    const body = mapData(inputData);
    const col = doc(database, 'projects',params.id)
    updateDoc(col, body).then((res) => {
      alert('updated')
    })
  }
  const getProject = () => {
    const col = doc(database, 'projects',params.id)
    getDoc(col).then((data) => {
      console.log('data',data.data())
      setInputData(data.data());
    });
}

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setIsLogin(true);
        console.log('login')
      } else {
        // User is signed out
        setIsLogin(false);
        console.log('login out')
        navigate('/login', { replace: true });
      }
    });
    getProject()
  }, [])


  return (
    <>
      <NavBar />
      <Container
        aria-live="polite"
        aria-atomic="true"
        className="container-fluid  bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >
        <Row>
          {/* <Toster></Toster> */}
          {/* SideNav bar */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-8 pt-3 px-4">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"
                    name="name"
                    value={inputData.name}
                    onChange={(event) => handleInput(event)}
                    placeholder="Enter Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date"
                    name="date"
                    disabled
                    placeholder="Enter Name" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>URL</Form.Label>
                  <Form.Control 
                      type="text" 
                      name="url" 
                      value={inputData.url}
                      onChange={(event) => handleInput(event)} placeholder="Public url" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>Github</Form.Label>
                  <Form.Control type="text"
                      value={inputData.github} 
                      name="github" onChange={(event) => handleInput(event)} placeholder="Github url" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Descriptions</Form.Label>
                <Form.Control type="text" 
                  value={inputData.descriptions}
                name="descriptions" onChange={(event) => handleInput(event)} placeholder="Descriptions" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Stack</Form.Label>
                  <Form.Control type="text" 
                    value={inputData.stack}
                    name="stack" onChange={(event) => handleInput(event)} placeholder="Tech Stack" />
                </Form.Group>
              </Row>
              <Button variant="primary" type="button" onClick={() => handleSubmit()}>Submit</Button>
              <Button variant="primary" type="reset">Reset</Button>
              <a href="/dashboard" class="btn btn-link"> Dashboard </a>
            </Form>
          </main>
        </Row>
      </Container>
    </>
  )
}
