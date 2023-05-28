import User from "./user.model";

export const createUserToDB =async () => {
    const user = await new User({
        id: '01299',
        role: "student",
        password: 'abc123',
        name: {
            firstName: 'Rayhan 99',
            middleName: 'Shawlin',
            lastName: 'Sheikh',
        },
        dateOfBirth: '15/1/96',
        gender: "male" ,
        email: 'abc@mail.com',
        contactNo: '0132025120',
      });
      await user.save();
      return user;
    };
    
    