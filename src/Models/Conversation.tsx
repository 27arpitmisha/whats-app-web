import Contact from "./ContactsModel";

export default interface Conversation {
  recipents : Contact[]
  messages : string[]
}