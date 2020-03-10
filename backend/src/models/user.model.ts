import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string,
    fullname: string,
    password: string,
    salt: string,
    gender: string,
    mobile: number,
    courses: string[]
}