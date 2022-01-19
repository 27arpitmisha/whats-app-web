import Contact from "../../Models/ContactsModel";
import { ActionConstants } from "../action-constants/ActionConstants";

const initContact: Contact[] = [];
// const initialValue = {
//   contacts: initContact,
// };
export const contactReducer = (
  state = initContact,
  action: { type: string; payload: Contact }
) => {
  switch (action.type) {
    case ActionConstants.ADD_CONTACTS: {
      const upDatedContact = [
        ...state,
        { name: action.payload.name, id: action.payload.id },
      ];
      return upDatedContact;
    }
    default:
      return state;
  }
};

export const findContactfromIds = (
  state: typeof initContact,
  selectedIds: string[]
) => {
  let listOfRecipients: Contact[] = [];

  const listOfContact = state.filter((contact: Contact) => {
    return selectedIds.map((id: string) => {
      if (contact.id === id) {
        listOfRecipients.push(contact);
      }
    });
  });
  return listOfRecipients;
};
