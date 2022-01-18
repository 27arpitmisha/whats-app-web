import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Contacts from "../Contacts/Contacts";
import Conversations from "../Conversations/Conversations";

export default function SideBar(id: any) {
  const [activeKey, setactiveKey] = useState("Conversations");
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container
        activeKey={activeKey}
        onSelect={(e: any) => setactiveKey(e)}
      >
        <Nav variant="tabs" className="justift-content-center">
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
      </Tab.Container>
    </div>
  );
}
