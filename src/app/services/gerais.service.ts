import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface Tarefas {
  id?: string;
  nome: string;
  phone: string;
  task: string;
  priority: number;
  createdAt: number;
  concluidas: ['', 'sim', 'não'];
}

@Injectable({
  providedIn: 'root'
})
export class GeraisService {
  private tarefasCollection: AngularFirestoreCollection<Tarefas>;
  private tarefa: Observable<Tarefas[]>;
  constructor(private db: AngularFirestore) {
    this.tarefasCollection = this.db.collection<Tarefas>('detalhes');
    this.tarefa = this.tarefasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }
  getTarefas(): Observable<Tarefas[]> { return this.tarefa; }
  getTarefa(id: string): Observable<Tarefas> {
    return this.tarefasCollection
      .doc<Tarefas>(id).valueChanges().pipe(
        take(1),
        map(tarefa =>{
          tarefa.id = id;
          return tarefa
        })
      );
  }
  addTarefa(tarefa: Tarefas): Promise<DocumentReference> {
    return this.tarefasCollection.add(tarefa);
  }

  updateTarefa(tarefa: Tarefas): Promise<void> {
    return this.tarefasCollection.doc(tarefa.id)
    .update({nome:tarefa.nome, phone:tarefa.phone, 
      concluidas: tarefa.concluidas,
       task: tarefa.task, priority: tarefa.priority });
  }
  
  removeTarefa(id: string): Promise<void> {
    return this.tarefasCollection.doc(id).delete();
  }
}
