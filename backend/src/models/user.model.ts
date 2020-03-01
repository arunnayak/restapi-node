import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string,
    fullname: string,
    password: string,
    gender: string,
    mobile: number,
    courses: string[]
}