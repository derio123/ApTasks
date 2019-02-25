import { Injectable } from '@angular/core';
// import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

export interface Contato {
  id?: string;
  nome: string;
  phone: string;
  createdAt:  number;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  // private contatosCollection: AngularFirestoreCollection<Contato>;
  // private contatos: Observable<Contato[]>;
  // constructor(db: AngularFirestore) {
  //   this.contatosCollection = db.collection<Contato>('detalhes');
  //   this.contatos = this.contatosCollection.snapshotChanges().pipe(
  //     map(actions => {
  //       return actions.map(a => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         return { id, ...data };
  //       });  })   );  }
  // getcontatos() {  return this.contatos; }
  // getcontato(id) {
  //   return this.contatosCollection.doc<Contato>(id).valueChanges();
  // }
  // updatecontato(contato: Contato, id: string) {
  //   return this.contatosCollection.doc(id).update(contato);
  // }
  // addcontato(contato: Contato) {
  //   return this.contatosCollection.add(contato);
  // }
  // removecontato(id) {
  //   return this.contatosCollection.doc(id).delete();
  // }
}

