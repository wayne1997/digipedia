import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, authState, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Observable, map } from 'rxjs';
import { errorMessages } from '@core/variables/firebase-auth.variables';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _auth: Auth) {}

  async register({email, password, name}: any){
    try {
      const userCredential = await createUserWithEmailAndPassword(this._auth, email, password);
      if(userCredential){
        await updateProfile(userCredential.user,{displayName: name});
        await sendEmailVerification(userCredential.user);
      }
    } catch (error: any) {
      const errorMessage =  errorMessages[error.code] || error.message;
      throw new Error(errorMessage);
    }
  }

  async login( {email, password}: any) {
    try {
      const userCredential = await signInWithEmailAndPassword(this._auth, email, password);
      if( !userCredential.user.emailVerified ){
        throw new Error('Por favor verifique su correo electrónico');
      }
      return userCredential.user;
    } catch (error: any) {
      const errorMessage =  errorMessages[error.code] || error.message;
      throw new Error(errorMessage);
    }
  }

  async logout() {
    try {
      await this._auth.signOut();
    } catch (error) {
      throw error;
    }
  }

  get isAuthenticated$(): Observable<boolean> {
    return authState(this._auth).pipe(
      map(user => !!user)
    );
  }

}
