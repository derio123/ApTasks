import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { GeraisService, Tarefas } from 'src/app/services/gerais.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  tarefa: Tarefas = {
    nome: '',
    phone: '',
    priority: 0,
    task: '',
    createdAt: new Date().getTime(),
    concluidas: ['', 'sim', 'não']
  };

  constructor(private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private router: Router,
    private tarefaServe: GeraisService,
    private toastCtrl: ToastController,
  ) { }
  ngOnInit() {

  }
  ionViewWillEnter() { //Lê todas as tarefas
    let id = this.activatedRoute.snapshot.paramMap
      .get('id');
    if (id) {
      this.tarefaServe.getTarefa(id).subscribe(tarefa => {
        this.tarefa = tarefa;
      });
    }
  }

  addTask() { //Add uma nova tarefa
    this.tarefaServe.addTarefa(this.tarefa).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Tarefa adicionada!');
    }, err => {
      this.showToast(
        'Erro ao adicionar! :('
      );
    });
  }

  atTask() {// Atualiza e salva uma tarefa
    this.tarefaServe.updateTarefa(this.tarefa).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Tarefa atualizada');
    }, err => {
      this.showToast(
        'Erro ao atualizar! :('
      );
    });
  }

  async exTask() { // Exlcui um tarefa
    const alert = await this.alertCtrl.create({
      header: 'Tem certeza disso!',
      translucent: true,
      message: '<strong>Deseja remover a tarefa???</strong>',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Ok',
        cssClass: 'primary',
        handler: () => {
          this.tarefaServe.removeTarefa(this.tarefa.id).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Excluído com sucesso!');
          }, err => {
            this.showToast(
              'Houve um problema ao exlcui :('
            );
          });
        }
      }]
    });
    await alert.present();
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
