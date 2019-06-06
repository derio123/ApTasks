import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
/* import { Observable } from 'rxjs'; */

import { NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  user: User = {
    email: 'aptasks@gmail.com',
    password: 'aptasks2019'
  };

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email é requerido.' },
      { type: 'pattern', message: 'Por favor entre com email válido.' }
    ],
    'password': [
      { type: 'required', message: 'senha é requerida.' },
      { type: 'pattern', message: 'Por favor entre com senha acima 5 caracteres.' }
    ]
  }
  constructor(private afauth: AngularFireAuth,
    private toast: ToastController,
    private formBuilder: FormBuilder,
    private nav: NavController) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
      ])),

    })
  }

  async cadastrar() {
    const user = await this.afauth.auth.createUserWithEmailAndPassword(
      this.user.email, this.user.password
    );
    this.nav.navigateForward('/login'); //parei aqui
    this.presentToast();
    console.log(user);
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Cadastro feito com sucesso :).',
      duration: 2000
    });
    toast.present();
  }

  goLogin() {
    this.nav.navigateForward('/login');
  }
}