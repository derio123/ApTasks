import { Injectable } from '@angular/core';
// ÍNICIO
// Imports que deverão ser adicionados
//import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

 /*  user: Observable<firebase.User>; */

  constructor(private firebase: AngularFireAuth) {
    /* this.user = firebase.authState; */
  }

 /*  registrarUser(user: User){
    return this.firebase.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  loginUser(user: User){
    return this.firebase.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logoutUser(user: User){
    return this.firebase.auth.signOut();
  } */
}

