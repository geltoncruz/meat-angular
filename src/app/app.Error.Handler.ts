/**
 * @name app.Error.Handler.ts
 * @description Error maneger
 */
import { Response } from '@angular/http/';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {

    static HandlerError(error: Response | any) {

        let errorMessage: string;
        if (error instanceof Response){
            errorMessage = `error ${error.status} - ao acessar a url ${error.url} - ${error.statusText} `
        }else{
            errorMessage = error.toString();
        }
        return Observable.throw(errorMessage);

    }



}