import React, { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function NewContacts() {
  const [formValues, setformValues] = useState({ id: "", name: "" });
  const [errors, setErrors] = useState(false);

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setformValues({ ...formValues, [name]: value });
    setErrors(false);
  };
  const validated = () => {
    if (formValues.id === "" || formValues.name === "") {
      setErrors(true);
      return false;
    } else {
      setErrors(false);
      return true;
    }
  };
  const onSubmit = () => {
    if (validated()) {
      //   createContact(formValues.id, formValues.name);
      console.log("validated");
      console.log(formValues);
    }
  };
  return (
    <>
      <Modal.Header closeButton>New Contacts</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Id"
              name="id"
              onChange={onChangeHandle}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={onChangeHandle}
            />
          </Form.Group>
          <br />
          <Button variant="primary" onClick={onSubmit}>
            New Contact
          </Button>
        </Form>
        {errors ? (
          <span style={{ color: "red" }}>One or more field found empty</span>
        ) : null}
      </Modal.Body>
    </>
  );
}
