import * as crypto from "crypto";

export class PasswordController {

    private genRandomString(length:number){
        return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex') /** convert to hexadecimal format */
                .slice(0,length);   /** return required number of characters */
    };

    private sha512(password: string, salt: string) {
        let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
        hash.update(password);
        const value = hash.digest('hex');
        return {
            salt:salt,
            passwordHash:value
        };
    };

    // public saltHashPassword(userpassword: string) {
    //     const salt = PasswordController.prototype.genRandomString(16); /** Gives us salt of length 16 */
    //     const passwordData = PasswordController.prototype.sha512(userpassword, salt);
    //     return passwordData;
    // }
    public saltHashPassword(password: string){
        const salt = crypto.randomBytes(16).toString('hex');
        const pwd = crypto.pbkdf2Sync(password, salt,  
            1000, 64, 'sha512').toString('hex');
        return{
            salt: salt,
            password: pwd
        }
    }

    // https://www.geeksforgeeks.org/node-js-password-hashing-crypto-module/
    public validatePassword(password: string, salt: string, hash: string) {
        const _hash = crypto.pbkdf2Sync(password,  salt, 1000, 64, 'sha512').toString('hex'); 
        return hash === _hash; 
    }
}