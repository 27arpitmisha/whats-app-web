import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import Contact from "../../Models/ContactsModel";
import { RootState } from "../../redux/reducers";

export default function NewConversation() {
  const [selectedContactIds, setselectedContactIds] = useState<string[]>([]);
  const contacts = useSelector((state: RootState) => state.contactReducer);

  const onSubmitConversationsHandle = () => {
    console.log(selectedContactIds);
  };
  const handleChangeID = (contactId: string) => {
    setselectedContactIds((previoudId) => {
      if (previoudId.includes(contactId)) {
        return previoudId.filter((prevIds) => {
          return contactId !== prevIds;
        });
      } else {
        return [...selectedContactIds, contactId];
      }
    });
  };
  return (
    <>
      <Modal.Header closeButton>New Contacts</Modal.Header>
      <Modal.Body>
        <Form>
          {contacts.map((contact: Contact) => {
            return (
              <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check
                  type="checkbox"
                  value={selectedContactIds.includes(contact.id).toString()}
                  onChange={() => {
                    handleChangeID(contact.id);
                  }}
                  label={contact.name}
                />
              </Form.Group>
            );
          })}
        </Form>
        <Button variant="primary" onClick={onSubmitConversationsHandle}>
          Start conversation
        </Button>
      </Modal.Body>
    </>
  );
}
