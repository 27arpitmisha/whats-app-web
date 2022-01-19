import Contact from "../../Models/ContactsModel";
import ConversationsModel from "../../Models/Conversation";
import { ActionConstants } from "../action-constants/ActionConstants";

const initConversation: ConversationsModel[] = [
  //   {
  //     recipents: [
  //       { id: "id1", name: "arpit" },
  //       { id: "id2", name: "Mohan" },
  //       { id: "id3", name: "Shyam" },
  //     ],
  //     messages: ["hi"],
  //   },
  //   {
  //     recipents: [
  //       { id: "id1", name: "Ram" },
  //       { id: "id2", name: "Raghav" },
  //       { id: "id3", name: "Shyam" },
  //     ],
  //     messages: ["hi"],
  //   },
];

// const initialValue = {
//   contacts: initContact,
// };

export const conversationReducer = (
  state = initConversation,
  action: { type: string; payload: Contact[] }
) => {
  switch (action.type) {
    case ActionConstants.ADD_CONVERSATION: {
      const upDatedConversations = [
        ...state,
        {
          recipents: action.payload,
          messages: [],
        },
      ];

      return upDatedConversations;
    }
    default:
      return state;
  }
};
