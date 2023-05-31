import { HydratedDocument, Model } from "mongoose";

//creating interface
export interface IUser {
    id: string;
    role: "admin" | "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
}


//static
// export interface UserModel extends Model<IUser> {
//     getAdminUsers(): IUser[];
//   }

// Put all user instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}