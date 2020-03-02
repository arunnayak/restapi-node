  
import { UserController } from "../controllers/userController";

export class UserRoutes {
    public userController: UserController = new UserController();

    public routes(app:any): void {   

        app.route('/users')
        .get(this.userController.getAllUsers);
        app.route('/user')
        .post(this.userController.addUser);
        app.route('/user/:id')
            .get(this.userController.getUser)
            .delete(this.userController.deleteUser)
            .put(this.userController.updateUser);
    }
}
