import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Contact from "../../Models/ContactsModel";
import { RootState } from "../../redux/reducers";

export default function Contacts() {
  const contacts = useSelector((state: RootState) => state.contactReducer);
  return (
    <ListGroup variant="flush" className="border-right">
      {contacts.map((contact: Contact) => {
        return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}
