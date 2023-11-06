import { Injectable } from '@angular/core'
import { Course } from './models';
import { Observable, of, Subject } from 'rxjs';

@Injectable ({ providedIn: 'root'})
export class CoursesService {

    constructor() { 

        this.sendNotification$.subscribe({
          next: (message) => alert(message)
        })
      }
    

courses: Course[] = [
    {
        id: 1,
        name: 'JavaScript',
        length: '5 meses',
    },
    {
        id: 2,
        name: 'Angular',
        length: '4 meses',
    },
    {
        id: 3,
        name: 'React',
        length: '4 meses',
    },

];

getCourses$(): Observable <Course[]> {

    return of (this.courses);
}
createCourse$( payload: Course): Observable <Course [] > {
    this.courses.push(payload);
    console.log(this.courses);
    return of ([ ...this.courses ]);
}
editCourses$ (id: number, payload: Course) : Observable < Course []>{
    this.courses.push(payload);
    return of (this.courses.map((c) => c.id === id ? { ...c, ...payload } : c))
}


private sendNotification$ = new Subject <string>();

}