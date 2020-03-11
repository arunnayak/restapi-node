import * as crypto from "crypto";
import { Request, Response } from 'express';
import { IUser } from '../models/user.model';
import User from '../models/users';
import { PasswordController } from "./password.controller";

export class UserController extends PasswordController {
    constructor(){
        super();
    }
    // - GET - /users # returns all users
    public getAllUsers(req: Request, res: Response){
        let users = User.find((err: Error, users: IUser) => {
            if (err) { res.send(err); return };
            res.send(users);
        });
    }
    // - GET - /user/{i} # returns user with id i
    public getUser(req: Request, res: Response) {
        User.findById(req.params.id, (err: Error, user: IUser) => {
            if (err) { res.send(err); return };
            res.send(user);
        });
    }
    // - POST - /user/{i} # insert new user into the table
    public addUser(req: Request, res: Response){
        let user = new User(req.body);
        user.salt = crypto.randomBytes(16).toString('hex');
        user.password = crypto.pbkdf2Sync(user.password, user.salt,  
            1000, 64, 'sha512').toString('hex');
        user.save((err: any) => {
            if (err) { res.send(err); return };
            res.send(user);
        });
    }
    // - DELETE - /user/{i} # deletes user with id i
    public deleteUser(req: Request, res: Response){
        User.deleteOne({ _id: req.params.id }, (err: Error) => {
            if (err) { res.send(err); return };
            res.send('Successfully deleted the user');
        });
    }
    // - PUT - /user # updates a user with id i
    public updateUser(req: Request, res: Response){
        User.findByIdAndUpdate(req.params.id, req.body, (err: Error) => {
            if (err) { res.send(err); return };
            res.send('Successfully updated the user');
        });
    }
}