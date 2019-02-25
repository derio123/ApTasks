import { Component, OnInit } from '@angular/core';
import { GeraisService, Todo } from '../services/gerais.service';
import { NavController, AlertController } from '@ionic/angular';
import { ContatoService, Contato } from '../services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  todos: Todo[];
  contatos: Contato[];
  constructor(private todoService: GeraisService,
    private contatoService: ContatoService,
    public alertController: AlertController,
    private nav: NavController) { }
  titulo = ['$APC'];
  segmentChanged(ev: any) {
    console.log('Segment changed', ev); }
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
    // this.contatoService.getcontatos().subscribe(res => {
    //   this.contatos = res;
    // });
  }

  async remove(item) {
    const alert = await this.alertController.create({
      header: 'Tem certeza disso!',
      translucent: true,
      message: '<strong>Deseja remover a tarefa???</strong>',
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'orange',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }}, {
          text: 'Ok',
          handler: () => {
              this.todoService.removeTodo(item.id);
            }}]  });
    await alert.present();
  }
  // async excluir(item) {
  //   const alert = await this.alertController.create({
  //     header: 'Tem certeza disso!',
  //     translucent: true,
  //     message: '<strong>Deseja remover a contato???</strong>',
  //     buttons: [{
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'orange',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }}, {
  //         text: 'Ok',
  //         handler: () => {
  //             this.contatoService.removecontato(item.id);
  //           }}]  });
  //   await alert.present();
  // }
}


