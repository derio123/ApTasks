import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhescontato',
  templateUrl: './detalhescontato.page.html',
  styleUrls: ['./detalhescontato.page.scss'],
})
export class DetalhescontatoPage implements OnInit {
  value: 0;
  ngOnInit() {

  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
 
}
