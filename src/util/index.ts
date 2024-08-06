import { UserI } from '@store/slices/interfaces.ts';

export const extractUsers = (users: UserI[], currentUserId: string): UserI | UserI[] => {
  if (users.length >= 2) {
    return users.find(p => p._id !== currentUserId)!;
  } else {
    return users.filter(p => p._id !== currentUserId);
  }
};
