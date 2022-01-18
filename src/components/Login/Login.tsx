import React, { useRef } from "react";
import nextId from "react-id-generator";
import { Button, Container, Form, FormGroup } from "react-bootstrap";

interface LoginProp {
    setID : (id :string)=>void
}
export default function Login({setID} : LoginProp) {
  const idRef = useRef<HTMLInputElement | null >(null);
 
  const onSetNewIdHandle= () => setID(nextId());

  const onSetLoginId = () => {
      if(idRef.current)
        {
          setID(idRef.current.value);
        }
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control type="text"  placeholder="Enter your Id" ref={idRef}/>
        </Form.Group>
        <Button variant="primary" className="mr-2" onClick={onSetLoginId }>
          Login
        </Button>
        <Button variant="secondary" onClick={onSetNewIdHandle}> Create New Id </Button>
      </Form>
    </Container>
  );
}
