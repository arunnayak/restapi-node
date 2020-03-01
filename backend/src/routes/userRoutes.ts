  
import { UserController } from "../controllers/userController";

export class Routes {
    public userController: UserController = new UserController();

    public routes(app:any): void {   

        app.route('/users')
        .get(this.userController.allUsers);
        app.route('/user')
        .post(this.userController.allUsers);
        app.route('/user/:id')
            .get(this.userController.getUser)
            .delete(this.userController.getUser)
            .put(this.userController.getUser);
    }
}
