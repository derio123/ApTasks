import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ContatoService, Contato } from 'src/app/services/contato.service';

@Component({
  selector: 'app-detalhescontato',
  templateUrl: './detalhescontato.page.html',
  styleUrls: ['./detalhescontato.page.scss'],
})
export class DetalhescontatoPage implements OnInit {

  contato: Contato = {
    nome: ' ',
    createdAt: new Date().getTime(),
    phone: ' '
  };
  contatoId = null;
  constructor(private route: ActivatedRoute,
     private nav: NavController,
     private contatoService: ContatoService,
     private loadingController: LoadingController) { }
  ngOnInit() {
  //   this.contatoId = this.route.snapshot.params['id'];
  //   if (this.contatoId)  {
  //     this.loadcontato();
    }
  // }
  // async loadcontato() {
  //   const loading = await this.loadingController.create({
  //     message: 'Carregando itens...'
  //   });
  //   await loading.present();
  //   this.contatoService.getcontato(this.contatoId).subscribe(res => {
  //     loading.dismiss();
  //     this.contato = res;
  //   });
  // }
  // async salvar() {
  //   const loading = await this.loadingController.create({
  //     message: 'Salvando Itens....'
  //   });
  //   await loading.present();
  //   if (this.contatoId) {
  //     this.contatoService.updatecontato(this.contato, this.contatoId).then(() => {
  //       loading.dismiss();
  //       this.nav.navigateBack('home');
  //     });
  //   } else {
  //     this.contatoService.addcontato(this.contato).then(() => {
  //       loading.dismiss();
  //       this.nav.navigateBack('home');
  //     });
  //   }
  // }

}
