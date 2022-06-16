import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { app, database } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore'
import NavBar from '../components/navBar';
import TableData from '../components/TableData';
export default function Dashboard() {
  const auth = getAuth();
  const collectionRef = collection(database, 'projects');
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({});
  const [isLogin, setIsLogin] = useState(false);
 
  const handleInput = (e) => {
    const input = { [e.target.name]: e.target.value };
    setInputData({ ...inputData, ...input });
  }
  const mapData = (data) =>{
     const fdata =  {
        "descriptions": data.descriptions,
        "github": data.github,
        "name": data.name,
        "url": data.url,
        "date": {
            "seconds": (new Date(data.date).getTime() / 1000),
            "nanoseconds": 0
        },
        "stack": data.stack.split(',')
      }
      return fdata;
  }
  const handleSubmit = () => {
    const body = mapData(inputData);
    console.log('data',body)
    addDoc(collectionRef,body).then((res)=>{
      console.log('added',res);
    })
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
  }, [])

  return (
    <>
      <NavBar />
      <Container className="container-fluid">
        <Row>
          {/* SideNav bar */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-8 pt-3 px-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button className="btn btn-sm btn-outline-secondary">Share</button>
                  <button className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  This week
                </button>
              </div>
            </div>
            <Col>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                      name="name"
                      onChange={(event) => handleInput(event)}
                      placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date"
                      name="date"
                      onChange={(event) => handleInput(event)}
                      placeholder="Enter Name" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="text" name="url" onChange={(event) => handleInput(event)} placeholder="Public url" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label>Github</Form.Label>
                    <Form.Control type="text" name="github" onChange={(event) => handleInput(event)} placeholder="Github url" />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Descriptions</Form.Label>
                  <Form.Control type="text" name="descriptions" onChange={(event) => handleInput(event)} placeholder="Descriptions" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Stack</Form.Label>
                    <Form.Control type="text" name="stack" onChange={(event) => handleInput(event)} placeholder="Tech Stack" />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="button" onClick={()=>handleSubmit()}>Submit</Button>
                <Button variant="primary" type="reset">Reset</Button>
              </Form>
            </Col>
            <h2>Section title</h2>
            {/* Table */}
            <TableData/>
          </main>
        </Row>
      </Container>
    </>
  )
}
