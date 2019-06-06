import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  template: `
<ion-content id="perfil"> <!---->
  <ion-card class="item" >
    <ion-toolbar *ngIf="(afauth.user | async) as user; else loginItems">
      <ion-grid>
        <ion-row>
          <ion-col col-4>
            <div class="user-avatar">
              <ion-avatar (click)="perfilPopover($event)" class="avatar1">
                <img src="../../../assets/imgs/Rubiria.jpg">
              </ion-avatar>
            </div>
          </ion-col>
          <ion-col col-8>  
            <h2 ion-text text-center class="no-margin bold text-white">
              Rubiria Andressa
            </h2>
            <ion-text text-center>{{user.email}}</ion-text>
          </ion-col>
        </ion-row>
        <ion-list class="item">
          <ion-item button [routerLink]="['/editar-perfil']" color="orange">
            <ion-icon name="contact" color="primary"></ion-icon> <ion-text color="primary">Editar Perfil</ion-text>
          </ion-item>
          <ion-item button (click)="logout()" color="orange">
            <ion-icon name="log-out"color="primary"></ion-icon><ion-text color="primary">Sair</ion-text>
          </ion-item>
          <ion-item button routerLink="/ajuda">
            <ion-icon name="help-circle" item-start color="primary"></ion-icon>
            Ajuda
          </ion-item>
          <ion-item button routerLink="/detalhescontato">
            <ion-icon name="information-circle" item-start color="primary"></ion-icon>
            Sobre o app
          </ion-item>
          <!-- <ion-button ion-item>
            <ion-icon name="cafe" item-start></ion-icon>
            Cafe  
          </ion-button> -->
        </ion-list>
      </ion-grid>
    </ion-toolbar>  
  </ion-card>
</ion-content> `
})
export class PerfilComponent implements OnInit {
  user: User = {
    email: 'aptasks@gmail.com',
    password: 'aptasks2019'
  };
  constructor(private afauth: AngularFireAuth,
              private nav: NavController) { }

  ngOnInit() {
  }

  async logout(){ //Sair do app
    this.afauth.auth.signOut();
    this.nav.navigateForward('/welcome'); //parei aqui
  }

}
