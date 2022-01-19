import { combineReducers } from "redux";
import { contactReducer } from "./ContactReducer";
import { conversationReducer } from "./ConversationReducer";

const rootReducer = combineReducers({
    contactReducer : contactReducer,
    conversationReducer : conversationReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;