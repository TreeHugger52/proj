import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs";
import { tap } from "rxjs/operators";

export interface Res {
  idToken?: string;
  email?: string;
  refreshToken?: string;
  expiresIn?: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private userObject: ReplaySubject < Res > = new ReplaySubject<Res>(1);

  constructor(private http: HttpClient) {
  }

  get userData (): ReplaySubject< Res > {
    return this.userObject;
  }

  login(data: { userID: string, pin: string }) {
    const apiLogin: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAhrSOFPtBA-YMlFdBqVo13i5KcQ7JRZg";

    return this.http.post < Res >(apiLogin, {email: data.userID, password: data.pin, returnSecureToken: true})
      .pipe(
        tap((newUser : Res) => {
          this.userObject.next(newUser);
        })
      );

  }


}
