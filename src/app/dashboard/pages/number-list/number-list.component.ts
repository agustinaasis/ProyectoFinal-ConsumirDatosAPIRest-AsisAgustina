import { Component } from '@angular/core';
import { Observable, delay, filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})
export class NumberListComponent {
  numbers$: Observable<number[]>;

  constructor(){
    this.numbers$ = this.generateNumbers();
  }

  private generateNumbers(): Observable<number[]> {

    return of ([1, 2, 3, 4, 5]).pipe(
      delay(5000),
      tap((numeros) => console.log('Mostrando números' , numeros))
    );
  }

}


