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

  searchQuery: string = ''; 
  private tarefas: Tarefas[];
  public loader;
 /*  page = "0";
  @ViewChild('slider') slider: Slides; */

  constructor(private tarefasService: GeraisService,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    public alertController: AlertController) {
      this.initialTarefas();
    }

  titulo = ['$APC'];
  segmentChanged(ev: any) { //Utilizado para carregar as abas segmentares.
    console.log('Segment changed', ev);
  }

  filterTarefa(ev: any) {
    this.initialTarefas();
    const taf = ev.target.value;
    if (taf && taf.trim() != '') {
      this.tarefas = this.tarefas.filter((tarefa) =>{
        return(tarefa.nome.toLowerCase().indexOf(taf.toLowerCase()) >-1);
      })
    }
  }

  initialTarefas() {
    this.tarefasService.getTarefas().subscribe(res => {
      this.tarefas = res;
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

  ngOnInit() { //Mostra todos os itens na tela.
    this.initialTarefas();
    this.abLoad();
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
