import { Request, Response } from 'express';
import User from '../models/users';

// - GET - /users # returns all users
export let allUsers = (req: Request, res: Response) => {
    let users = User.find((err: any, users: any) => {
        if (err) { res.send(err); return };
        res.send(users);
    });
}
// - GET - /user/{i} # returns user with id i
export let getUser = (req: Request, res: Response) => {
    User.findById(req.params.id, (err: any, user: any) => {
        if (err) { res.send(err); return };
        res.send(user);
    });
}
// - POST - /user/{i} # insert new user into the table
export let addUser = (req: Request, res: Response) => {
    let user = new User(req.body);

    user.save((err: any) => {
        if (err) { res.send(err); return };
        res.send(user);
    });
}
// - DELETE - /user/{i} # deletes user with id i
export let deleteUser = (req: Request, res: Response) => {
    User.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) { res.send(err); return };
        res.send('Successfully deleted the book');
    });
}
// - PUT - /user # updates a user with id i
export let updateUser = (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err: any, user: any) => {
        if (err) { res.send(err); return };
        res.send('Successfully updated the book');
    });
}