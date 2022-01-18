import { combineReducers } from "redux";
import { contactReducer } from "./ContactReducer";

const rootReducer = combineReducers({
    contactReducer : contactReducer 
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;