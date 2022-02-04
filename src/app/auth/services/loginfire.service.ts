import { Injectable } from '@angular/core';
import { Auth, getAuth, signOut, signInWithEmailAndPassword } from '@angular/fire/auth';

import { LoginData } from '../models/loginData';


@Injectable({
  providedIn: 'root'
})
export class LoginfireService {
  
  //  authorized = getAuth();

  constructor(public auth: Auth, ) { }

  // TODO: implementar conectar login

  onlogin({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  onlogout() {
    return signOut(this.auth);
  }
}
