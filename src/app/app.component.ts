import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
 /*  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Sobre App', url: '/detalhescontato', icon: 'information-circle'},
    { title: 'Ajuda', url: '/ajuda', icon: 'help-circle'}
  ]; */

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
     private firebase: AngularFireAuth,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.firebase.user.subscribe(
        data =>{
          if(!data){
            this.router.navigate(['welcome']);
          } else{
            this.router.navigate(['home']);
          }
        })
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#ff8040');
      this.splashScreen.hide();
    });
  }
}
