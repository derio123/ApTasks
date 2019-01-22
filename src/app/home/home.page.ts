import { Component, OnInit } from '@angular/core';
import { GeraisService, Todo } from '../services/gerais.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  todos: Todo[];
  constructor(private todoService: GeraisService,
    public alertController: AlertController,
    private nav: NavController) { }
  titulo = ['$APC'];
  segmentChanged(ev: any) {
    console.log('Segment changed', ev); }
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    }); }

  async remove(item) {
    const alert = await this.alertController.create({
      header: 'Tem certeza disso!',
      translucent: true,
      message: '<strong>Deseja remover a tarefa???</strong>',
      buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }}, {
          text: 'Ok',
          handler: () => {
              this.todoService.removeTodo(item.id);
            }}]  });
    await alert.present();  } }


