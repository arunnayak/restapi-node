import { Request, Response } from 'express';
import { IUser } from '../models/user.model';
import User from '../models/users';
import { APIResponse } from './APIResponse';
import { PasswordController } from './password.controller';

export class LoginController extends PasswordController {
    constructor(
    ){
        super();
    }
    public login(req: Request, res: Response){
        const { email, password } = req.body;
        if (email && password) {
            const user = User.findOne({email: email}).select('+salt').exec((err: Error, user: IUser)=>{
                if (err) { res.send(err); return };
                if(user){
                    const isvalid = super.validatePassword(
                        password,
                        user.salt,
                        user.password)
                        if (!isvalid){
                            const error: APIResponse = {
                                Error: true,
                                ErrorMsg: 'email and password not match.'
                            }
                            res.json(error);
                            return;
                        }
                        const success: APIResponse = {
                            Success: true,
                            SuccessMsg: 'all good'
                        }
                        res.json(success);
                } 
            });
        }
    }
}