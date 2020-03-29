  
import { LoginController } from "../controllers/login.controller";

export class LoginRoutes {
    public loginController: LoginController = new LoginController();

    public routes(app:any): void {   
        app.route('/login')
        .post(this.loginController.login);
    }
}
