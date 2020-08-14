import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Dependencia do banco
import { AngularFireModule } from '@angular/fire';
//Ambiente de dados Firebase
import { environment } from 'src/environments/environment';
//Modulo do Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Modulo do Firebase de autenticação
import { AngularFireAuthModule } from '@angular/fire/auth';
//Importação da conexão do serviço
import { ContatoService } from './services/contato.service';
//Componente criado no ionic
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, PerfilComponent,],
  entryComponents: [MenuComponent, PerfilComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContatoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
