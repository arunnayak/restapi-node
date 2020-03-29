import { Request, Response } from "express";
import { IUser } from "../models/user.model";
import User from '../models/users';
import { PasswordController } from "./password.controller";
import { APIResponse } from "./APIResponse";

export class UserController extends PasswordController {
  constructor() {
    super();
  }
  
  // - GET - /users # returns all users
  public getAllUsers(req: Request, res: Response) {
    let users = User.find((err: Error, users: IUser) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(users);
    });
  }
  // - GET - /user/{i} # returns user with id i
  public getUser(req: Request, res: Response) {
    User.findById(req.params.id, (err: Error, user: IUser) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send(user);
    });
  }
  // - POST - /user/{i} # insert new user into the table
  public addUser(req: Request, res: Response) {
    let user = new User(req.body);
    UserController.prototype
    .validateEmail(user.email).then(exist => {
      if (exist) {
        const error: APIResponse = {
          Error: true,
          ErrorMsg: "Email already exist."
        };
        res.json(error);
        return;
      }

      const credentials = super.saltHashPassword(user.password);
      user.password = credentials.password;
      user.salt = credentials.salt;
      user.save((err: any) => {
        if (err) {
          res.send(err);
          return;
        }
        res.send(user);
      });
    });
  }
  // - DELETE - /user/{i} # deletes user with id i
  public deleteUser(req: Request, res: Response) {
    User.deleteOne({ _id: req.params.id }, (err: Error) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send("Successfully deleted the user");
    });
  }
  // - PUT - /user # updates a user with id i
  public updateUser(req: Request, res: Response) {
    User.findByIdAndUpdate(req.params.id, req.body, (err: Error) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send("Successfully updated the user");
    });
  }

  public validateEmail(email: string){
    return User.findOne({email: email}).then(function(result){
        return result !== null;
   });
 }
}
