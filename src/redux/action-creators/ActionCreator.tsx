import Contact from "../../Models/ContactsModel";
import { ActionConstants } from "../action-constants/ActionConstants";

export const AddContacts = (contact: Contact) => {
  return {
    type: ActionConstants.ADD_CONTACTS,
    payload: contact,
  };
};

export const addConversations = (contact: Contact[]) => {
    return {
      type: ActionConstants.ADD_CONVERSATION,
      payload: contact,
    };
  };