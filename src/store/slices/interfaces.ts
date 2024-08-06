// MESSAGES
export interface MsgI {
  _id: string,
  date: string,
  author: string,
  target: string,
  content: string,
  isRead: boolean
}

// CHATS

export interface ChatI {
  messages: MsgI[],
  _id: string,
  participants: UserI | UserI[],
  hasUnread: boolean,
}
export interface ChatsListSliceI {
  chats: ChatI[],
  lastMessages?: [],
}
//USER
export interface UserI {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
	logins: number,
}
