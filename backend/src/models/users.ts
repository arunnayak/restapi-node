import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        index: true,
        sparse: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    fullname: { type: String, required: true, maxlength: 30 },
    password: { type: String, required: true }
    }, 
    {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;

