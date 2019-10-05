import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
  template: `
  <ion-header>
    <ion-toolbar color="orange">
      <ion-title color="warning" text-center>
        <ion-icon name="contact" color="primary"></ion-icon>EditarPerfil
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="item">
  <ion-text>Em breve editação do perfil</ion-text>
    <ion-fab class="item" vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-buttons>
          <ion-back-button defaultHref="/home" color="light" title="Ir à tela principal" routerDirection="auto">
          </ion-back-button>
        </ion-buttons>
      </ion-fab-button>
    </ion-fab>
  </ion-content> `
})
export class EditarPerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
