import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Contact from "../../Models/ContactsModel";
import Conversation from "../../Models/Conversation";
import { RootState } from "../../redux/reducers";

export default function Conversations() {
  const conversations = useSelector(
    (state: RootState) => state.conversationReducer
  );
  return (
    <ListGroup variant="flush" className="border-right">
      {conversations.map((conversation: Conversation, index) => {
        return (
          <ListGroup.Item key={index}>
            {conversation.recipents?.map((recipent: Contact) => {
              return recipent.name + ', ';
            })}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
