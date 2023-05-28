import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    // name: { type: String, required: true },
    // email: { type: String, required: true },
    // avatar: String,
    id: { type: String, required: true, unique: true },
    role: {
        type: String,
        enum: ['student']
    },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: { type: String },
    contactNo: { type: String, required: true },
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User;