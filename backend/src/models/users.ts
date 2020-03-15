import * as mongoose from "mongoose";
import { IUser } from './user.model';

const userSchema = new mongoose.Schema({
    id: {type: String},
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        index: true,
        sparse: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    fullname: { type: String, required: true, maxlength: 50 },
    password: { type: String, required: true},
    salt: {type: String, required: true, select: false},
    gender: { type: String, required: true },
    mobile: { type: Number, required: true, maxlength: 10 },
    courses: { type: Array, required: true }
    }, 
    {
    timestamps: true
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;

