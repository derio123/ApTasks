import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { GeraisService, Todo } from 'src/app/services/gerais.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  todo: Todo = {
    nome: ' ',
    phone: ' ',
    task: ' ',
    createdAt: new Date().getTime(),
    priority: 0
  };
  todoId = null;
  constructor(private route: ActivatedRoute,
     private nav: NavController,
     private geraisService: GeraisService,
     private loadingController: LoadingController) { }
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando itens...'
    });
    await loading.present();
    this.geraisService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
  async salvar() {
    const loading = await this.loadingController.create({
      message: 'Salvando Itens....'
    });
    await loading.present();
    if (this.todoId) {
      this.geraisService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.geraisService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }

}
