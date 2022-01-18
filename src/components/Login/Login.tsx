import React, { useRef, useState } from "react";
import nextId from "react-id-generator";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { setDefaultResultOrder } from "dns/promises";

interface LoginProp {
  setID: (id: string) => void;
}
export default function Login({ setID }: LoginProp) {
  const idRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState(false);
  const onSetNewIdHandle = () => setID(nextId());

  const onChangeHanle = () => {
    setError(false);
  };

  const onSetLoginId = () => {
    if (idRef.current) {
      if (idRef.current.value === "") {
        setError(true);
      } else {
        setID(idRef.current.value);
        setError(false);
      }
    }
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Id"
            onChange={onChangeHanle}
            autoComplete="off"
            ref={idRef}
          />
        </Form.Group>
        {error ? <span data-testid="error" style={{ color: "red" }}> Please Enter ID</span> : null}
        <Button variant="primary" className="mr-2" onClick={onSetLoginId}>
          Login
        </Button>
        <Button variant="secondary" onClick={onSetNewIdHandle}>
          {" "}
          Create New Id{" "}
        </Button>
      </Form>
    </Container>
  );
}
