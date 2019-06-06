import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';

  user: User = {
    email: 'aptasks@gmail.com',
    password: 'aptasks2019'
  };

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

  async loginUser() {
    const user = await this.afauth.auth.signInWithEmailAndPassword(
      this.user.email, this.user.password
    ).then( data =>{
      console.log(data);
      this.errorMessage = "";
    this.nav.navigateForward('/'); //parei aqui
    this.presentToast();
    console.log(user);
    }, err => {
      this.errorMessage = err.message;
    })
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Login feito com sucesso :).',
      duration: 2000
    });
    toast.present();
  }

  goCadastrar() {
    this.nav.navigateForward('/register');
  }


}
