import { Injectable } from '@angular/core';
// ÍNICIO
// Imports que deverão ser adicionados
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private firebase: AngularFireAuth) {
  }

  registrarUser(email, password){
    return this.firebase.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email, password){
    return this.firebase.auth.signInWithEmailAndPassword(email,password);
  }

  logoutUser(){
    return this.firebase.auth.signOut();
  }
}

