import { Component, OnInit } from '@angular/core';
import { GeraisService, Tarefas } from '../services/gerais.service';
import {
  AlertController,
  LoadingController,
  PopoverController,
} from '@ionic/angular';
import { MenuComponent } from '../components/menu/menu.component';
import { PerfilComponent } from '../components/perfil/perfil.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchQuery: any = [];
  private tarefas: Tarefas[];
  public loader;

  constructor(private tarefasService: GeraisService,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    public alertController: AlertController) {
    this.initialTarefas();
  }

  ngOnInit() { //Mostra todos os itens na tela.
    this.initialTarefas();
    this.abLoad();
  }

  ionViewDidEnter() {
    this.searchQuery =this.tarefas;
  }

  titulo = ['$APC'];
  segmentChanged(ev: any) { //Utilizado para carregar as abas segmentares.
    console.log('Segment changed', ev);
  }

  _ionChange(ev: any) {
    this.initialTarefas();
    console.log(ev);

    const taf = ev.target.value;
    if (taf && taf.trim() != '') {
      this.searchQuery = this.tarefas.filter((tarefa) => {
        return (tarefa.nome.toLowerCase().indexOf(taf.toLowerCase()) > -1);
      });
    } else {
      this.initialTarefas();
    }
  }


  initialTarefas() {
    this.tarefasService.getTarefas().subscribe(res => {
      this.tarefas = res;
      this.searchQuery = this.tarefas;
    });
  }

  async abLoad() { //Abre o carregamento da pagina
    this.loader = await this.loadingCtrl.create({
      message: 'Carregando os tarefas',
      duration: 5000,
      spinner: 'bubbles'
    });
    await this.loader.present();
  }

  async presentPopover(ev: any) { //Mostra um menu, criado apartir de um componte.
    const popover = await this.popoverCtrl.create({
      component: MenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async perfilPopover(ev: any) { //Mostra um menu, criado apartir de um componte.
    const popover = await this.popoverCtrl.create({
      component: PerfilComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
