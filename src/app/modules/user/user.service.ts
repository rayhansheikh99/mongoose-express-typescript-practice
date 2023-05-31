import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  console.log(user.fullName());
  return user;
};

export const getUserToDB = async (): Promise<IUser[]> => {
  const users = await User.find()
  return users;
}
export const getUserIdFromDB = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 , password: 1})
  return user;
}
export const getAdminUsersFromDB = async ()=> {
  const admins = await User.getAdminUsers()
  // const user = await User.findOne({ id: payload }, { name: 1 , password: 1})
  return admins;
}