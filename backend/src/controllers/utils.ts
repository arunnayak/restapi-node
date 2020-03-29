import * as Messages from '../messages.json';
const messages = Messages;

// not completed yet
export class Util {
    public findErrorMsgs = (name: string) => {
        return messages.find(item => {
            return item.name === name;
         })
    }
}