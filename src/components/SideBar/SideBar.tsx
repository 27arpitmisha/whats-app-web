import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Contacts from "../Contacts/Contacts";
import Conversations from "../Conversations/Conversations";
import NewContacts from "../NewContactsModal/NewContacts";
import NewConversation from "../NewConversationModal/NewConversation";

export default function SideBar(id: any) {
  const [activeKey, setactiveKey] = useState("Conversations");
  const [modalVisible, setModalVisible] = useState(false);

  const changeVisibleModal = () => {
    setModalVisible(!modalVisible);
  };
  const buttonType =
    activeKey === "Conversations" ? "New Conversations" : "New Contacts";
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container
        activeKey={activeKey}
        onSelect={(e: any) => setactiveKey(e)}
      >
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="Conversations">Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Contacts">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={"Conversations"}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={"Contacts"}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your ID : <span className="text-muted">{id.id}</span>
        </div>
        <Button onClick={()=>{changeVisibleModal()}}className="rounded-0">{buttonType}</Button>
      </Tab.Container>
      <Modal show={modalVisible} onHide={changeVisibleModal}>
        {activeKey === "Conversations" ? <NewConversation /> : <NewContacts />}
      </Modal>
    </div>
  );
}
